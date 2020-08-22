import React, { Component } from 'react'
import {Card,Button,List,Badge} from 'antd';
import { connect } from 'react-redux';
  const mapState = state =>{
    const { list } = state.notifications
    return {
      list
    }
  }
  
  @connect(mapState)
  class index extends Component {
    render() {
        return (
        <Card title="通知中心" bordered={ false } extra={<Button disabled={this.props.list.every(item=>{return item.hasRead})}>全部标记为已读</Button>}>
             <List
                itemLayout="horizontal"
                dataSource={this.props.list}
                renderItem={item => (
                <List.Item extra={ item.hasRead ? null : <Button>标记为已读</Button>}>
                    <List.Item.Meta
                    title={<Badge dot={ !item.hasRead }>{item.title}</Badge>}
                    description={item.desc}
                    />
                </List.Item>
                )}
            />
        </Card>
        )
    }
}
export default index