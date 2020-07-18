<template>
  <div class="page">
    <Cla_head/>
    <LeftList :subcategory="$store.state.classifypage.classfyData" />
  <router-view></router-view>
   
  </div>
</template>

<script>
import Cla_head from "@components/classify/cla_head"
import LeftList from "@components/classify/leftList"
import {mapState} from "vuex"
export default {
  components:{
    Cla_head,
    LeftList
  },
  created() {
    console.log(this);
    if(!localStorage.getItem("classifyPage")){
    this.$store.dispatch("classifypage/getClassifyPage");
    }
    this.$store.dispatch("classifypage/getSuggestSearchWord")
    // console.log(this.$store.state.classifypage.classfyData)
  },
  //  computed: {
  //   ...mapState({
  //     classfyData: state => state.classifypage.classfyData,
  //     // express: state => state.homepage.express,
  //     // bottomImg: state => state.homepage.bottomImg,
  //   })
  // },

}
</script>

<style lang="scss">


  


</style>