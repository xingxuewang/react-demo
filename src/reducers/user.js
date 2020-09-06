import actionType from '../actions/actionType';
const isLogin = Boolean(window.localStorage.getItem('authToken'));
const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
const initState = {
    ...userInfo,
    isLogin,
    isLoading:false
}
export default (state = initState, action) => { 
    switch (action.type) {
        case actionType.START_LOGIN:
            return {
                ...state,
                isLoading:true
            }
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                isLoading:false,
                isLogin:true
            }
        case actionType.LOGIN_FAILED:
            return {
                id:'',
                displayName:'',
                avatar:'',
                role:'',
                isLogin:false,
                isLoading:false
            }
        case actionType.SET_AVATAR:
            return {
                ...state,
                avatar:action.payload.avatar,
            }
        default:
            return state
    }
}