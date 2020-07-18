<template>
  <div id="goodlist">
    <SearchHead v-if="searchDate.keyword" :defaultKeyword="searchDate.keyword" />
    <classHead v-if="!searchDate.keyword" />
    <!-- searchbar -->
    <div class="goodList-con">
      <div class="list-sort">
        <div class="headnav">
          <v-touch
            tag="span"
            @tap="handleSort('SYNTHESIS')"
            :class="searchDate.sortField=='SYNTHESIS'?'active':''"
          >综合</v-touch>
        </div>
        <div class="headnav">
          <v-touch
            tag="span"
            @tap="handleSort('RELEASE')"
            :class="searchDate.sortField=='RELEASE'?'active':''"
          >新品</v-touch>
        </div>
        <div class="headnav">
          <v-touch
            tag="span"
            id="sort-price"
            @tap="handleSort('PRICE')"
            :class="searchDate.sortField=='PRICE'?'active':''"
          >
            价格
            <div class="updown">
              <i
                :id="searchDate.sortField=='PRICE'&&searchDate.sortOrder=='ASC'?'activeIcon':''"
                class="iconfont"
              >&#xe606;</i>
              <i
                :id="searchDate.sortField=='PRICE'&&searchDate.sortOrder=='DESC'?'activeIcon':''"
                class="iconfont"
              >&#xe607;</i>
            </div>
          </v-touch>
        </div>
        <div class="headnav">
          <span>筛选</span>
        </div>
      </div>
     
        <scroll ref="scroll"> 
          <div class="scroll-con">
          <goodList :list="searchlist" />
        </div>  
      </scroll>
      
    </div>
    <!-- serachList -->
  </div>
</template>

<script>
import css from "./index.scss";
import SearchHead from "@components/search/header";
import classHead from "@components/head";
import { searchListData } from "./index.js";
import goodList from "@components/goodList";
import {Toast} from "vant"
import Vue from 'vue';
Vue.use(Toast)
export default {
  name: "searchList",

  data() {
    return {
      searchlist: [],
      searchDate: {
        sortField: "SYNTHESIS",
        sortOrder: "DESC",
        limit: 20,
        offset: 0,
        keyword: "", //必要
        cateTitle: "", //必要   对应父类
        categoryId: "", //必要   对应link的type是category
        //值为  link.type.value
        listId: "", //必要   对应link的type是list
        //值为  link.type.value
        searchTitle: "", //必要   item.targetTitle
        subTitle: "",
        title: "", //必要  item.title
        //   sortField: "SYNTHESIS",
        //   sortOrder: "DESC",//拍序
        pageName: ""
      }
    };
  },

  components: {
    SearchHead,
    goodList,
    classHead
  },
  created() {
    console.log(this.$route.query);
    Object.assign(this.searchDate, this.$route.query);
  },

  watch: {
    $route:{
      handler:function(){
        console.log("路由改变了")
        this.searchlist=[];
        this.searchDate.offset=0;

        console.log(1111111,this.$route,"this.$route,"),
        Object.assign(this.searchDate, this.$route.query);

      }
    },
    searchDate: {
      async handler(value) {
        console.log(value);
       
        let data = await searchListData(this.searchDate);
        if( data.data.list.items.length==0){
          Toast("暂无更多数据")
        }
         this.$refs.scroll.handlefinishPullUp();
        this.searchlist =this.searchlist.concat( data.data.list.items);
        console.log(data, "searchListData");
      },
      // immediate: true,
      deep:true,
    }
  },
  methods: {
    handleMore(){
      console.log(1111)
       Toast.loading({
          message: '加载更多...',
           duration: 500,
          forbidClick: true,
          // loadingType: 'spinner'
        });
      this.searchDate.offset=this.searchDate.offset+this.searchDate.limit, 
      
      console.log(this.searchDate)
      
    },
    handleSort(sort) {
      console.log("sort改变了")
        this.searchlist=[];
        this.searchDate.offset=0;


      this.searchDate.sortField = sort;
      switch (sort) {
        case "RELEASE":
        case "SYNTHESIS":
          this.searchDate.sortOrder = "DESC";
          break;
        case "PRICE":
          if (this.searchDate.sortOrder == "DESC") {
            this.searchDate.sortOrder = "ASC";
          } else {
            this.searchDate.sortOrder = "DESC";
          }
          break;
      }
    }
  },
  mounted(){
    this.$refs.scroll.handlepullingUp(this.handleMore.bind(this))
  }
};
</script>

<style>
</style>