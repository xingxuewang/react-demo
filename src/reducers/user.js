import actionType from '../actions/actionType'
const initState = {
    id:'',
    displayName:'',
    avatar:'',
    role:'',
    isLogin:false,
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
        default:
            return state
    }
}