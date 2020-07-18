<template>
  <div>
    <SearchHead
      @handlehistory="setHistory"
      :defaultKeyword="$store.state.classifypage.defaultKeyword"
    />
    <div id="hisAndHot">
    <div class="clear_search" v-if="historyList.length>0?true:false">
      <div class="history-con">
        <span>搜索历史</span>
        <v-touch tag="i" class="iconfont" @tap="handleClearHistory">&#xe61d;</v-touch>
      </div>
      <div>
        <ul>
          <v-touch
            v-for="(item,index) in historyList"
            :key="index"
            @tap="handleSearchList(item)"
            tag="li"
          >{{item}}</v-touch>
        </ul>
      </div>
    </div>
    <div class="hot_search">
      <div>热门搜索</div>
      <div>
        <ul>
          <v-touch
            v-for="(item,index) in hotSearchList"
            :key="index"
            tag="li"
            @tap="handleSearchList(item.name)"
          >{{item.name}}</v-touch>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import css from "./index.scss"
import{mapState} from "vuex"
import SearchHead from "@components/search/header";
export default {
  data() {
    return {
      historyList: JSON.parse(localStorage.getItem("beast_searchHistory")) || [], 
      searchdata:{
        keyword:''
      }
     
    };
  },
  components: {
    SearchHead
  },
  computed:{
    ...mapState({
       hotSearchList: state=>state.classifypage.hotKeysList,
    })

  },
  created(){
    console.log(this.hotSearchList,"this.hotSearchList")

    // if (!localStorage.getItem("searchhotList")) {
      if(this.hotSearchList.length==0){
      this.$store.dispatch("classifypage/getSuggestSearchWord")
      }
    // }
  },
  methods: {
    handleSearchList(item){ 
      this.searchdata.keyword=item;
      this.$router.push("/searchList/?"+this.myParams(this.searchdata));
      this.setHistory(item);
    },
    myParams(obj) {
    return Object.keys(obj).map(function(item) {
    return item + '=' + obj[item];
    }).join('&');
    },
    setHistory(item) {
      if (!localStorage.getItem("beast_searchHistory")) {
        this.historyList.push(item);
      } else {
        var arr = JSON.parse(localStorage.getItem("beast_searchHistory"));
        var flag = arr.includes(item);
        if (!flag) {
          arr.push(item);
          this.historyList = arr;
        }
      }
      localStorage.setItem("beast_searchHistory", JSON.stringify(this.historyList));
    },
    handleClearHistory(){
      console.log(111)
        this.historyList = [];
        localStorage.removeItem("beast_searchHistory")
    }
  }
};
</script>

<style>
</style>