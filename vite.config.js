import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      preset: [
        presetUno()
      ]
    })
  ]
})
