import { defineComponent } from "vue";

export default defineComponent({
    name: "WeatherDetail",

    props: {
        detail: {
            type: Object,
            required: true
        }
    },

    template: `
        <div class="weather-details__item">
            <div class="weather-details__item-label"> {{ detail.caption }} </div>
            <div class="weather-details__item-value"> {{ detail.value }} </div>
        </div>
    `,
})