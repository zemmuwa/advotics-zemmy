<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row class="align-center">
          <v-col class="flex-grow-1 flex-shrink-0">
            <div class="title-card">{{title}}</div>
          </v-col>
          <v-col class="flex-grow-0 flex-shrink-1">
            <div class="d-flex align-center justify-end">
              <v-btn class="ml-1" tile icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-card rounded flat color="#ffe7bd">
          <v-row no-gutters>
            <v-col class="flex-grow-0 flex-shrink-1">
              <v-img
                class="rounded-left"
                src="https://picsum.photos/300/300"
                height="80"
                width="80"
              />
            </v-col>
            <v-col class="flex-grow-1 flex-shrink-0">
              <div class="d-flex flex-column justify-space-around h-100">
                <div class="product-title text-center">Nama Product</div>
                <div class="d-flex mx-2">
                  <div class="flex-grow-1 detail-product-text">Rp XXX</div>
                  <div class="flex-grow-1 detail-product-text">jml terjual</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <v-card rounded flat outlined class="mt-2">
          <v-row no-gutters>
            <v-col class="flex-grow-0 flex-shrink-1">
              <v-img
                class="rounded-left"
                src="https://picsum.photos/300/300"
                height="60"
                width="60"
              />
            </v-col>
            <v-col class="flex-grow-1 flex-shrink-0">
              <div class="d-flex flex-column h-100 justify-md-space-around">
                <div class="product-title text-center">Nama Product</div>
                <div class="d-flex mx-2">
                  <div class="flex-grow-1 detail-product-text">Rp XXX</div>
                  <div class="flex-grow-1 detail-product-text">jml terjual</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    product: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>

<style>
.title-card {
  color: #4d4f5c;
  font-size: 20px;
}

.rounded-left {
  border-radius: 4px 0 0 4px;
}

.product-title {
  color: #000000de;
  font-size: 20px;
}

.detail-product-text {
  font-size: 14px;
  color: #0009;
}

.h-100 {
  height: 100%;
}
</style>
