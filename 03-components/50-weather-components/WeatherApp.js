import { defineComponent } from 'vue'
<<<<<<< HEAD
import { getWeatherData } from './weather.service.ts'
=======
>>>>>>> ef8cc8363f078ea8ee1f6f8d9cb3f14241d8b75f
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
