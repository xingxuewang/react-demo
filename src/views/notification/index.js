import React, { Component } from 'react'
import {Card,Button,List,Badge,Spin} from 'antd';
import {mark_Notifications_ById,mark_Notifications_ALL} from '../../actions/notifications'
import { connect } from 'react-redux';
  const mapState = state =>{
    const { list,isLoading } = state.notifications
    return {
      list,
      isLoading
    }
  }
  
  @connect(mapState,{mark_Notifications_ById,mark_Notifications_ALL})
  class index extends Component {
    render() {
        return (
        <Spin spinning={this.props.isLoading}>
          <Card title="通知中心" bordered={ false } extra={<Button onClick={this.props.mark_Notifications_ALL.bind(this)} disabled={this.props.list.every(item=>{return item.hasRead})}>全部标记为已读</Button>}>
              <List
                  itemLayout="horizontal"
                  dataSource={this.props.list}
                  renderItem={item => (
                  <List.Item extra={ item.hasRead ? null : <Button onClick={this.props.mark_Notifications_ById.bind(this,item.id)}>标记为已读</Button>}>
                      <List.Item.Meta
                      title={<Badge dot={ !item.hasRead }>{item.title}</Badge>}
                      description={item.desc}
                      />
                  </List.Item>
                  )}
              />
          </Card>
        </Spin>
        )
    }
}
export default index