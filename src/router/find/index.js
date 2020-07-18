export default{
    path:"/find", 
    redirect:"/find/share",
    
    component:()=>import("@pages/find"),
    name:"find",
    meta:{
        title:"发现",
        flag:true,

    },
    children:[
        {
            path:"share",
            component:()=>import("@components/find/share"),
            meta:{
                title:"发现",
                flag:true,
        
            },
        },
        {
            path:"story",
            component:()=>import("@components/find/story"),
            meta:{
                title:"发现",
                flag:true,
        
            },

        }
    ]
}