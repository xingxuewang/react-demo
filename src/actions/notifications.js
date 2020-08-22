import actionType from './actionType';
export const mark_Notifications_ById =(id)=>{
  return dispatch => {
      setTimeout(()=>{
        dispatch({
            type:actionType.MARK_NOTIFICATIONS_BY_ID,
            payload:{
              id
            }
        })
      },300)
  }
}
export const mark_Notifications_ALL =(id)=>{
  return dispatch => {
      setTimeout(()=>{
        dispatch({
            type:actionType.MARK_NOTIFICATIONS_BY_ALL,
        })
      },300)
  }
}