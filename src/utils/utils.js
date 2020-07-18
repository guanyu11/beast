//封装节流
export const throttle=(function(){
    var firstTime=0;
    var timer =null;
    return function(callback,time=300){
        console.log(callback)
        var  lastTime=new Date().getTime();
        clearTimeout(timer)
        if(lastTime-firstTime>time){
            callback();
            firstTime=lastTime;
        }else{
            timer=setTimeout(()=>{
                callback();
            },time)
        }
    }
})()