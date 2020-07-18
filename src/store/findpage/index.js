import request from "@utils/request.js"
import api from "@api/index.js"
export default{
    state:{
      tabdata:[],
      tabIndex:-1,
      searchData:{
        shopId:"" ,
        offset:0,
        limit:20, 
      },
      stories:[]

    },
    mutations:{
        setStoryPage(state,data){
            state.stories=data.reviews;
            console.log( state.stories)
        },
        setStoryTopbar(state,data){
            state.tabdata=data;
            state.tabIndex=0;
            console.log(state.tabdata,"state.tabdata")
            state.searchData.shopId= state.tabdata[state.tabIndex].shopIds.join();
        },
        hanldeTabIndex(state,index) {
            console.log(index)
            state.tabIndex = index;
            state.searchData.shopId= state.tabdata[state.tabIndex].shopIds.join();
            console.log(state.searchData.shopId,"state.searchData.shopIds")
            
          }

    },
    actions:{
        async getStoryPage({commit,state}){
           let data = await request({
               method:"get",
               url:api.find.storypage,
               data:state.searchData

           })
           console.log(data,"getSharePage")
           commit("setStoryPage",data.data)
           // localStorage.setItem("classifyPage",JSON.stringify(data.data.modules))

       },
        async getStoryTopbar({commit,state,dispatch}){
            let data = await request({
                method:"get",
                url:api.find.storytopbar,
                // url:api.find.storypage
             
            })
            console.log(data)
            commit("setStoryTopbar",data.data)
            dispatch("getStoryPage")
            // localStorage.setItem("classifyPage",JSON.stringify(data.data.modules))

        },
        

    },
    // getters:{
    //     tabIndex:
            
        
    // },
    namespaced:true
}