import request from "@utils/request"
import api from "@api";



//denglu
export const passwordLoginApi = (data)=>{
    return request({
        method:"post",
        url:api.login.passwordLogin,
        data:data,
    })
}