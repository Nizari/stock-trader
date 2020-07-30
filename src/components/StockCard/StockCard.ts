import { Component, Vue, Prop } from 'vue-property-decorator';
import StockRecord from '@/models/StockRecord';

@Component<StockCard>({
  components: {},
})
export default class StockCard extends Vue {
  @Prop({ required: true }) protected card!: StockRecord;
  @Prop({ required: true }) protected boughtStock!: boolean;

  private rules = {
    leastOne: (value: number) => value > 0 || 'At least 1',
  };
}
