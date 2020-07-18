<template>
  <div class="artile-head" >
    <router-link tag="div" to="/home" class="iconfont goto">&#xe638;</router-link>
    <router-link tag="div" to="/cart" class="iconfont cart">&#xe661;</router-link>

    <router-link tag="div" to="/search" class="iconfont search">&#xe639;</router-link>
  </div>
</template>

<script>
export default {
    name:"articleHead"

}
</script>

<style lang="scss">
.artile-head{
    height: .92rem;
    // display: flex;
    // align-items: center;
    background: #fff;
    position: fixed;
    width: 100%;
    top:0;
    padding-left: .22rem;
    z-index:99;
    div{
        // display: inline-block;
        height: 100%;
        line-height:.92rem; 
        font-size: .5rem;
    }
    .goto{
        float: left;


    }
    .search{
        float: right;
        font-weight: 600;
        margin-right: .18rem

    }
    .cart{
        float: right;
        margin-right: .24rem


    }


}

</style>