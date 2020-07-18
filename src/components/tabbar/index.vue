<template>
  <div id="tabbar">
    <ul>
      <router-link v-for="(item,index) in tabs"
       :key="index+'item.icon'" 
      :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          icon: "&#xe61e;",
          text: "首页",
          path: "/home"
        },

        {
          icon: "&#xe638;",
          text: "选购",
          path: "/classify"
        },
        {
          icon: "&#xe603;",
          text: "发现",
          path: "/find"
        },
        {
          icon: "&#xe623;",
          text: "门店",
          path: "/stores"
        },
        {
          icon: "&#xe61a;",
          text: "我的",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#tabbar{
        width:100%;
        height: 1rem;
        position: fixed;
        left:0;
        bottom: 0;
        background: #fff;
        ul{
            width:100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .router-link-active{
            color:#222;
        }
        a{
            width:100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size:.15rem;
            color:#aaa;
            i{
                font-size:.2rem;
            }
        }
    }
</style>