<template>
  <div>
      <!-- productList -->
      <!-- {{productList}} -->
      <articleHead/>
      <div  id="goodList-con">
      <goodList :list="productList" />
      </div>
  </div>
</template>

<script>
import goodList from "@components/goodList"
import articleHead from "@components/head";

import {productListData} from "./index.js"
export default {
    components:{
        goodList,
        articleHead
    },
    data(){
        return{
            productList:[],
            searchDate:{
                limit: 20,
                offset: 0,              
                title:'',
                sortField: "SYNTHESIS",
                sortOrder: "DESC",
                pageName: undefined,
            }
        }
    },
    props:["listId"],
   async created(){
        let {limit,offset,title,sortField,sortOrder,pageName}=this.searchDate;
       let data =await productListData({
           limit,
           offset,
           title,
           sortField,
           sortOrder,
           pageName,
           listId:this.listId,
       })
       console.log(data,"productListData")
       this.productList=data.data.list.items;
    }

}
</script>

<style>
#goodList-con{
   margin-top: .92rem;
}
</style>