<template>
  <div class="page">
    <articleHead />
    <div id="article">
      <div v-if="articleList.length>0">
      <div
       v-for="(item,index) in articleList"
      :key="'articleList'+index">
      <!-- tem.type=='image' -->
        <div  class="article-img"  v-if="item.type=='image'" >
          <router-link tag="img" v-lazy="item.data.image.src" 
          :to="!item.data.link?
          '':item.data.link.type=='list'?
          '/productList/'+item.data.link.value:
          item.data.link.type=='article'?
          '/article/'+item.data.link.value:
          item.data.link.type=='product'?
          '/detail/'+item.data.link.value:''"
          ></router-link>
        </div>
        <!-- tem.type=='list' -->
         <articleGoods  v-if="item.type=='list'"
        :ids="item.data.ids"/>
      </div>
      
    </div>
    </div>
  </div>
</template>

<script>
import "./index.scss"
import { articleData } from "./index.js";
import articleHead from "@components/head";
import articleGoods from "@components/article/articleGoods"
export default {
  props: ["articleId"],
  components: {
    articleHead,
    articleGoods
  },
  data(){
    return{
      articleList:[]
    }
  },

  async created() {
    // let {limit,offset,title,sortField,sortOrder,pageName}=this.searchDate;
    let data = await articleData(this.articleId);
    console.log(data, "articleData");
       this.articleList=data.data.modules;
  }
};
</script>

<style lang="scss">
#article {
  padding-top: 0.92rem;
}
</style>