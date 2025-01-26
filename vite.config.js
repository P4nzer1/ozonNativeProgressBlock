import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ozonNativeProgressBlock/',
  root: 'src',
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
  },
});
