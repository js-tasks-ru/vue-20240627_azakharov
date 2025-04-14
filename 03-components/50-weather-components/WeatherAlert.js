import { defineComponent } from "vue";

export default defineComponent({
    name: "WeatherAlert",

    props: {
        city: {
            type: Object,
            required: true
        }
    },

    template: `
        <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ city.alert.sender_name }} : {{ city.alert.description }}</span>
        </div>
    `
})