import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import store from './store'
import {mainRouter} from './Routes/index';
import './index.css';
ReactDOM.render(
  <Provider store={ store }>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route path='/admin' render={(routerProps)=>{
            return <App {...routerProps}/>
          }} />
          {
            mainRouter.map((route)=>{
              return <Route key={route.pathname} path={route.pathname} component={route.component}/>
            })
          }
          <Redirect to="/admin" from='/' exact/>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);