const initState ={
    isLoading:false,
    list:[{
        id:1,
        title:'标题',
        desc:'我是描述哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        hasRead:false
    },
    {
        id:2,
        title:'标题2',
        desc:'速度大幅度顶顶顶顶顶顶顶顶顶顶',
        hasRead:true
    }]
}
export default(state=initState,action)=>{
   switch(action.type){
       default:
           return state
   }
}