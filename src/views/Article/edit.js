import React, { Component,createRef } from 'react'
import {Card,Form, Input, Button,DatePicker,message,Spin} from 'antd';
import {getArticle,articleEdit} from '../../requests/index';
import moment from 'moment';
import E from 'wangeditor';
import './index.less'
export default class Edit extends Component {
    constructor(){
      super();
      this.editorRef = createRef();
      this.myForm = createRef();
      this.state={
          loading:false
      }
    }
    onFinish = values => {
        this.setState({
            loading:true
        })
        let {createAt,...data} = values;
        articleEdit(this.props.match.params.id,{
            createAt:moment(createAt).valueOf(),
            ...data
        })
        .then(res=>{
            this.setState({
                loading:false
            })
            this.props.history.goBack();
            message.info(res.data.msg);
        })
    };
    wangEditorInit=()=>{
        this.editor = new E(this.editorRef.current)
        this.editor.customConfig.onchange = (html)=> {
            // html 即变化之后的内容
            console.log(html)
            this.myForm.current.setFields([{name:'content',value:html}]
            );
        }
        this.editor.create()
    }
    componentDidMount(){
        this.wangEditorInit(); 
        this.setState({
            loading:true
        })
        getArticle(this.props.match.params.id)
        .then(res=>{
            let {createAt,content,...data} = res.data;
            this.myForm.current.setFieldsValue({
                createAt:moment(createAt),
                ...data
            })
            this.editor.txt.html(content);
            this.myForm.current.setFields([{name:'content',value:content}]); 
            this.setState({
                loading:false
            })
        })        
    }
    render() {
        return (
          <Card size="small" title="文章编辑" extra={<Button onClick={this.props.history.goBack}>取消</Button>}>
            <Spin spinning={this.state.loading}>
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
                    <div className='myeditor' ref={this.editorRef}></div>
                    </Form.Item>
                    <Form.Item  wrapperCol={{ offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                        保存
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
          </Card>
        )
    }
}
