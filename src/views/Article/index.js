import React, { Component } from 'react'
import {Card,Button,Table,Tag,Modal,message} from 'antd';
import XLSX from 'xlsx';
import moment from 'moment';
import {getArticlse,articleDetele} from '../../requests/index';
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
    getArticlseClick = ()=>{
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
          render:(ele)=>{
            return (
              <Button.Group>
                 <Button onClick={this.toEdit.bind(this,ele)} size="small" type='primary'>编辑</Button>
                 <Button onClick={this.articleDeteleClick.bind(this,ele)} size="small" type='danger'>删除</Button>
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
        },this.getArticlseClick)
    }
    // 转excel
    toExcel=()=>{
        const columnTitle = {
          id:'id',
          title:'标题',
          author:'作者',
          amount:'阅读量',
          createAt:'创建时间'
        }
        const data = [Object.keys(this.state.dataSource[0]).map(item=>columnTitle[item])];
        this.state.dataSource.forEach((item)=>{
          data.push([
            item.id,
            item.title,
            item.author,
            item.amount,
            moment(item.createAt).format('YYYY年MM月DD日 HH:mm:ss')
          ])
        })
      		/* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx")
    }
    // 删除
    articleDeteleClick=(ele)=>{
        Modal.confirm({
          title:`确定删除${ele.title}吗？`,
          onOk:()=>{
            articleDetele(ele.id)
            .then(res=>{
              message.success('This is a success message');
              this.setState({
                offset:0,
              },this.getArticlseClick)
            })
          }
        })
    }
    // 去编辑
    toEdit=(ele)=>{
      this.props.history.push(`/admin/Article/edit/${ele.id}`);
    }
    componentDidMount(){
       this.getArticlseClick()
    }
    render() {
        return (
        <Card 
        title="Card"
        extra={<Button onClick={this.toExcel}>导出Excle</Button>}>
             <Table loading = { this.state.isLoading } rowKey={(record)=>record.id} dataSource={this.state.dataSource} columns={this.state.columns} pagination ={{current:this.state.offset/10+1,showSizeChanger:true,total:this.state.total,hideOnSinglePage:true,onChange:this.pageChange}} />
        </Card>
        )
    }
}
