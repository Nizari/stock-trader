import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
import StockRecord from '@/models/StockRecord';


@Module
export default class Stocks extends VuexModule {
  public availableStocks = [new StockRecord('BMW', 101), new StockRecord('Apple', 88), new StockRecord('Google', 33.54), new StockRecord('KLM', 5.25)];

  get allStocks() {
    return this.availableStocks;
  }

  @Mutation
  public updateStockPriceMutation() {
    console.log('updateStockPriceMutation', this.availableStocks);
  }

  @Action({ commit: 'updateStockPriceMutation' })
  public updateStockPrice() {
    console.log('updateStockPrice action');
  }

  @Mutation
  public buyStockMutation() {
    console.log('buyStockMutation', this.availableStocks);
  }

  @Action({ commit: 'buyStockMutation' })
  public buyStock() {
    console.log('buyStock action');
  }

  @Mutation
  public sellStockMutation() {
    console.log('sellStockMutation', this.availableStocks);
  }

  @Action({ commit: 'sellStockMutation' })
  public sellStock() {
    console.log('sellStock action');
  }
}
