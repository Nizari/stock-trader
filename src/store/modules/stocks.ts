import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import StockRecord from '@/models/StockRecord';
import StockValue from '@/models/StockValue';
import { generateStockPrice } from '@/support/StockValueGenerator';

interface DataStorage {
   availableStocks: StockRecord[];
   myStocks: StockRecord[];
   stockValues: StockValue[];
}

interface BuyStockPayload {
  stockRecord: StockRecord;
  quantity: number;
}

@Module
export default class Stocks extends VuexModule {
  public availableStocks = [new StockRecord('BMW'), new StockRecord('Apple'), new StockRecord('Google'), new StockRecord('KLM')];
  public myStocks: StockRecord[] = [];
  public stockValues: StockValue[] = [new StockValue('BMW', 101), new StockValue('Apple', 88), new StockValue('Google', 33.24), new StockValue('KLM', 12.23)];
  public savedData?: DataStorage;

  @Mutation
  public saveDataMutation(payload: DataStorage) {
    this.savedData = payload;
  }

  @Action({ commit: 'saveDataMutation' })
  public saveData() {
    const clonedMyStocks: StockRecord[] = [];
    this.myStocks.forEach(val => clonedMyStocks.push(Object.assign({}, val)));

    const clonedStockValues: StockValue[] = [];
    this.stockValues.forEach(val => clonedStockValues.push(Object.assign({}, val)));

    return {
      myStocks: clonedMyStocks,
      stockValues: clonedStockValues,
    };
  }

  @Mutation
  public loadDataMutation() {
    if (this.savedData) {
      this.myStocks = this.savedData.myStocks;
      this.stockValues = this.savedData.stockValues;
    }
  }

  @Action({ commit: 'loadDataMutation' })
  public loadData() {
    //
  }

  @Mutation
  public updateStockPriceMutation() {
    this.stockValues.map((stockValue: StockValue) => {
      stockValue.price = generateStockPrice();
    });
  }

  @Action({ commit: 'updateStockPriceMutation' })
  public updateStockPrice() {
    // nothing
  }

  @Mutation
  public buyStockMutation() {
    // nothing left
  }

  @Action({ commit: 'buyStockMutation' })
  public buyStock(payload: BuyStockPayload) {
    const stockPrice = this.stockValues.find((stockValue: StockValue) => {
      return stockValue.title === payload.stockRecord.title;
    });
    if (!stockPrice) {
      throw new Error('Stock price not found');
    }

    // Add stock to
    let updatedStock = false;
    this.myStocks.map((stockRecord: StockRecord) => {
      if (stockRecord && stockRecord.title === payload.stockRecord.title) {
        // stock already bought, update quantity
        stockRecord.quantity = stockRecord.quantity ? stockRecord.quantity + payload.quantity : payload.quantity;
        updatedStock = true;
      }
    });
    if (!updatedStock) {
      // stock bought first time
      this.myStocks.push(new StockRecord(payload.stockRecord.title, payload.quantity));
    }

    this.context.rootState.funds.totalFunds -= stockPrice.price * payload.quantity;
  }

  @Mutation
  public sellStockMutation(myNewStocks: StockRecord[]) {
    this.myStocks = myNewStocks;
  }

  @Action({ commit: 'sellStockMutation' })
  public sellStock(payload: BuyStockPayload) {
    const stockPrice = this.stockValues.find((stockValue: StockValue) => {
      return stockValue.title === payload.stockRecord.title;
    });
    if (!stockPrice) {
      throw new Error('Stock price not found');
    }

    const updatedStock = this.myStocks.find((stockRecord: StockRecord) => {
      return stockRecord.title === payload.stockRecord.title;
    })!;

    const myNewStocks = this.myStocks.filter(stockValue => stockValue.title !== payload.stockRecord.title);

    updatedStock.quantity! -= payload.quantity;

    // if quantity left assume we still have stock for this company
    if (updatedStock.quantity! > 0) {
      myNewStocks.push(updatedStock);
    }

    this.context.rootState.funds.totalFunds += stockPrice.price * payload.quantity;

    return myNewStocks;
  }
}
