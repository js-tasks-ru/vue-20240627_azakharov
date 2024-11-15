import { defineComponent } from "vue";
import { WeatherConditionIcons } from "./weather.service";

export default defineComponent({
    name: "WeatherConditions",

    props: {
        city: {
            type: Object,
            required: true
        }
    },

    setup() {
        const icons = WeatherConditionIcons

        return {
            icons
        }
    },

    template: `
        <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="city.current.weather.description">{{ icons[city.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ (city.current.temp - 273.15).toFixed(1) }} °C</div>
          </div>
    `
})