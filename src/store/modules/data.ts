import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Data extends VuexModule {
  public savedData = {};

  @Mutation
  public saveDataMutation() {
    console.log('saveDataMutation', this.savedData);
  }

  @Action({ commit: 'saveDataMutation' })
  public saveData() {
    console.log('saveData action');
  }

  @Mutation
  public loadDataMutation() {
    console.log('loadDataMutation', this.savedData);
  }

  @Action({ commit: 'loadDataMutation' })
  public loadData() {
    console.log('loadData action');
  }
}
