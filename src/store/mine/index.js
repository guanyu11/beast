import request from "@utils/request.js"
import api from "@api/index.js"
export default{
    state:{
        data:'',
        member:'',
        
    },
    mutations:{   
        setmineData(state,data){
            state.data=data;
            state.member=data.member;
            
        },
      

    },
    actions:{
        // handleCityId(...res){
        //     console.log(res,"res")
        //     // commit("handleActiveCityId",id)
        // }
    },
    namespaced:true
}