import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import './WeatherApp.css'
import WeatherItems from './WeatherItems.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherItems
  },

  setup() {
    const weatherData = getWeatherData()

    return {
      weatherData
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <WeatherItems :cities="weatherData"/>
    </div>
  `,
})
