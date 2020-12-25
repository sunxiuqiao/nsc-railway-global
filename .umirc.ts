import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  base: '/demo/',
  outputPath: 'build',
  links: [
    {
      rel: 'stylesheet',
      href: './Cesium/Widgets/widgets.css',
    },
  ],
  headScripts: [
    {
      type: 'text/javascript',
      src: './Cesium/Cesium.js',
    },
  ],
  title: 'nsc-earth-umi',
  proxy: {
    '/api': {
      target: 'http://47.107.187.159',
      changeOrigin: true,
    },
  },
});
