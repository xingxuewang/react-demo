import React, { Component } from 'react';
import { Layout, Menu,Dropdown,Badge} from 'antd';
import { connect } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import logo from './logo.jpg';
import './index.css';
const { Header, Content, Sider } = Layout;
const mapState = state =>{
    return {
        notificationsCount:state.notifications.list.filter(item=>{return !item.hasRead}).length
    }
  }
@withRouter
@connect(mapState)
class Index extends Component {
    menuClick=({key})=>{
     this.props.history.push(key)
    }
    dropdownClick=({key})=>{
        this.props.history.push(key)
       }
    menu = (
        <Menu onClick={this.dropdownClick}>
          <Menu.Item key="/admin/Notification">
            <Badge dot = { this.props.notificationsCount }>
                <span>通知中心</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="/admin/Settings">
            <span>设置中心</span>
          </Menu.Item>
          <Menu.Item key="/login">
             <span>退出</span>
          </Menu.Item>
        </Menu>
      );
    render() {
        return (
            <Layout style={{height:'100%'}}>
            <Header className="header">
                <div className="logo">
                     <div><img src={logo} alt='logo'></img></div>
                     <Badge count={this.props.notificationsCount} offset={[10,-5]}>
                        <Dropdown overlay={this.menu} trigger={['click']}>
                            <span>Click me <DownOutlined /></span>
                        </Dropdown>
                     </Badge>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.menuClick}
                    selectedKeys={[this.props.location.pathname.split('/').slice(0,3).join('/')]}
                >
                    {
                        this.props.menu.map((item)=>{
                        return <Menu.Item icon={item.icon} key={item.pathname}>{item.title}</Menu.Item>
                         })
                    }
                </Menu>
                </Sider>
                <Layout style={{ padding: '16px',backgroundColor:'#eee' }}>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: 0,
                    minHeight: 280,
                    backgroundColor:'#fff'
                    }}
                >
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
            </Layout>
        )
    }
}
export default Index