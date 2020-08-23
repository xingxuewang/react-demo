import actionType from '../actions/actionType'

const initState = {
    isLoading: false,
    list: [{
            id: 1,
            title: '标题',
            desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            hasRead: false
        },
        {
            id: 2,
            title: '标题2',
            desc: '速度大幅度顶顶顶顶顶顶顶顶顶顶',
            hasRead: true
        },
        {
            id: 3,
            title: '标题',
            desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            hasRead: false
        }, {
            id: 4,
            title: '标题',
            desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            hasRead: false
        }, {
            id: 5,
            title: '标题',
            desc: '我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            hasRead: false
        },
    ]
}
export default (state = initState, action) => {
    switch (action.type) {
        case actionType.START_AJAX:
            return {
                ...state,
                isLoading:true
            }
        case actionType.END_AJAX:
            return {
                ...state,
                isLoading:false
            }
        case actionType.MARK_NOTIFICATIONS_BY_ID:
            const {
                list, other
            } = state;
            return {
                ...other,
                list: list.map(item => {
                    if (item.id === action.payload.id) {
                        item.hasRead = true;
                    }
                    return item
                })
            }
            case actionType.MARK_NOTIFICATIONS_BY_ALL:
                return {
                    ...state,
                    list: state.list.map(item => {
                        item.hasRead = true;
                        return item
                    })
                }
                default:
                    return state
    }
}