<template>
  <div class="page">
    <div v-if="banner.length>0">
      <swiper id="banner" :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="banner-li" v-for="(item,index) in banner" :key="index">
          <router-link tag="img"
           :to="item.link.type=='list'?'/productList/'+item.link.value:item.link.type=='article'?'/article/'+item.link.value:''"
          :src="item.media.src"
          v-if="item.media.src!=''"
           ></router-link> 
        </swiper-slide>
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
    <!-- <ul>
        <li v-for="(item,index) in banner.items" :key="index">
          <img :src="item.media.src" />
        </li>
    </ul>-->

    <!-- 物流提醒 -->
    <!-- <div v-if="express" >
      <img id="sendNotice" v-lazy="express.data.image?express.data.image.src:''" />
    </div> -->

    <!-- 上新  送礼物以下   -->
    <div v-if="bottomImg.length>0">
      <router-link
        tag="img"
        v-for="(item,index) in bottomImg"
        :key="'222222'+index"
        v-lazy="item.data.image.src?item.data.image.src:''"
        :to="item.data.link.type=='list'?'/productList/'+item.data.link.value:item.data.link.type=='article'?'/article/'+item.data.link.value:''"
      ></router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default global options } */);
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        autoplay:
         {
           disableOnInteraction: false,
              }
              ,

        pagination: {
          el: ".swiper-pagination"
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        loop:true,
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      banner: state => state.homepage.banner,
      express: state => state.homepage.express,
      bottomImg: state => state.homepage.bottomImg
    })
  },
  created() {
    console.log(this);

    if (!localStorage.getItem("beast_HomeData")) {
      this.$store.dispatch("homepage/getHomePage");
    }
    console.log(this.banner.length);
  }
};
</script>

 <style lang="scss">
.page {
  img {
    width: 100%;
  }
}
#banner {
  width: 7.5rem;
  height: 10rem;
  margin-bottom: .2rem;
  // background-color: aqua;
  //   position:relative;
  //   ul {
  //     height: 10rem;
  overflow: hidden;
  //   display: flex;
  //   flex-wrap: nowrap;
  //   .banner-li {
  //     //   display: inline-block;
  //     height: 10rem;
  img {
    height: 10rem;
  }
  //   }
}
</style>>