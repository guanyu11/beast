export default{
    path:"/productList/:sortId",
    component:()=>import("@pages/productList/index.vue"),
    name:"productList",
    props:true,
    meta:{
        title:"商品列表"
    }
}