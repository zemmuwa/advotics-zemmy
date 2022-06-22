<template>
  <v-card max-width="481" width="481">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <v-img
          src="/calendar-icon.png"
          max-height="22"
          max-width="22"
          contain
        ></v-img>
        <div class="filter-text">Period</div>
        <div class="filter-text">{{ startDate }} - {{ endDate }}</div>
        <v-btn small icon color="#747373">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      startDate: '11 September 2018',
      endDate: '14 September 2018',
    }
  },
}
</script>

<style>
.filter-text {
  font-size: 16px;
  color: #8b8b8b;
}
</style>
