import actionType from './actionType';
import { loginRequests } from '../requests/index';
const startLogin =()=>{
  return {
    type:actionType.START_LOGIN
  }
}
const loginFailed =()=>{
    window.localStorage.removeItem('authToken');
    window.localStorage.removeItem('userInfo');
    return {
      type:actionType.LOGIN_FAILED
    }
  }
const loginSuccess =(userInfo)=>{
    return {
        type:actionType.LOGIN_SUCCESS,
        payload:{
          userInfo
        }
    }
}
export const setAcatar =(avatar)=>{
  return {
      type:actionType.SET_AVATAR,
      payload:{
        avatar
      }
  }
}
export const login =(userInfo)=>{
    return dispatch =>{
        dispatch(startLogin())
        loginRequests(userInfo)
        .then(res=>{
            if(res.status === 200){
              window.localStorage.setItem('authToken',res.data.data.authToken);
              window.localStorage.setItem('userInfo',JSON.stringify(res.data.data));
              setTimeout(()=>{
                dispatch(loginSuccess(res.data.data))
              },1000)
            }
            else{
              dispatch(loginFailed())
            }
        })
    }
}
export const loginOut =()=>{
  return dispatch =>{
      dispatch(loginFailed())
  }
}