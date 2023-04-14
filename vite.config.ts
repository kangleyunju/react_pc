import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path"

export default defineConfig({
	base: '/react_pc/',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	//配置代理
	server: {
		host: '0.0.0.0',
		port: 8400,
		open: false,
		https: false,
		proxy: {
			'/api': {
				target: 'https://blog.csdn.net',
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
})