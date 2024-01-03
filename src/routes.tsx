import { Home } from './pages/home';
import { TagList } from './pages/tag';
import { TodoList } from './pages/todo';
import { EditTodo } from './pages/todo/editTodo';
import { ViewTodo } from './pages/todo/viewTodo';

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
          component: <TodoList />,
        },
        {
          path: '/todo/edit',
          name: '编辑笔记',
          component: <EditTodo />,
          menu: false,
        },
        {
          path: '/todo/view',
          name: '预览笔记',
          component: <ViewTodo />,
          menu: false,
        },
      ],
    },
    {
      path: '/tag',
      name: '标签',
      component: <div>标签</div>,
      routes: [
        {
          path: '/tag/list',
          name: '标签列表',
          component: <TagList />,
        },
      ],
    },
    {
      path: '/t',
      name: '测试',
      component: <div>测试</div>,
      routes: [
        {
          path: '/t/t1',
          name: '测试',
          component: <div>t1</div>,
          routes: [
            {
              path: '/t/t1/t11',
              name: 't11',
              component: <div>t11</div>,
            },
          ],
        },
      ],
    },
  ],
};
