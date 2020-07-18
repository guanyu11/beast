<template>
  <div id="share">
    <div
      class="share-item"
      v-for="(item,index) in sharedata"
      :key="'share'+index"
      :isleft="index%2===0?'left':'right'"
    >
    <img class="share-img" v-lazy="item.share.image">
   <div class="cmt">{{item.share.content}}</div>
   <div>
       <div class="evaluator">
        <div>   <img v-lazy="item.evaluator.avatarUrl"></div>
           <div>{{item.evaluator.nickName}}</div>
       </div>
   </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import css from "./index.scss";
export default {
  name: "share",
  data() {
    return {
      sharedata: []
    };
  },
  created() {
    axios
      .get("/han/app/shareOrder/evaluate", {
        params: {
          limit: 20,
          offset: 0
        }
      })
      .then(data => {
        console.log(data);
        this.sharedata = data.data.data.items;
      });
  }
};
</script>

<style lang="">
</style>