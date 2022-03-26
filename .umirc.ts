import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:8080/',
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    { path: '/', component: '@/pages/index', favicon: 'favicon.ico' },
    { path: '/vj/questionnaire', component: '@/pages/results/questionnaire/index', title: "青训赛赛果收集", favicon: './favicon.ico' },
    { path: '/vj/success', component: '@/pages/results/success/success.tsx', title: "提交成功", favicon: './favicon.ico' },
    { path: '/admin/login', component: '@/pages/admin/Login/Login.tsx', title: "登录", favicon: './favicon.ico' },
    {
      path: '/admin/Statistics',
      component: '@/pages/admin/Detail/Statistics.tsx',
      title: "赛果统计",
      favicon: './favicon.ico',
      wrappers: [
        '/src/pages/wrappers/auth.tsx',
      ],
    },
    { path: '/404', component: '@/pages/NotFound', title: "404", favicon: 'favicon.ico' },

  ],
  fastRefresh: {},
});

