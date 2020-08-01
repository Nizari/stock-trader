import { Module, VuexModule } from 'vuex-module-decorators';

@Module
export default class Funds extends VuexModule {
  public totalFunds = 10000;

  get totalFundsLabel() {
    return this.totalFunds;
  }
}
