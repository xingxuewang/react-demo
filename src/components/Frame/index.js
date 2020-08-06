import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {withRouter} from 'react-router-dom';
import logo from './logo.jpg';
import './index.css';
const { Header, Content, Sider } = Layout;
@withRouter
class Index extends Component {
    menuClick=({key})=>{
     this.props.history.push(key)
    }
    render() {
        return (
            <Layout style={{height:'100%'}}>
            <Header className="header">
                <div className="logo">
                    <img src={logo} alt='logo'></img>
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