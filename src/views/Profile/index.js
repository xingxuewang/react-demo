import React, { Component } from 'react'
import { Upload,message,Card} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAcatar } from '../../actions/user'
const mapState = (state)=>{
    return {
        avatar:state.user.avatar
    }
}
@connect(mapState,{setAcatar})
class Profile extends Component {
    state = {
        loading: false,
      };
    uploadFn = (fileData)=>{
        this.setState({
            loading:true
        })
        const data = new FormData();
        data.append('file',fileData.file);
        data.append('Token','cb89f74e823ca057d8993699267eb06bada72176:w96VoH5tqlZ4a6Uio5OD7C91dek=:eyJkZWFkbGluZSI6MTU5OTM2NDk0OSwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzI2NDAwIiwiYWlkIjoiMTcxNTMwNSIsImZyb20iOiJmaWxlIn0=');
        axios.post('http://up.imgapi.com/',data)
        .then(res=>{
            if(res.status === 200){
              this.props.setAcatar(res.data.linkurl);
              this.setState({
                  loading:false
              })
            }
            else{
                message.error('图片上传失败！');
            }
        })
        .catch(()=>{
            message.error('图片上传失败！');
        })
    }
    render() {
        const { loading } = this.state;
        const uploadButton = (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return (
         <Card title="个人设置" bordered={false}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    customRequest={this.uploadFn}
                >
                    {this.props.avatar ? <img src={this.props.avatar} alt="头像" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
          </Card>
        )
    }
}
export default Profile