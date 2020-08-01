<template>
  <v-col cols=6 md=3 :key="stockRecord.title" >
    <v-card>
      <v-card-title
        :class="boughtStock ? 'stock__bought' : 'stock__forsale'"
      >{{ stockRecord.title }}</v-card-title>
      <v-card-subtitle
        :class="boughtStock ? 'stock__bought' : 'stock__forsale'"
      >
      {{ stockRecordInfo }}
      </v-card-subtitle>

      <v-card-actions>
        <v-text-field
          v-model="quantity"
          :rules="[rules.leastOne]"
          type="number"
          label="Quantity"
          min="0"
          :max="stockRecord.quantity ? stockRecord.quantity : 100"
          step="1"
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn
          v-if="boughtStock"
          color="error"
          @click="sellStock({
          stockRecord: stockRecord,
          quantity: quantity
          })"
        >Sell</v-btn>

        <v-btn
          v-else
          color="primary"
          @click="buyStock({
          stockRecord: stockRecord,
          quantity: quantity
          })"
        >Buy</v-btn>
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
