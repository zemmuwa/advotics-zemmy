<template>
  <div>
    <v-card max-width="481" width="481">
      <v-card-text>
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex">
            <v-img
              src="/calendar-icon.png"
              max-height="22"
              max-width="22"
              contain
            />
            <div class="filter-text ml-2">Period</div>
          </div>
          <div class="filter-text">{{ dateText }}</div>
          <v-btn icon small color="#747373" @click="openDialog()">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <date-modal :dialog.sync="dialog" :selected.sync="valueController" />
  </div>
</template>

<script>
import moment from 'moment'
import DateModal from '~/components/DateModal.vue'
import dateMixins from '~/mixins/dateMixins'
export default {
  components: { DateModal },
  mixins: [dateMixins],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      startDate: '11 September 2018',
      endDate: '14 September 2018',
      dialog: false,
    }
  },
  computed: {
    valueController: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      },
    },
    dateText() {
      let date = 'Filter Date'
      const format = 'DD MMMM YYYY'
      switch (this.value) {
        case 'Yesterday':
          date = moment().subtract(1, 'days').format(format)
          break
        case 'Last 7 days':
          date = `${moment().subtract(7, 'days').format(format)} - ${moment()
            .subtract(1, 'days')
            .format(format)}`
          break
        case 'Last 30 days':
          date = `${moment().subtract(30, 'days').format(format)} - ${moment()
            .subtract(1, 'days')
            .format(format)}`
          break
        case 'This Month':
          date = this.getThisMonthToThisDate(true)
          break
      }
      if (this.value.includes('Custom')) {
        const arrCustom = this.value.split('/')
        if (arrCustom.length === 2) {
          date = moment(arrCustom[1]).format(format)
        } else if (arrCustom.length === 3) {
          date = `${moment(arrCustom[1]).format(format)} - ${moment(
            arrCustom[2]
          ).format(format)}`
        }
      }
      return date
    },
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
