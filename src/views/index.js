import Loadable from 'react-loadable';
import { Loading } from '../components/index';

const ArticleList = Loadable({
    loader:()=>import('./Article'),
    loading:Loading
})
const ArticleEdit = Loadable({
    loader:()=>import('./Article/edit'),
    loading:Loading
})
const Dashboard = Loadable({
    loader:()=>import('./Dashboard'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('./Login'),
    loading:Loading
})
const NotFound = Loadable({
    loader:()=>import('./NotFound'),
    loading:Loading
})
const Settings = Loadable({
    loader:()=>import('./Settings'),
    loading:Loading
})
const Notification = Loadable({
    loader:()=>import('./notification'),
    loading:Loading
})
export {
    ArticleList,
    ArticleEdit,
    Dashboard,
    Login,
    NotFound,
    Settings,
    Notification
}
