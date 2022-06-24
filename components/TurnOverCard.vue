<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col class="flex-grow-1 flex-shrink-0">
            <div class="d-flex align-center justify-space-between">
              <div class="card-title">Sales Turnover</div>
            </div>
            <v-row class="mt-1">
              <v-col class="flex-grow-1 flex-shrink-0">
                <div class="nominal">Rp {{ nominal }}</div>
                <div class="mt-1">
                  <v-icon size="10" color="error">mdi-arrow-down-thick</v-icon>
                  <div class="d-inline-block text-10">
                    <span class="error--text">13.8%</span> last period in
                    products sold
                  </div>
                </div>
              </v-col>
              <v-col class="flex-grow-0 flex-shrink-1 d-flex align-center">
                <div>
                  <v-img
                    src="/turnover-icon.svg"
                    width="49"
                    height="43"
                    contain
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="flex-grow-0 flex-shrink-1">
            <v-btn small icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    nominal: {
      type: String,
      default: '0',
    },
  },
}
</script>

<style scoped>
.card-title {
  color: #43425d;
  opacity: 0.5;
  size: 15px;
}

.nominal {
  color: #4d4f5c;
  font-weight: bold;
  font-size: 25px;
}

.text-10 {
  font-size: 10px;
}
</style>
