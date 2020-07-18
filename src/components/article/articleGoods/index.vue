<template>
  <div class="articleGood">
      <goodLists  :list="goodList"/>         
  </div>
</template>

<script>
import  goodLists from "@components/goodList"
import {articleGoods} from "@pages/article/index.js"
export default {
    data(){
        return{
            goodList:[]
        }
    },
    components:{
        goodLists,
    },
    props:["ids"],
    async created(){
        let data= await articleGoods(this.ids);
        console.log(data,"articleGoods");
         this.goodList = data.data;
    }
     

}
</script>

<style>

</style>