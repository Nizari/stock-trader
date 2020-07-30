<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- @STEFANO WAAR DIT SOORT ALGEMENE DINGEN GEDAAN? -->
        <router-link to="/" tag="h2" exact>Stock Trader</router-link>
      </div>

      <v-btn text :to="{name: 'portfolio'}">Portfolio</v-btn>
      <v-btn text :to="{name: 'stocks'}">Stocks</v-btn>

      <v-spacer></v-spacer>

      <v-btn text @click="endDay">End Day</v-btn>

      <v-menu bottom left>
        <!-- @STEFANO hoe maak je dit gelijk aan elkaar normaal? -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn min-width="120" icon v-bind="attrs" v-on="on">Save &amp; Load</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" @click="funcionCall(item.handler)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title>Funds: $8.126</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component<Navigation>({
  components: {},
})
export default class Navigation extends Vue {
  protected items = [
    { title: 'Save Data', icon: 'mdi-zip-disk', handler: 'saveData' },
    { title: 'Load Data', icon: 'mdi-download-circle-outline', handler: 'loadData' },
  ];

  private endDay() {
    console.log('End of day!');
  }

  private saveData() {
    console.log('Save data!');
  }

  private loadData() {
    console.log('Load Data!');
  }

  private funcionCall(name: string) {
    switch (name) {
      case 'saveData':
        this.saveData();
        break;
      case 'loadData':
        this.loadData();
        break;
      default:
        throw new Error(`Method ${name} doesn't exists.`);
        break;
    }
  }
}
</script>

<style scoped>
</style>
