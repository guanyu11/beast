export default{
    // path:"/searchList/:keyword",
    path:"/searchList",
    component:()=>import("@pages/searchList/index.vue"),
    name:"searchList",
    // props:true,
    meta:{
        title:"搜索列表"
    }
}
// /:cateTitle/:searchTitle/:title/:categoryId/:listId
// "keyword",
// "cateTitle",
// "searchTitle",
// "title"],
// "categoryId",
// "listId",
