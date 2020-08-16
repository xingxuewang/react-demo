import React, { Component,createRef } from 'react'
import { Card,Row,Col } from 'antd';
import './index.less';
import echarts from 'echarts';
export default class index extends Component {
    constructor(){
        super();
        this.echartRef = createRef();
    }
    // 初始化
    initEchart(){
          // 基于准备好的dom，初始化echarts实例
          const myChart = echarts.init(this.echartRef.current);

          // 指定图表的配置项和数据
          const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
    }
    componentDidMount(){
       this.initEchart();
    }
    render() {
        return (
          <>
            <Card title="仪表盘" bordered={ false }>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div style={{backgroundColor:'#409EFF'}} className='my-gutter-row'>1</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{backgroundColor:'#67C23A'}} className='my-gutter-row'>2</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{backgroundColor:'#E6A23C'}} className='my-gutter-row'>3</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{backgroundColor:'#F56C6C'}} className='my-gutter-row'>4</div>
                    </Col>
                </Row>
            </Card>
            <Card title="数据可视化" bordered={ false }>
                <div ref={this.echartRef} style={{height:'400px'}}></div>
            </Card>
          </>
        )
    }
}
