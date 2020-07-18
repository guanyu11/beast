<template>
  <div id="story">
    <scroll>
    <div class="story-tab">
      <v-touch 
        v-for="(item,index) in tabdata"
        :key="'tabdata'+index"
        @tap="hanldeTabIndex(index)"
        :class="index==tabIndex?'active':''"
      >{{item.title}}</v-touch>
    

    </div>
  </scroll>
    <div class="story-con">
        <div  class="story-item" v-for="(item,index) in stories"  
        :key="'stories'+index">
        <img v-lazy="item.titleImage.src"> 
        <div> {{item.title}}</div>
       </div>
    </div>

    
  </div>
</template>

<script>
import axios from "axios";
import css from "./index.scss";
import { mapState,mapActions, mapMutations} from 'vuex';
export default {
  name: "story",
  data(){
    return{
     
    }
  },
  computed:{
    ...mapState({
      tabdata:state=>state.findpage.tabdata,
      tabIndex:state=>state.findpage.tabIndex,
      stories:state=>state.findpage.stories,
      shopId:state=>state.findpage.searchData.shopId,
    })
  },
  watch:{
    shopId:function(){
      console.log(this)
      this.$store.dispatch("findpage/getStoryPage")
    }
    
      
    
  },
  methods: {
    ...mapMutations({
      hanldeTabIndex:"findpage/hanldeTabIndex"
    })
    
  },

  created() {
    this.$store.dispatch("findpage/getStoryTopbar");

  },
};
</script>

<style lang="">
</style>