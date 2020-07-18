import request from "@utils/request"
import api from "@api";



//搜索列表
export const productListData = (productdata)=>{
    return request({
        method:"get",
        url:api.productList.product,
        data:productdata
    })
}