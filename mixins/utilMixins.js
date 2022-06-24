export default {
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    moneyFormat(number) {
      const dollarUSLocale = Intl.NumberFormat('en-US')
      return dollarUSLocale.format(number)
    },
  },
}
