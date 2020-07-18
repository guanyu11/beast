<template>
<div>
  <div class="search_header">
 
    <div class="search_content">
      <i class="iconfont">&#xe639;</i>
      <input type="text"
       v-model="searchKeyword" 
      :placeholder="defaultKeyword"/>
    </div>
    <v-touch tag="div" class="btn-back" 
    @tap="goback"
    >取消</v-touch>

    
  </div>
    <!-- 搜索关键词列表 -->

  <div class="searchListKeyWord" v-if="searchKeywordList.length>0" >
        <div 
            v-for="(item,index) in searchKeywordList" 
            :key="index"
            @click.stop="handleSearchList($event,item.name)"
           
            >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
// import vue  from "vue"
import css from "./header.scss"
import {searchKeywordData}   from  "./index.js"
import {throttle} from "@utils/utils.js"
export default {
  data(){
    return{
      searchKeywordList:[],
      searchKeyword:"",
      searchdata:{
          keyword:''
      }
    }
  },
  props:["defaultKeyword"],
  methods:{
    handleSearchList($event,item){
        this.searchdata.keyword=item,
        console.log($event)
    //    $event.preventDefault();
    //    $event.stopPropagation();
    //   this.$emit("handlehistory",item);
    //   this.$router.push("/searchList/"+item);
      this.$router.push("/searchList/?"+this.myParams(this.searchdata));

      this.searchKeywordList.splice(0,this.searchKeywordList.length)
    },
    goback(){
    this.$router.back()
    },
    myParams(obj) {
    return Object.keys(obj).map(function(item) {
    return item + '=' + obj[item];
    }).join('&');
    },
  },
  watch:{
      searchKeyword(value){
          console.log(value)
          throttle(async()=>{
              console.log(value)
              let data= await searchKeywordData(value);
              console.log(data,"searchKeywordData")
              this.searchKeywordList=data.data;
          })
      }
  }

}
</script>

<style>

</style>