import request from "@utils/request"
import api from "@api";



//搜索列表
export const articleData = (articleId)=>{
    return request({
        method:"get",
        url:api.article.article+articleId,

    })
}

//如果 modeles 里面有list  根据ids  搜索对应商品数据
export const articleGoods = (ids)=>{
    return request({
        method:"post",
        url:api.article.articleGoods,
        data:ids

    })
}