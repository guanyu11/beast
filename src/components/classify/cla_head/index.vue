<template>
  <router-link tag="div" to="./search" class="cla-head">
      <div class="head-con">
          <div  class="head-sear">
              <i class="iconfont">
                &#xe612;
              </i>
          </div>
          <div class="keyword">
              {{$store.state.classifypage.defaultKeyword}}
          </div>
      </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .cla-head{
        .head-con{
           height: .94rem; 
           margin: 0 1rem .24rem .4rem;
           border-bottom:  .04rem solid #000;
           
           i{
               font-size: .32rem;
               font-weight: 700;
               height:.94rem;
            //    line-height: .94rem;
           }
           div{
              float: left;
              height: .94rem;
              line-height: .94rem;
           }
           .keyword{
                font-size: .28rem;
               font-weight: 500;
               padding-left: .16rem;
           }
        }
    }
</style>>


