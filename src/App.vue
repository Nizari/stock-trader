<template>
  <v-app>
    <app-navigation />

    <v-main>
      <!-- <transition name="slide" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition>       -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
// @BRYSE @STEFANO DIT IS GRUWELIJK!
import 'reflect-metadata'
import Vue from 'vue';
import appNavigation from '@/components/Navigation.vue';
export default Vue.extend({
  name: 'App',
  components: {
    appNavigation,
  },
});
</script>
