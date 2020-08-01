import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Funds extends VuexModule {
  public totalFunds = 10000;

  get totalFundsLabel() {
    return this.totalFunds;
  }

  @Mutation
  public decrementFundsMutation(value: number) {
    console.log('MUTATION decrement', this.totalFunds, value);
    this.totalFunds -= value;
  }

  @Action({ commit: 'decrementFundsMutation' })
  public decrementFunds(value: number) {
    console.log('decrementFunds action', value);
    return value;
  }
}
