import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '@/',
    replacement: `${resolve(__dirname, './docs')}/`,
  },
  {
    find: '~@/',
    replacement: `${resolve(__dirname, './src')}/`,
  },
]
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    UnoCSS(),

    // https://github.com/vuejs/vitepress/issues/2505
    {
      name: 'increase-width',
      transform(code, id) {
        if (/\.css($|\?)/.test(id)) {
          return code.replace(/1440px/g, '1920px')
        }
      },
    },
  ],
})
