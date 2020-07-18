import request from "@utils/request.js"
import api from "@api/index.js"
export default{
    state:{
        classfyData:localStorage.getItem("classifyPage")?JSON.parse(localStorage.getItem("classifyPage")):[],
        express:{},
        bottomImg:[],
        defaultKeyword:"",
        hotKeysList:[],

    },
    mutations:{
        getClassifyData(state,data){
            state.classfyData=data.modules;
        },
        getSuggestSearchWord(state,data){
            state.defaultKeyword=data.defaultKeyword.name;
            state.hotKeysList=data.hotKeys;

        }

    },
    actions:{
        async getClassifyPage({commit}){
            let data = await request({
                method:"get",
                url:api.classify.classifypage
            })
            console.log(data)
            commit("getClassifyData",data.data)
            localStorage.setItem("classifyPage",JSON.stringify(data.data.modules))

        },
        async getSuggestSearchWord({commit}){
            let data = await request({
                method:"get",
                url:api.search.suggest
            })
            console.log(data,"getSuggestSearchWord")
            commit("getSuggestSearchWord",data.data)
            // localStorage.setItem("classifyPage",JSON.stringify(data.data.modules))

        },
        

    },
    namespaced:true
}