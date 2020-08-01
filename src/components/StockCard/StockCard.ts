import { Component, Vue, Prop } from 'vue-property-decorator';
import StockRecord from '@/models/StockRecord';
import { Action, State } from 'vuex-class';
import { currency } from '@/support/String';
import StockValue from '@/models/StockValue';

@Component<StockCard>({
  components: {},
})
export default class StockCard extends Vue {
  @State(state => state.stocks.stockValues) private stockValues!: StockValue[];
  @Action private buyStock!: (card: StockRecord) => void;
  @Action private sellStock!: (card: StockRecord) => void;

  @Prop({ required: true }) protected stockRecord!: StockRecord;
  @Prop({ required: true }) protected boughtStock!: boolean;

  private quantity = 1;
  private rules = {
    leastOne: (value: number) => value > 0 || 'At least 1',
  };

  private get stockRecordInfo() {
    const stockPrice = this.stockValues.find((stockValue: StockValue) => {
        return stockValue.title === this.stockRecord.title;
    });
    if (!stockPrice) {
      throw new Error('Stock price not found');
    }

    return this.stockRecord.quantity
      ? `(Price: ${currency(stockPrice.price, 'EUR')} | Quantity: ${this.stockRecord.quantity})`
      : `Price: ${currency(stockPrice.price, 'EUR')}`;
  }
}
