import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    enviroment: 'jsdom', //for locastorage
    globals: true,
    setupFiles: './src/test/setup.ts', //File for setting
  },
});