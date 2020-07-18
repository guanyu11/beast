<template>
  <div id="login">

    <div class="tit">快捷注册登录</div>
    <div class="login-form">
      <div class="login-item">
          <div class="area">
              +86
          </div>
          <div class="tel">
              <input  type="text" placeholder="请输入手机号">
          </div>

      </div>
      <div class="login-item">
          <input type="text" placeholder="图片验证码">
          <img class="svg" src="https://api.thebeastshop.com/app/captcha?_timestamp=1582359715132">
      </div>
      <div class="login-item">
          <input type="text" placeholder="请输入短信验证码">
          <div class="svg">获取验证码 </div>
      </div>
      <div class="login-btn">登录</div>
    </div>
    <div class="login-other">
      <router-link to="/passwordLogin" >密码登录</router-link>
    </div>
    <div class="footer">
        <p>未注册的手机验证成功后将自动注册，注册视为同意<a>野兽派服务条款</a></p>
    </div>
    <div class="bg">
      <img src="https://img.thebeastshop.com/app/4.0/icon/loginBgImage.png.png" />
    </div>
  </div>
</template>

<script>
import css from "./index.scss";
export default {


created(){
  console.log(this.$route)
}



};
</script>

<style lang="">
</style>