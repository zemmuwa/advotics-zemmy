<template>
  <div>
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
          <v-btn icon small color="#747373" @click="openDialog()">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <date-modal :dialog.sync="dialog" />
  </div>
</template>

<script>
import DateModal from '~/components/DateModal.vue'
export default {
  components: { DateModal },
  data() {
    return {
      startDate: '11 September 2018',
      endDate: '14 September 2018',
      dialog: false,
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
  },
}
</script>

<style>
.filter-text {
  font-size: 16px;
  color: #8b8b8b;
}
</style>
