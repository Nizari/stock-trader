<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col class="d-flex justify-center" >
        <v-img src="@/assets/logo.png" max-width="300px" contain></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      url: process.env.VUE_APP_URL,
    };
  },
  components: {
  },
};
</script>
