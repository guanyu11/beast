<template>
  <div id="app">
    
    <router-view/>
    <TabBar  v-if="$route.meta.flag"/>
  </div>
</template>
<script>
import TabBar from '@components/tabbar'

export default {
  components:{
    TabBar,
  }
}
</script>


<style>
.page{
position:absolute;
left:0;
top:0;
bottom:0;
right:0;
padding-bottom: 1rem;
}
</style>
