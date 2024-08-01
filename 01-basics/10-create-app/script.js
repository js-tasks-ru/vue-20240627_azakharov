import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup() {
    const date = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date())

    const title = 'Сегодня ' + date

    return {
      title,
    }
  },

  template: `<div>{{ title }}</div>`,
})

createApp(App).mount('#app')
