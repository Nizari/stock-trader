import { Component, Vue } from 'vue-property-decorator';
import StockCard from '@/components/StockCard/StockCard.vue';
import StockRecord from '@/models/StockRecord';
import { Getter } from 'vuex-class';

@Component<Stocks>({
  components: {
    'app-stock-card': StockCard,
  },
})
export default class Stocks extends Vue {
  @Getter private allStocks!: StockRecord[];
}
