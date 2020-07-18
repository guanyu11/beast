import request from "@utils/request"
import api from "@api";



//详情上半部
export const detailData = (proId)=>{
    return request({
        method:"get",
        url:api.detail.detail+"/"+proId,

    })
}

//详情中部  详情  细节展示等
export const detailMiddle = (proId)=>{
    return request({
        method:"get",
        url:api.detail.detail+"/"+proId+'/details',
        data:{
            legacy: false,
            nocache: false
        }

    })
}