export default{
    path:"/login",
    component:()=>import("@pages/login/index.vue"),
    name:"login",
    props:true,
    meta:{
        title:"login"
    }
}