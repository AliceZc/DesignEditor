const Routes = [
  {
    path: '/',
    redirect: '/User',
  },
  {
    name: '用户',
    path: '/User',
    component: './User',
  },
  {
    name: 'Formily示例',
    path: '/Formily',
    component: './Formily/_layout.tsx',
    routes: [
      {
        path: '/Formily',
        component: './Formily/index',
      },
      {
        path: '/Formily/demo1',
        component: './Formily/demo1',
      },
      {
        path: '/Formily/demo2',
        component: './Formily/demo2',
      },
      {
        path: '/Formily/demo3',
        component: './Formily/demo3',
      },
      {
        path: '/Formily/demo4',
        component: './Formily/demo4',
      },
      {
        path: '/Formily/demo5',
        component: './Formily/demo5',
      }
    ],
  },
  {
    name: '低代码Demo',
    path: '/designPanel',
    component: './DesignAdvanced'
  },
  {
    name: 'Formily 设计器',
    path: '/formilyDesign',
    component: './FormilyDesign'
  }
];
export default Routes;
