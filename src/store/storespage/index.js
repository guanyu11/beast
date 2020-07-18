import request from "@utils/request.js"
import api from "@api/index.js"
export default{
    state:{
        stores: [],
        cities:[],
        brands:[],
        modules: [],
        image: "",
        // activeCity:'-1',
        apiData: {
          birthdayGiftId: "",
          couponId: "",
          cityId:'',
          brandId:'',
          lat: "",
          lng: ""
        }
      

    },
    mutations:{
        getCityData(state,data){
            state.cities=data.cities;
            state.brands=data.brands;
           
        },
        getStoresData(state,data){
            state.stores=data;
            
        },
        handleCityId(state,id){
            console.log(id)
            state.apiData.cityId=id;
        },
        handleBrandId(state,id){
            state.apiData.brandId=id;
        } 

    },
    actions:{
        async getstoresCity({commit,dispatch}){
            let data = await request({
                method:"get",
                url:api.stores.storescity,
            })
            console.log(data,"getstoresCity")
            commit("getCityData",data.data);
            
            dispatch("getstoresPage")

        },    
         async getstoresPage({commit,state}){
            let data = await request({
                method:"get",
                url:api.stores.storespage,
                data:state.apiData,
            })
            console.log(data,"getstoresPage")
            commit("getStoresData",data.data)

        },
        // handleCityId(...res){
        //     console.log(res,"res")
        //     // commit("handleActiveCityId",id)

        // }


    },
    namespaced:true
}