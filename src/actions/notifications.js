import actionType from './actionType';
import { getNotifications } from '../requests/index';

export const startAjax =()=>{
  return {
    type:actionType.START_AJAX
  }
}
export const endAjax =()=>{
  return {
    type:actionType.END_AJAX
  }
}
export const mark_Notifications_ById =(id)=>{
  return dispatch => {
      dispatch(startAjax());
      setTimeout(()=>{
        dispatch({
            type:actionType.MARK_NOTIFICATIONS_BY_ID,
            payload:{
              id
            }
        })
        dispatch(endAjax());
      },300)
  }
}
export const mark_Notifications_ALL =(id)=>{
  return dispatch => {
      dispatch(startAjax());
      setTimeout(()=>{
        dispatch({
            type:actionType.MARK_NOTIFICATIONS_BY_ALL,
        })
        dispatch(endAjax());
      },300)
  }
}
export const getNotificationsList =(id)=>{
  return dispatch => {
      dispatch(startAjax());
      getNotifications()
      .then(resp=>{
        dispatch({
          type:actionType.SET_LIST,
          payload:{
            list:resp.data.list
          }
        }
        );
        dispatch(endAjax());
      })
  }
}