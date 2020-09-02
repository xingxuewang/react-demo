import React from 'react'
import { Form, Input, Button } from 'antd';
import './index.css'
import {connect} from 'react-redux';
import {login} from '../../actions/user';
import {Redirect} from 'react-router-dom';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 16,
  },
};
const mapState = state =>({
  isLogin:state.user.isLogin,
  isLoading:state.user.isLoading,
})
const Demo = (props) => {
  const onFinish = values => {
    props.login(values)
  };
  return (
    props.isLogin 
    ?
    <Redirect to='/admin'/>
    :
    <Form
      {...layout}
      onFinish={onFinish}
      className='loginFrom'
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input disabled={ props.isLoading } />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password disabled={props.isLoading} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={ props.isLoading }>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default connect(mapState,{login})(Demo)