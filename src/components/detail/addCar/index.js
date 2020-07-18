import request from "@utils/request"
import api from "@api";



//搜索列表
export const addgoodData = (data)=>{
    return request({
        method:"post",
        url:api.cart.addgood,
        data:data,
        headers:{
            'tbs-channel':"CHN2077",
            'tbs-client': 3,
        }
    })
}