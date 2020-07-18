import request from "@utils/request"
import api from "@api"

//搜索关键字

export  const  searchKeywordData =(keyword) =>{
    return request({
        method:"get",
        url:api.search.searchKeyword,
        data:{
            keyword
        }
    })
}