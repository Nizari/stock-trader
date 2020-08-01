<template>
  <v-container fluid>
    <v-row>
       <app-stock-card
        v-for="stockRecord in myStocks"
        :key="stockRecord.title"
        :stockRecord=stockRecord
        :boughtStock=true></app-stock-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Portfolio.ts"></script>
