import React, { Component,createRef } from 'react'
import {Card,Form, Input, Button,DatePicker} from 'antd';
import E from 'wangeditor';
import './index.less'
export default class Edit extends Component {
    constructor(){
      super();
      this.editor = createRef();
      this.myForm = createRef();
    }
    onFinish = values => {
        console.log('Success:', values);
    };
    wangEditorInit=()=>{
        let editor = new E(this.editor.current)
        editor.customConfig.onchange = (html)=> {
            // html 即变化之后的内容
            console.log(html)
            this.myForm.current.setFields([{name:'content',value:html}]
            );
        }
        editor.create()
    }
    componentDidMount(){
        this.wangEditorInit(); 
    }
    render() {
        return (
          <Card size="small" title="文章编辑" extra={<Button>取消</Button>}>
              <Form
                ref={ this.myForm }
                labelCol= {{ span: 4 }}
                wrapperCol= {{ span: 14 }}
                onFinish={this.onFinish}
                initialValues ={{title:'我是初始值'}}
                >
                <Form.Item
                    name="title"
                    label='标题'
                    rules={[
                        {
                            required: true,
                            message: '标题必填',
                        }
                    ]}
                >
                    <Input placeholder='请输入标题' />
                </Form.Item>
                <Form.Item
                    name="author"
                    label='作者'
                    rules={[
                        {
                            required: true,
                            message: '作者必填',
                        }
                    ]}
                >
                    <Input placeholder='请输入作者' />
                </Form.Item>
                <Form.Item
                    name="amount"
                    label='阅读量'
                    rules={[
                        {
                            required: true,
                            message: '阅读量必填',
                        }
                    ]}
                >
                    <Input placeholder='请输入阅读量'/>
                </Form.Item>
                <Form.Item
                    name="createAt"
                    label='创建时间'
                    rules={[
                        {
                            required: true,
                            message: '时间必填',
                        }
                    ]}
                >
                    <DatePicker showTime placeholder='选择时间' />
                </Form.Item>
                <Form.Item
                    name="content"
                    label='内容'
                    rules={[
                        {
                            required: true,
                            message: '内容必填',
                        }
                    ]}
                > 
                   <div className='myeditor' ref={this.editor}></div>
                </Form.Item>
                <Form.Item  wrapperCol={{ offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                       保存
                    </Button>
                </Form.Item>
                </Form>
          </Card>
        )
    }
}
