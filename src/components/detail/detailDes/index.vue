<template>
  <div v-if="item" >
      <p class="detail-des-title" >
         <span >{{item.title}}</span> 
         <v-touch tag="i" v-if="flag" class="iconfont"
         @tap="flag=!flag"
         >&#xe615;  </v-touch>
         <v-touch @tap="flag=!flag"
         tag="i" v-if="!flag" class="iconfont">&#xe626;</v-touch>
      </p>
      <div  v-if="flag">
            <div v-if="item.modules">
                <div v-for="(con,num) in item.modules"
                :key="'item.modules'+num" >
                <div  class="detail-des-text"  v-if="con.type='TEXT'">
                    {{con.text}}
                </div>
                <div class="detail-des-img" v-if="con.type='IMAGE'">
                    <img :src="con.image?con.image.src:''" >
                </div>

                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
props:["item"],
data(){
    return{
        flag:false
    }
}
}
</script>

<style>

</style>