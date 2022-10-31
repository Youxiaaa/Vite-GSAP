import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'

import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const app = createApp(App)
app.provide('$gsap', gsap)

app
.mount('#app')
