import { defineComponent, computed } from "vue";
import WeatherDetail from "./WeatherDetail";

export default defineComponent({
    name: "WeatherDetails",

    props: {
        city: {
            type: Object,
            required: true
        }
    },

    components: {
        WeatherDetail
    },

    setup(props) {
        const details = computed(() => {
            const details = [];
            details.push({caption: 'Давление, мм рт. ст.', value: (props.city.current.pressure*0.75).toFixed(0) });
            details.push({caption: 'Влажность, %', value: props.city.current.humidity });
            details.push({caption: 'Облачность, %', value: props.city.current.clouds });
            details.push({caption: 'Ветер, м/с', value: props.city.current.wind_speed });
            return details;
        })

        return {
            details
        }
    },

    template: `
        <div class="weather-details">
            <WeatherDetail v-for="detail in details" :detail="detail" >
        </div>
    `
})