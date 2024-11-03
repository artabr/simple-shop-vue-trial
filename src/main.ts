import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import { PiniaColada } from '@pinia/colada'

const head = createHead()
const app = createApp(App)
app.use(createPinia())

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(PiniaColada)
app.use(router)
app.use(head)

app.mount('#app')
