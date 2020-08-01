<template>
  <v-container fluid>
    <v-row>
       <app-stock-card
        v-for="stockRecord in allStocks"
        :key="stockRecord.title"
        :stockRecord=stockRecord
        :boughtStock=false></app-stock-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Stocks.ts"></script>
