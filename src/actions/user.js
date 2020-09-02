import actionType from './actionType';
import { loginRequests } from '../requests/index';
const startLogin =()=>{
  return {
    type:actionType.START_LOGIN
  }
}
const loginFailed =()=>{
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
export const login =(userInfo)=>{
    return dispatch =>{
        dispatch(startLogin())
        loginRequests(userInfo)
        .then(res=>{
            if(res.status === 200){
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