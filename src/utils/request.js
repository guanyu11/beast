import axios from "axios";

const http =axios.create({
    timeout:5000,
    withCredential:true,
    //baseUrl:''
})

http.interceptors.request.use(config=>{
    if(config.method=="get"){
        config.params={...config.data};
    }
    //工作中这里可能要加token值
    //config.headers["authToken"]=store.token;
    //加loading
    return config;

},(err)=>{
    return Promise.reject(err)
    //Promise.reject()方法返回一个带有拒绝原因的Promise对象。
})

http.interceptors.response.use(config=>{
    //关闭loading
    if(config.status==200){
        return config.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default http;