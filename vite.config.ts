import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mlc: resolve(__dirname, 'mlc.html'),
        dac: resolve(__dirname, 'dac.html'),
        event: resolve(__dirname, 'event.html'),
        shorten: resolve(__dirname, 'shorten.html'),
      },
    },
  },
});
