export default{
    path:"/detail/:proId",
    component:()=>import("@pages/detail/index.vue"),
    name:"detail",
    props:true,
    meta:{
        title:"detail"
    }
}