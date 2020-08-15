import React, { Component } from 'react'
import { Card,Row,Col } from 'antd';
import './index.less';
export default class index extends Component {
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
            </Card>
          </>
        )
    }
}
