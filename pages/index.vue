<template>
  <div>
    <v-row class="mt-2">
      <v-col>
        <div class="title-content">Dashboard</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <filter-dashboard :value.sync="filter.date" />
      </v-col>
      <v-col cols="12">
        <market-insight-card :filter-date="filter.date" />
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
  data() {
    return {
      filter: {
        date: '',
      },
    }
  },
}
</script>
<style>
.title-content {
  font-size: 40px;
  color: #707070c4;
}
</style>
