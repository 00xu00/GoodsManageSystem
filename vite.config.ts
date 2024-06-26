import { defineConfig } from 'vite';
import { join } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 在resolve.alias 对象下，配置@的指向路径
    resolve: {
        alias: {
            '@': join(__dirname, './src/')
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {}
            }
        }
    },
    // 代理跨域
    server: {
        proxy: {
            ['/api']: {
                target: 'http://8.138.13.158:9088',
                changeOrigin: true
                // rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
});
