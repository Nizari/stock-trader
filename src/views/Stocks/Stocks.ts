import { Component, Vue } from 'vue-property-decorator';
import StockCard from '@/components/StockCard/StockCard.vue';
import { State } from 'vuex-class';
import StockRecord from '@/models/StockRecord';

@Component<Stocks>({
  components: {
    'app-stock-card': StockCard,
  },
})
export default class Stocks extends Vue {
  @State(state => state.stocks.availableStocks)
  private allStocks!: StockRecord[];
}
