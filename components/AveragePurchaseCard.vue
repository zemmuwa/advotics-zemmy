<template>
  <div>
    <v-card>
      <v-card-text>
        <div class="card-dashboard">
          <v-row class="align-center">
            <v-col>
              <div class="title-card">AVERAGE PURCHASE VALUE</div>
            </v-col>
            <v-col>
              <div class="d-flex align-center justify-end">
                <div class="filter-date">
                  <v-select
                    v-model="model.filter"
                    :items="items"
                    item-text="label"
                    item-value="value"
                    outlined
                    dense
                    hide-details
                    @change="generateData()"
                  ></v-select>
                </div>
                <v-btn class="ml-1" tile icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <apex-chart
            type="line"
            height="350"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import utilMixin from '~/mixins/utilMixins'
export default {
  mixins: [utilMixin],
  data() {
    return {
      model: {
        filter: 6,
      },
      items: [
        { label: 'Last 6 months', value: 6 },
        { label: 'Last 3 months', value: 3 },
      ],
      data: {
        series: {
          nett: [],
          gross: [],
          apv: [],
        },
      },
    }
  },
  computed: {
    series() {
      return [
        {
          name: 'Nett',
          data: this.data.series.nett,
          type: 'column',
          color: '#37b04c',
          max: 100,
        },
        {
          name: 'Gross',
          data: this.data.series.gross,
          type: 'column',
          color: '#289e45',
          max: 0,
        },
        {
          name: 'APV',
          data: this.data.series.apv,
          type: 'line',
          color: '#ffe857',
        },
        {
          name: 'UPT',
          data: [0, 0, 0, 0, 0, 0, 0],
          type: 'column',
          color: '#707070',
          max: 62,
        },
      ]
    },
    colors() {
      return this.series.map((item) => item.color)
    },
    chartOptions() {
      const categories = ['Jan 12', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

      const colors = this.colors
      return {
        chart: {
          stacked: true,
          stackType: 'normal',
          type: 'bar',
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
            tools: {
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              selection: true,
              reset: true,
              download: true,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
        },
        stroke: {
          width: [0, 0, 4, 0],
          colors: ['#ddd', '#ddd', '#ddd', '#ddd'],
        },

        // title: {
        //   text: 'Wykres',
        // },
        // grid: {
        //   borderColor: '#111',
        //   //   strokeDashArray: 7,
        // },
        markers: {
          size: 2,
        },
        xaxis: {
          type: 'category',
          categories,
        },

        fill: {
          opacity: 1,
          colors,
        },
        colors,
        legend: {
          position: 'bottom',
          offsetX: 0,
          offsetY: 0,
          customLegendItems: [
            'Nett',
            'Gross',
            'Average Purchase Value',
            'Unit Per Transaction',
          ],
        },

        xAxisScale: {
          niceMin: 0,
        },

        yaxis: [
          {
            seriesName: 'Nett',
            // show: false,
            min: 0,
            max: 100,
            // title: {
            //   text: 'Columns series',
            // },
          },
          {
            seriesName: 'Gross',
            show: false,
            min: 0,
            max: 100,
          },
          {
            seriesName: 'UPT',
            show: false,
            min: 0,
            max: 100,
          },
          {
            seriesName: 'APV',
            show: false,
            min: 0,
            max: 100,
          },
        ],
        // tooltips: {
        //   y: {
        //     formatter: (seriesName) => seriesName + 'x',
        //     title: {
        //       formatter: (seriesName) => {

        //         // eslint-disable-next-line no-console
        //         console.log(seriesName)
        //         return seriesName
        //       },
        //     },
        //   },
        // },
      }
      // ----------------------------
    },
  },
  mounted() {
    this.generateData()
  },
  methods: {
    generateData() {
      const nett = []
      const gross = []
      const apv = []
      for (let index = 0; index < 7; index++) {
        nett.push(this.getRandom(10, 50))
        gross.push(this.getRandom(1, 10))
        apv.push(this.getRandom(10, 50))
      }
      this.data.series.nett = nett
      this.data.series.gross = gross
      this.data.series.apv = apv
    },
  },
}
</script>

<style scoped>
.title-card {
  color: #4d4f5c;
  font-size: 20px;
}

.filter-date {
  max-width: 140px;
}
</style>
