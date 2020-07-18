export default{
    path:"/article/:articleId",
    component:()=>import("@pages/article/index.vue"),
    name:"article",
    props:true,
    meta:{
        title:"article"
    }
}