<template>
  <div>
    <v-dialog v-model="dialogController" persistent :max-width="600">
      <v-card>
        <v-card-text>
          <v-row class="mt-2">
            <v-col class="d-flex align-center">
              <div class="d-flex">
                <v-img
                  class="flex-grow-0 flex-shrink-1"
                  src="/calendar-icon.png"
                  width="20"
                  height="20"
                  contain
                />
                <div class="flex-grow-1 flex-shrink-0 title-dialog ml-1">
                  Period
                </div>
              </div>
            </v-col>
            <v-col class="text-right">
              <v-btn small icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-list>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <template v-for="(filterItem, IfilterItem) in filterItems">
                    <v-list-item
                      :key="`list-${IfilterItem}`"
                      :disabled="filterItem == 'Today'"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="filterItem" />
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`line-${IfilterItem}`" />
                  </template>
                </v-list-item-group>
              </v-list>
              <v-btn block color="primary">Apply</v-btn>
            </v-col>
            <v-col cols="8">
              <v-date-picker
                v-model="dates"
                color="primary"
                no-title
                range
                scrollable
                full-width
                :readonly="selectedItem != '5'"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dates: [],
      selectedItem: '',
      filterItems: [
        'Today',
        'Yesterday',
        'Last 7 days',
        'Last 30 days',
        'This month',
        'Custom',
      ],
    }
  },
  computed: {
    dialogController: {
      get() {
        return this.dialog
      },
      set(newValue) {
        this.$emit('update:dialog', newValue)
      },
    },
    minDate() {
      if (this.dates.length === 0) {
        return moment().subtract(29, 'days').format('YYYY-MM-DD')
      } else {
        return moment(this.dates[0]).subtract(29, 'days').format('YYYY-MM-DD')
      }
    },
    maxDate() {
      if (this.dates.length === 0) {
        return moment().add(29, 'days').format('YYYY-MM-DD')
      } else {
        return moment(this.dates[0]).add(29, 'days').format('YYYY-MM-DD')
      }
    },
  },
  watch: {
    selectedItem(val) {
      switch (val) {
        case 1:
          this.dates = []
          break

        default:
          break
      }
    },
  },
  methods: {
    generateFilterDate(onlyStart) {
      let start = moment()
      let end = moment()
      this.prependInfo = 'Today'
      switch (this.filterDate) {
        case 'yesterday':
          start = moment().subtract(1, 'days')
          end = moment().subtract(1, 'days')
          this.prependInfo = 'Yesterday'
          break
        case 'last-7-days':
          start = moment().subtract(6, 'days')
          break
        case 'last-14-days':
          start = moment().subtract(13, 'days')
          break
        case 'last-28-days':
          start = moment().subtract(27, 'days')
          break
        case 'last-30-days':
          start = moment().subtract(29, 'days')
          break
        case 'last-365-days':
          start = moment().subtract(365, 'days')
          break
        case 'custom':
          if (moment(this.dates[0]) > moment(this.dates[1])) {
            this.switchDate()
          }
          start = moment(this.dates[0])
          end = moment(this.dates[1])
          if (this.dates.length === 0) {
            start = moment(this.datesDetail[0])
            end = moment(this.datesDetail[1])
          }
          break
      }
      if (this.filterDate !== 'yesterday' && this.filterDate !== 'today') {
        this.prependInfo =
          start.format('MMM DD, YYYY') + ' - ' + end.format('MMM DD, YYYY')
      }
      start = start.format('YYYY-MM-DD')
      end = end.format('YYYY-MM-DD')
      if (this.datesDetail.length === 0) {
        this.datesDetail.push(start)
        this.datesDetail.push(end)
      } else {
        this.datesDetail[0] = start
        this.datesDetail[1] = end
      }
      if (onlyStart) {
        return `date=${start}`
      } else {
        start += ' 00:00:00'
        end += ' 00:00:00'
        return `start_date=${start}&end_date=${end}`
      }
    },
  },
}
</script>

<style>
.title-dialog {
  font-size: 20px;
  color: #707070c4;
  font-weight: 600;
}
</style>
