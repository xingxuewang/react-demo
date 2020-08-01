import axios from 'axios';
import { message } from 'antd';
const isDev = process.env.NODE_ENV === 'development';
const service = axios.create({
    baseURL:isDev ? 'http://rap2.taobao.org:38080/app/mock/262011' : ''
})
service.interceptors.request.use((config)=>{
    config.data ={
        ...config.data,
        anthToken:'111'
    }
    return config
})
service.interceptors.response.use((resp)=>{
    if(resp.data.code === 200){
        return resp.data
    }
    else{
        // 错误
        message.error('请求失败！');
    }
})
export const getArticlse =(offset,limited)=>{
    return service.post('/api/v1/articlelist',{offset,limited})
}