import { Component, Vue, Prop } from 'vue-property-decorator';
import StockRecord from '@/models/StockRecord';
import { Action } from 'vuex-class';

@Component<StockCard>({
  components: {},
})
export default class StockCard extends Vue {
  @Action private buyStock!: (card: StockRecord) => void;
  @Action private sellStock!: (card: StockRecord) => void;

  @Prop({ required: true }) protected stockRecord!: StockRecord;
  @Prop({ required: true }) protected boughtStock!: boolean;

  private quantity = 1;
  private rules = {
    leastOne: (value: number) => value > 0 || 'At least 1',
  };
}
