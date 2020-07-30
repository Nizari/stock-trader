<template>
  <v-col :key="card.title">
    <v-card>
      <v-card-title :class="boughtStock ? 'stock__bought' : 'stock__forsale'">{{ card.title }}</v-card-title>
      <v-card-subtitle :class="boughtStock ? 'stock__bought' : 'stock__forsale'">Price: {{ card.price | currency('EUR') }}</v-card-subtitle>

      <v-card-actions>
        <v-text-field
          :rules="[rules.leastOne]"
          type="number"
          label="Quantity"
          min="0"
          max="100"
          step="1"
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn color="error" v-if="boughtStock">Sell</v-btn>
        <v-btn color="primary" v-else>Buy </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" src="@/components/StockCard/StockCard.ts"></script>

<style lang="scss" scoped>
.stock__bought {
  background-color: #90caf9;
  color: #0d47a1 !important;
}
.stock__forsale {
  background-color: #c8e6c9;
  color: #689f38 !important;
}
</style>
