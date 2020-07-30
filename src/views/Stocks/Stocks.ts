import { Component, Vue } from 'vue-property-decorator';
import StockCard from '@/components/StockCard/StockCard.vue';
import StockRecord from '@/models/StockRecord';

@Component<Stocks>({
  components: {
    'app-stock-card': StockCard,
  },
})
export default class Stocks extends Vue {
  private cards = [
    new StockRecord('BMW', 101),
    new StockRecord('Apple', 88),
    new StockRecord('Google', 33.54),
    new StockRecord('KLM', 5.25),
  ];
}
