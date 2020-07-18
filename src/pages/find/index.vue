<template>
  <div class="page">
    <div id="find">
      <div class="find-head">
        <router-link class="head-item" to="/find/share" tag="div">随便晒单</router-link>
        <router-link class="head-item"  to="/find/story" tag="div">封面故事</router-link>
        <!-- <div class="head-item">随便晒单</div>
        <div class="head-item">封面故事</div> -->
      </div>
      <div class="shoppingCar iconfont">&#xe661;</div>
      <!-- <Share></Share> -->
      <!-- <Story></Story> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import css from "./index.scss";
// import Share from "@component//share";
// import Story from "./story";
export default {
  components: {
    // Share,
    // Story
  }
};
</script>

<style lang="">
</style>