import React, { Component } from 'react'
import {Card,Form, Input, Button } from 'antd';
export default class Edit extends Component {
    onFinish = values => {
        console.log('Success:', values);
    };
    render() {
        return (
          <Card size="small" title="文章编辑" extra={<Button>取消</Button>}>
              <Form
                onFinish={this.onFinish}
                >
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: '请输入标题',
                        },
                        {
                            max: 8,
                            message: '最长8位数',
                        },
                        {
                            min:4,
                            message: '最短4位数',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
          </Card>
        )
    }
}
