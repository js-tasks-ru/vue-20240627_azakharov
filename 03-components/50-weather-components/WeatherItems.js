import { defineComponent } from "vue";
import WeatherItem from "./WeatherItem";

export default defineComponent({
    name: "WeatherItems",

    components: {
        WeatherItem
    },

    props: {
        cities: {
            type: Array,
            default: []
        }
    },

    template: `
        <ul class="weather-list unstyled-list">
            <WeatherItem v-for="city in cities" :city="city" :key="city.geographic_name"/>
        </ul>
    `
})