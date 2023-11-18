import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/flyo2",
})
git commit -m "first deploy"
git remote add origin https://github.com/ferrychris/flyo2.git
git push -u origin master