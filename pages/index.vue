<template>
  <div>
    <v-row class="mt-2">
      <v-col>
        <div class="title-content">Dashboard</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <filter-dashboard />
      </v-col>
      <v-col cols="12">
        <market-insight-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FilterDashboard from '~/components/FilterDashboard.vue'
import MarketInsightCard from '~/components/MarketInsightCard.vue'
export default {
  name: 'IndexPage',
  components: {
    FilterDashboard,
    MarketInsightCard,
  },
}
</script>
<style>
.title-content {
  font-size: 40px;
  color: #707070c4;
}
</style>
