import { defineComponent } from "vue";
import WeatherAlert from "./WeatherAlert";
import WeatherCard from "./WeatherCard";
import WeatherConditions from "./WeatherConditions";
import WeatherDetails from "./WeatherDetails";

export default defineComponent({
    name: "WeatherItem",

    components: {
        WeatherAlert,
        WeatherCard,
        WeatherConditions,
        WeatherDetails
    },

    props: {
        city: {
            type: Object,
            required: true
        }
    },

    template: `
        <li class="weather-card" :class="{ 'weather-card--night': city.current.dt <  city.current.sunrise || city.current.dt > city.current.sunset }">
          <WeatherAlert v-if="!!city.alert" :city="city"/>
          <WeatherCard :city="city"/>
          <WeatherConditions :city="city"/>
          <WeatherDetails :city="city"/>
        </li>
    `
})