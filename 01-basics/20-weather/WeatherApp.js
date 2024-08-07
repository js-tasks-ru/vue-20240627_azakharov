import { defineComponent } from 'vue/dist/vue.esm-bundler.js'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherData = getWeatherData()

    const icons = WeatherConditionIcons

    const cardBackground = data => {
      const currentTime = parseTime(data.dt)
      const sunriseTime = parseTime(data.sunrise)
      const sunsetTime = parseTime(data.sunset)
      if (currentTime < sunriseTime || currentTime > sunsetTime) {
        return 'weather-card--night'
      } else {
        return ''
      }
    }

    const parseTime = timeStr => {
      const times = timeStr.match(/\d{2}/g)
      if (!times || times.length !== 2) {
        return null
      }

      const hours = Number.parseInt(times[0])
      const minutes = Number.parseInt(times[1])
      return hours * 60 + minutes
    }

    return {
      weatherData,
      icons,
      cardBackground,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="city in weatherData" class="weather-card" :class="cardBackground(city.current)">
          <div v-if="!!city.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{city.alert.sender_name}} : {{city.alert.description}}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{city.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{city.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="city.current.weather.description">{{icons[city.current.weather.id]}}</div>
            <div class="weather-conditions__temp">{{(city.current.temp - 273.15).toFixed(1)}} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{(city.current.pressure*0.75).toFixed(0)}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{city.current.humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{city.current.clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{city.current.wind_speed}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
