import request from "@utils/request.js"
import api from "@api/index.js"
export default{
    state:{
        banner:localStorage.getItem("beast_HomeData")?
        JSON.parse(localStorage.getItem("beast_HomeData")).modules[0].data.items.slice(0,3):[],
        express:localStorage.getItem("beast_HomeData")?
        JSON.parse(localStorage.getItem("beast_HomeData")).modules[1]:{},
        bottomImg:localStorage.getItem("beast_HomeData")?
        JSON.parse(localStorage.getItem("beast_HomeData")).modules.slice(7):[],

    },
    mutations:{
        getHomeData(state,data){
            state.banner=data.modules[0].data.items.slice(0,3);
            state.express=data.modules[1];
            state.bottomImg=data.modules.slice(6);
            console.log(state.banner,"banner")
            console.log(state.express.data.image.src)
            
        }

    },
    actions:{
        async getHomePage({commit}){
            let data = await request({
                method:"get",
                url:api.home.homepage
            })
            console.log(data,"getHomePage")
            commit("getHomeData",data.data);
            localStorage.setItem("beast_HomeData",JSON.stringify(data.data))

        }

    },
    namespaced:true
}