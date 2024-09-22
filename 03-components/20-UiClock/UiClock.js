import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date())
    const local = navigator.language

    let timeoutId = null

    const update = () => {
      time.value = new Date()
      timeoutId = setTimeout(update, 1000)
    }

    onMounted(update)

    onUnmounted(() => {
      !!timeoutId && clearTimeout(timeoutId)
    })

    return {
      time,
      local
    }
  },

  template: `<div class="clock"> {{ Intl.DateTimeFormat(local, { timeStyle: 'medium' }).format(time) }}</div>`,
})
