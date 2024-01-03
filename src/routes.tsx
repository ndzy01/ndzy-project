import { Home } from './pages/home';

export const routes = {
  routes: [
    {
      path: '/',
      name: '首页',
      component: <Home />,
    },
    {
      path: '/todo',
      name: '笔记',
      component: <div>笔记</div>,
      routes: [
        {
          path: '/todo/list',
          name: '笔记列表',
          routes: [
            {
              path: '/todo/list/test',
              name: 'test',
              component: <div>test</div>,
            },
          ],
          component: <div>笔记列表</div>,
        },
        {
          path: '/todo/edit',
          name: '编辑笔记',
          component: <div>编辑笔记</div>,
        },
        {
          path: '/todo/view',
          name: '预览笔记',
          component: <div>预览笔记</div>,
        },
      ],
    },
  ],
};
