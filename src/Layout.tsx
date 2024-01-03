import React from 'react';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import { observer } from 'mobx-react-lite';
import { routes } from './routes';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';

interface IRouter {
  path: string;
  name: string;
  component: any;
  routes?: IRouter[];
}

const loop = (router: IRouter[]) => {
  return router.map((item) => {
    if (item.routes) {
      return (
        <Route key={item.path} path={item.path} element={<Outlet />}>
          {loop(item.routes)}
        </Route>
      );
    }

    return <Route key={item.path} path={item.path} element={item.component} />;
  });
};

export const Layout: React.FC<Record<string, unknown>> = observer(() => {
  const location = useLocation();

  return (
    <ProLayout
      prefixCls="ndzy-prefix"
      bgLayoutImgList={[
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          left: 85,
          bottom: 100,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          bottom: -68,
          right: -45,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
          bottom: 0,
          left: 0,
          width: '331px',
        },
      ]}
      route={{
        path: '/',
        ...routes,
      }}
      location={location}
      menuItemRender={(item: any, defaultDom: any) => {
        return <Link to={item.path}> {defaultDom} </Link>;
      }}
      subMenuItemRender={(_item: any, defaultDom: any) => {
        return defaultDom;
      }}
      appList={[]}
      token={{
        header: {
          colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
        },
      }}
      siderMenuType="group"
      menu={{
        collapsedShowGroupTitle: true,
      }}
      logo="https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png"
      avatarProps={{
        src: 'https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png',
        size: 'small',
        title: 'ndzy',
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    // icon: <LogoutOutlined />,
                    label: '退出登录',
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      // actionsRender={(props) => {
      //   if (props.isMobile) return [];
      //   if (typeof window === 'undefined') return [];
      //   return [
      //     props.layout !== 'side' && document.body.clientWidth > 1400 ? <SearchInput /> : undefined,
      //     <InfoCircleFilled key="InfoCircleFilled" />,
      //     <QuestionCircleFilled key="QuestionCircleFilled" />,
      //     <GithubFilled key="GithubFilled" />,
      //   ];
      // }}
      headerTitleRender={(logo, title, _) => {
        const defaultDom = (
          <a>
            {logo}
            {title}
          </a>
        );
        if (typeof window === 'undefined') return defaultDom;
        if (document.body.clientWidth < 1400) {
          return defaultDom;
        }
        if (_.isMobile) return defaultDom;
        return (
          <>
            {defaultDom}
            {/* <MenuCard /> */}
          </>
        );
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            <div>© 2024 Made with love</div>
            <div>by ndzy</div>
          </div>
        );
      }}
      onMenuHeaderClick={(e) => console.log(e)}
    >
      <Routes>
        {loop(routes.routes)}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </ProLayout>
  );
});
