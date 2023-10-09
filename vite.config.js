import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite'
import path from 'path'

const dirname = path.resolve()

export default defineConfig({
    root: 'sources',
    publicDir: '../public',
    build:{
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve('sources', 'index.html'),
                mission: path.resolve('sources', 'mission.html'),
                benefits: path.resolve('sources', 'benefits.html'),
                about_us: path.resolve('sources', 'about_us.html'),
                contact_us: path.resolve('sources', 'contact_us.html'),
            },
        },
    },
    plugins: [glsl()]
})