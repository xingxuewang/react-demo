import axios from 'axios';
import { message } from 'antd';
const isDev = process.env.NODE_ENV === 'development';
const service = axios.create({
    baseURL:isDev ? 'http://rap2.taobao.org:38080/app/mock/262011' : ''
})
const service1 = axios.create({
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
// 文章列表
export const getArticlse =(offset,limited)=>{
    return service.post('/api/v1/articlelist',{offset,limited})
}
// 删除文章
export const articleDetele =(id)=>{
    return service.post(`/api/v1/articleDetele/${id}`)
}
//获取文章
export const getArticle =(id)=>{
    return service.post(`/api/v1/article/${id}`)
}
//修改文章
export const articleEdit =(id,data)=>{
    return service.post(`/api/v1/articleEdit/${id}`,data)
}
//查询通知
export const getNotifications =()=>{
    return service.get(`/api/v1/notifications`)
}
//人员登录
export const loginRequests =(userInfo)=>{
    return service1.post(`/api/v1/login`,userInfo)
}