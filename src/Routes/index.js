import React from 'react';
import {
    ArticleList,
    ArticleEdit,
    Dashboard,
    Login,
    NotFound,
    Settings,
    Notification,
    Noauth,
    Profile
} from '../views/index';
import {
    UnorderedListOutlined,
    DashboardOutlined,
    SettingOutlined
  } from '@ant-design/icons';
export const mainRouter = [{
        pathname: "/login",
        component: Login,
    },
    {
        pathname: "/404",
        component: NotFound,
    }
]
export const adminRouter = [{
        pathname: "/admin/Dashboard",
        component: Dashboard,
        title:'仪表盘',
        icon:<DashboardOutlined />,
        isNav:true,
        roles:['001','002','003']
    },
    {
        pathname: "/admin/Article/edit/:id",
        component: ArticleEdit,
        roles:['001','002']
    },
    {
        pathname: "/admin/Article",
        component: ArticleList,
        icon:<UnorderedListOutlined />,
        exact:true,
        title:'文章列表',
        isNav:true,
        roles:['001','002','003']
    },
    {
        pathname: "/admin/Settings",
        component: Settings,
        icon:<SettingOutlined />,
        title:'设置',
        isNav:true,
        roles:['001']
    },
    {
        pathname: "/admin/Notification",
        component: Notification,
        roles:['001','002','003']
    },
    {
        pathname: "/admin/noauth",
        component: Noauth,
        roles:['001','002','003']
    },
    {
        pathname: "/admin/profile",
        component: Profile,
        roles:['001','002','003']
    },
]