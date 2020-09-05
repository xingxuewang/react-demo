import React, { Component } from 'react';
import { adminRouter } from './Routes/index'
import {Switch,Route,Redirect} from 'react-router-dom';
import {Frame} from './components/index';
import { connect } from 'react-redux';
const mapState = state => ({
   isLogin:state.user.isLogin,
   role:state.user.role,
})
@connect(mapState)
class App extends Component{
  
    render(){
      return (
        this.props.isLogin
        ?
        <Frame menu={adminRouter.filter((item)=>{return item.isNav})}>
            <Switch>
                {
                    adminRouter.map((route)=>{
                      return <Route exact={route.exact} key={route.pathname} path={route.pathname} render={(routerProps)=>{
                         return route.roles.includes(this.props.role) ? <route.component {...routerProps} /> : <Redirect to='/admin/noauth' />
                      }} />
                    })
                }
                <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                <Redirect to='/404'/>
            </Switch>
        </Frame>
        :
        <Redirect to='/login' />
      )
    }
}

export default App;
