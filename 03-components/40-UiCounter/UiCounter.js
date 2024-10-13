import { defineComponent, computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    }
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const increase = () => {
      emit('update:count', props.count + 1)
    }

    const decrease = () => {
      emit('update:count', props.count - 1)
    }

    const disabledButton = computed(() => {
      return {
        increment: props.count >= props.max,
        decrement: props.count <= props.min
      }
    })

    return {
      increase,
      decrease,
      disabledButton
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="decrease" :disabled="disabledButton.decrement">➖</UiButton>
      <span class="count" data-testid="count"> {{ count }}</span>
      <UiButton aria-label="Increment" @click="increase" :disabled="disabledButton.increment">➕</UiButton>
    </div>
  `,
})
