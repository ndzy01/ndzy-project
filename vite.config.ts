import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/ndzy-project/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 获取模块名
            const modules = id.split('node_modules/')[1].split('/')[0].toString();
            // 返回 chunk 名称
            return `vendor_${modules}`;
          }
        },
      },
    },
  },
});
