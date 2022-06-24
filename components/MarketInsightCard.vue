<template>
  <div>
    <v-card color="primary">
      <v-card-text>
        <v-row>
          <v-col>
            <div class="white--text title-card">MARKET INSIGHTS</div>
          </v-col>
          <v-col class="d-flex justify-end">
            <div class="d-flex align-center">
              <v-icon color="white">mdi-lightbulb-on-outline</v-icon>
              <a href="#" class="white--text font-weight-light ml-1 mr-2"
                >Click Here for Help</a
              >
              <v-btn small icon color="white">
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <div>
      <v-row class="mt-2">
        <v-col cols="12" md="3" sm="4">
          <turn-over-card :nominal="data.nominal" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <average-purchase-card />
        </v-col>
        <v-col cols="12" md="3">
          <best-product-card
            title="BEST SELLING SKU"
            :data="data.bestSelling"
          />
        </v-col>
        <v-col cols="12" md="3">
          <best-product-card
            title="TOP COMPETITOR SKU"
            :data="data.topCompetitor"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TurnOverCard from '~/components/TurnOverCard.vue'
import AveragePurchaseCard from '~/components/AveragePurchaseCard.vue'
import BestProductCard from '~/components/BestProductCard.vue'
import utilMixin from '~/mixins/utilMixins'
export default {
  components: {
    TurnOverCard,
    AveragePurchaseCard,
    BestProductCard,
  },
  mixins: [utilMixin],
  props: {
    filterDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      data: {
        bestSelling: [],
        topCompetitor: [],
        nominal: '',
      },
    }
  },
  watch: {
    filterDate() {
      this.data.bestSelling = this.generateData('Selling')
      this.data.topCompetitor = this.generateData('Competitor')
      this.data.nominal = this.moneyFormat(this.getRandom(1000000, 9000000))
    },
  },
  mounted() {
    this.data.bestSelling = this.generateData('Selling')
    this.data.topCompetitor = this.generateData('Competitor')
    this.data.nominal = this.moneyFormat(this.getRandom(1000000, 9000000))
  },
  methods: {
    generateData(product) {
      const arrProduct = []
      for (let index = 0; index < 5; index++) {
        arrProduct.push({
          name: `${product} ${index + 1}`,
          price: this.moneyFormat(this.getRandom(1000, 10000)),
          qty: this.getRandom(1, 10),
          img: `https://dummyimage.com/300x300/${
            product === 'Selling' ? 'e312e3' : '000e8a'
          }/ffffff.png&text=${this.filterDate}`,
        })
      }
      return arrProduct
    },
  },
}
</script>

<style scoped>
.title-card {
  font-size: 20px;
  font-weight: 600;
}
</style>
