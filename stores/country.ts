import { useAPI } from '~/composables'
const eventsEndpoint = useAPI('events')
export const useCountry = defineStore({
  id: 'country',
  state: () => ({
    countries: [],
    loading: false
  }),
  getters: {},
  actions: {
    async fetch () {
      this.loading = true
      try {
        const { data } = await eventsEndpoint.get('https://restcountries.com/v3.1/all')
        this.countries = data
      } catch (error) {

      }
    }
  }
})
