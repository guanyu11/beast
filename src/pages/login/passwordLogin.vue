<template>
  <div class="pass-login-wrap">
    <div class="beast-login-warp login pass-login">
      <img src="https://img.thebeastshop.com/app/4.0/icon/icon-back.png" class="close"
      @click="goback" />
      <div class="login-head">
        <p class="title">密码登录</p>
      </div>
      <div class=" login-main">
        <div class="type">
          <div class="item active">手机号</div>
          <div class="item">邮箱</div>
        </div>
      <br class="clear">

        <div class="input-warp">
          <div class="input-group">
            <div style>
              <div class="input-row">
                <div class="phone-area">+86</div>
                <i class="split"></i>
                <div class="phone-input">
                  <input type="text" placeholder="请输入手机号"
                  v-model="phoneNum" />
                </div>
              </div>
            </div>
            <!-- 邮箱 -->
            <div style="display: none;">
              <div class="input-row">
                <input type="text" placeholder="请输入邮箱" />
              </div>
            </div>

            <div class="input-row">
              <i class="input-del" style="display: none;"></i>
              <input type="password" placeholder="请输入密码"
              v-model="password" />
            </div>
          </div>
        </div>
      </div>

      <div class="login-tips">
        <span class="error"></span>
        <span class="to-forget">忘记密码</span>
      </div>
      <div class="login-btn-wrap">
        <v-touch class="login-btn-pass"
        @tap="passwordLog">登录</v-touch>
      </div>
      <div class="login-others ">
        <router-link to="/login">快捷登录注册</router-link>
      </div>
      <!-- <div class="bg-pass">
        <img src="https://img.thebeastshop.com/app/4.0/icon/loginBgImage.png.png" />
      </div> -->
    </div>
    <!---->
  </div>
</template>

<script>
import css from "./index.scss"
import {passwordLoginApi} from "./index.js"
export default {

data(){
  return{
    phoneNum:"",
    password:""
    // searchDate:{
    //   principal:"",
    //   credential:"",
    //   authType:"MOBILE"
    // }
  }
},
methods:{
  goback(){
    this.$router.back();
  },
  async passwordLog(){
    console.log(1111)
      let data = await passwordLoginApi({
        principal:"+86-"+this.phoneNum,
        credential:this.password,
        authType:"MOBILE"
      });
      console.log(data,"密码登录页")
      if(data.code==201){
        // router.push("/mine")
      this.$store.commit("minepage/setmineData",data.data)
      this.$store.commit("handleLogin",data.data)
      // localStorage.setItem("beast_id",data.data.member.id)
      // localStorage.setItem("beast_member",JSON.stringify(data.data.member))
      // console.log(this,this.$route, this.$router)
      this.$router.push(this.$route.params.to||'/mine')
      }
  }
}


};
</script>

<style lang="scss">
</style>