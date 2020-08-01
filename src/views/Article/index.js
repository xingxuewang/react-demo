import React, { Component } from 'react'
import {Card,Button,Table,Tag} from 'antd';
import moment from 'moment';
import {getArticlse} from '../../requests/index';
export default class Article extends Component {
    constructor(props){
      super(props);
      this.state ={
        dataSource : [],
        columns : [],
        total:0,
        isLoading:false,
        offset:0,
        limited:10
      }
    }
    // 加载数据
    getArticlse = ()=>{
      this.setState({
        isLoading:true
      })
      getArticlse(this.state.offset,this.state.limited)
      .then(res=>{
        const columnTitle = {
          id:'id',
          title:'标题',
          author:'作者',
          amount:'阅读量',
          createAt:'创建时间'
        }
        const columnKeys = Object.keys(res.data.list[0]);
        const columns = columnKeys.map((item)=>{
          if(item === 'amount'){
            return {
              title: columnTitle[item],
              render:(ele)=>{
                return <Tag>{ele[item]}</Tag>
              },
              key:item,
            }
          }
          if(item === 'createAt'){
            return {
              title: columnTitle[item],
              render:(ele)=>{
                return moment(ele[item]).format('YYYY年MM月DD日 HH:mm:ss')
              },
              key:item,
            }
          }
          return {
            title: columnTitle[item],
            dataIndex:item,
            key:item,
          }
        })
        columns.push({
          key: "action",
          title: "操作",
          render:(h)=>{
            return (
              <Button.Group>
                 <Button size="small" type='primary'>编辑</Button>
                 <Button size="small" type='danger'>删除</Button>
              </Button.Group>
            )
          }  
        })
        
        this.setState({
          total:res.data.total,
          columns,
          dataSource:res.data.list
        })
      })
      .finally(()=>{
        this.setState({
          isLoading:false
        })
      })
    }
    // 分页
    pageChange=(current,pageSize)=>{
         this.setState({
          offset:pageSize * (current - 1),
          limited:pageSize
        },this.getArticlse)
    }
    componentDidMount(){
       this.getArticlse()
    }
    render() {
        return (
        <Card 
        title="Card"
        extra={<Button>导出Excle</Button>}>
             <Table loading = { this.state.isLoading } rowKey={(record)=>record.id} dataSource={this.state.dataSource} columns={this.state.columns} pagination ={{showSizeChanger:true,total:this.state.total,hideOnSinglePage:true,onChange:this.pageChange}} />;
        </Card>
        )
    }
}
