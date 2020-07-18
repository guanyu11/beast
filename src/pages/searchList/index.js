import request from "@utils/request"
import api from "@api";



//搜索列表
export const searchListData = (data)=>{
    return request({
        method:"get",
        url:api.search.searchList,
        data:data,
    })
}