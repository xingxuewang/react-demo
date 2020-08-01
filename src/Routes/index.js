import React from 'react';
import {
    ArticleList,
    ArticleEdit,
    Dashboard,
    Login,
    NotFound,
    Settings
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
        isNav:true
    },
    {
        pathname: "/admin/Article/edit/:id",
        component: ArticleEdit,
    },
    {
        pathname: "/admin/Article",
        component: ArticleList,
        icon:<UnorderedListOutlined />,
        exact:true,
        title:'文章列表',
        isNav:true
    },
    {
        pathname: "/admin/Settings",
        component: Settings,
        icon:<SettingOutlined />,
        title:'设置',
        isNav:true
    },
]