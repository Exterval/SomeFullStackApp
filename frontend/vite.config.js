import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server:{
  proxy:{
  '/SomeFullStackApp/app': {
    target: process.env.VITE_API_URL || 'http://localhost:5000'
  }}},
  plugins: [react(), tailwindcss()],
  base: '/SomeFullStackApp/'
})
