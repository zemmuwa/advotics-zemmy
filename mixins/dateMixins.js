import moment from 'moment'
export default {
  methods: {
    getThisMonthToThisDate(isText = false) {
      const firstDate = moment().startOf('month').format('YYYY-MM-DD')
      const today = moment().format('YYYY-MM-DD')
      const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
      if (firstDate === today) {
        return isText ? '' : []
      } else if (firstDate === yesterday) {
        return isText
          ? moment().startOf('month').format('DD MMMM YYYY')
          : [firstDate]
      } else {
        return isText
          ? `${moment().startOf('month').format('DD MMMM YYYY')} - ${moment()
              .subtract(1, 'days')
              .format('DD MMMM YYYY')}`
          : [
              moment().startOf('month').format('YYYY-MM-DD'),
              moment().subtract(1, 'days').format('YYYY-MM-DD'),
            ]
      }
    },
  },
}
