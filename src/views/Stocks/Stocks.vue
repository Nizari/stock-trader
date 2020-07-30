<template>
  <v-container fluid>
    <v-row>
       <app-stock-card
        v-for="card in cards"
        :key="card.title"
        :card=card
        :boughtStock=true></app-stock-card>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Stocks.ts"></script>
