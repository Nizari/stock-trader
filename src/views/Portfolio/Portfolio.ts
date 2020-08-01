import { Component, Vue } from 'vue-property-decorator';
import StockCard from '@/components/StockCard/StockCard.vue';
import { State } from 'vuex-class';
import StockRecord from '@/models/StockRecord';

@Component<Portfolio>({
  components: {
    'app-stock-card': StockCard,
  },
})
export default class Portfolio extends Vue {
  @State(state => state.stocks.myStocks)
  private myStocks!: StockRecord[];
}
