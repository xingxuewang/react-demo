import React, { Component } from 'react';
import { adminRouter } from './Routes/index'
import {Switch,Route,Redirect} from 'react-router-dom';
import {Frame} from './components/index';
class App extends Component{
    render(){
      return (
        <Frame menu={adminRouter.filter((item)=>{return item.isNav})}>
            <Switch>
                {
                    adminRouter.map((route)=>{
                      return <Route exact={route.exact} key={route.pathname} path={route.pathname} render={(routerProps)=>{
                         return <route.component {...routerProps} />
                      }} />
                    })
                }
                <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                <Redirect to='/404'/>
            </Switch>
        </Frame>
      )
    }
}

export default App;
