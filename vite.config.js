import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/carbon_crunch_task/",
  plugins: [react() ,tailwindcss()],
  
})
