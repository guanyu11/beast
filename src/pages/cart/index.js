// [{id: 3654970}]

import request from "@utils/request"
import api from "@api";



//搜索列表
export const cartPreview = (data)=>{
    return request({
        method:"post",
        url:api.cart.postCart,
        data:data,
        headers:{
            'tbs-channel':"CHN2077",
            'tbs-client': 3 
        }
    })
}

export const getcartData = ()=>{
    return request({
        method:"get",
        url:api.cart.getCart,
        headers:{
            'tbs-channel':"CHN2077",
            'tbs-client': 3 
        }
    })
}


//删除商品
export const deleteCartData = (id)=>{
    return request({
        method:"delete",
        url:api.cart.delete+'?packId='+id,
       
        headers:{
            'tbs-channel':"CHN2077",
            'tbs-client': 3 
        }
    })
}