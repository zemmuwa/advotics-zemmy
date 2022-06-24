<template>
  <div>
    <v-dialog v-model="dialogController" :max-width="600">
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
                <v-icon @click="closeDialog()">mdi-close</v-icon>
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
                      :value="filterItem"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="filterItem" />
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`line-${IfilterItem}`" />
                  </template>
                </v-list-item-group>
              </v-list>
              <v-btn color="primary" block @click="apply()">Apply</v-btn>
            </v-col>
            <v-col cols="8">
              <v-date-picker
                v-model="dates"
                color="primary"
                no-title
                range
                scrollable
                :max="maxDate"
                full-width
                :readonly="selectedItem != 'Custom'"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="error" :timeout="timeout" color="error" text right top>
      <div class="font-weight-bold">Maximum time range is 6 months !</div>

      <template #action="{ attrs }">
        <v-btn
          small
          color="error"
          text
          v-bind="attrs"
          icon
          @click="error = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import moment from 'moment'
import dateMixins from '~/mixins/dateMixins'
export default {
  mixins: [dateMixins],
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: String,
      default: '',
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
        'This Month',
        'Custom',
      ],
      error: false,
      timeout: 3000,
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
    selectedController: {
      get() {
        return this.selected
      },
      set(value) {
        this.$emit('update:selected', value)
      },
    },
    // minDate() {
    //   return moment().subtract(6, 'months').format('YYYY-MM-DD')
    // },
    maxDate() {
      return moment().subtract(1, 'days').format('YYYY-MM-DD')
    },
  },
  watch: {
    selectedItem(val) {
      switch (val) {
        case 'Yesterday':
          this.dates = [moment().subtract(1, 'days').format('YYYY-MM-DD')]
          break
        case 'Last 7 days':
          this.dates = [
            moment().subtract(7, 'days').format('YYYY-MM-DD'),
            moment().subtract(1, 'days').format('YYYY-MM-DD'),
          ]
          break
        case 'Last 30 days':
          this.dates = [
            moment().subtract(30, 'days').format('YYYY-MM-DD'),
            moment().subtract(1, 'days').format('YYYY-MM-DD'),
          ]
          break
        case 'This Month':
          this.dates = this.getThisMonthToThisDate()
          break
        case 'Custom':
          this.dates = []
          break

        default:
          break
      }
    },
    selected(val) {
      if (val.includes('Custom')) {
        const arrCustom = val.split('/')
        if (arrCustom.length === 2) {
          this.dates = [arrCustom[1]]
        } else if (arrCustom.length === 3) {
          this.dates = [arrCustom[1], arrCustom[2]]
        }
        this.selectedItem = 'Custom'
      } else {
        this.selectedItem = val
      }
    },
  },
  methods: {
    apply() {
      if (this.validate()) {
        if (this.selectedItem === 'Custom') {
          this.selectedController = `${this.selectedItem}/${this.dates.join(
            '/'
          )}`
        } else {
          this.selectedController = this.selectedItem
        }
        this.closeDialog()
      } else {
        this.error = true
      }
    },
    closeDialog() {
      this.dialogController = false
    },
    validate() {
      if (this.dates.length > 1) {
        const firstDate = moment(this.dates[0])
        const LastDate = moment(this.dates[1])
        const diff = firstDate.diff(LastDate, 'days')
        if (Math.abs(diff) > 180) {
          return false
        }
      }
      return true
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
