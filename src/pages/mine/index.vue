<template>
  <div class="page">
    <div  id="my-content" >
        <div class="level">
          <span>{{member.level?member.level.name:levelName}}</span>
          <i class="iconfont">&#xe611; </i>
        </div>
        <div  class="anylink">
          <p></p>
          <p>优惠卡券</p>
          <router-link tag="p" to="/cart">我的购物车</router-link>
          <p>我的收藏</p>
          <p>积分兑换特权</p>
          <p>野兽学院</p>
          <p>新人专享</p>
          <p>积分 <i>{{member.growthValue?member.growthValue:growthValue}}</i></p>
        </div>
        <div class="anyinfo">
          <p>个人资料</p>
          <p>电话客服 400-9200-108</p>
        </div>
    </div>
      
  </div>
</template>

<script>
import "./index.scss"
import { mapState } from 'vuex';
export default {
data(){
return{
  levelName:'',
  growthValue:''
}
},
computed:{
  ...mapState({
     mydata: state => state.minepage.data.member,
     member: state => state.minepage.member,

  })
},
created(){
  if (localStorage.getItem("beast_id")){
    var data=JSON.parse(localStorage.getItem("beast_member"))
      this.levelName=data.level.name;
      this.growthValue=data.growthValue;

  }
},


//  beforeRouteEnter(to,from,next){
//    if(!localStorage.getItem("beast_id")){
//      next({
//        path:"/login",
//        params:{
//          topath:to.path
//        }
//      })
//    }else{
//      next()
//    }
//  }
}
</script>

<style>

</style>