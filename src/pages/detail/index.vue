<template>
  <div id="detail" class=:page>
    <router-link tag="div" to="/home" class="iconfont goto">&#xe638;</router-link>

    <swiper id="detailBanner" :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        class="banner-li"
        v-for="(item,index) in detailBanner"
        :key="'detailBanner'+index"
      >
        <img v-lazy="item" />
      </swiper-slide>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>

    <div class="detail-info">
      <div
        class="brand"
        v-if="datailDataTop.brand"
      >{{datailDataTop.brand?datailDataTop.brand.name:''}}</div>
      <div class="name" v-if="datailDataTop.name">{{datailDataTop.name?datailDataTop.name:''}}</div>
      <div class="price" v-if="datailDataTop.price">￥{{datailDataTop.price?datailDataTop.price:''}}</div>
      <div
        class="warn"
        v-if="!datailDataTop.raw?false:datailDataTop.raw.stockWarn?true:false"
      >{{datailDataTop.raw.stockWarn?datailDataTop.raw.stockWarn:''}}</div>
    </div>
    <div class="goodLabels" v-if="datailDataTop.labels">
      <div
        class="goodLabels-item"
        v-for="(item,index) in datailDataTop.labels"
        :key="'labels'+index"
      >
        <span class="labelType">{{item.type}}</span>
        <span class="labelSummary">{{item.summary}}</span>
        <i class="iconfont">&#xe611;</i>
      </div>
    </div>

    <!-- middle -->
    <div class="middle" v-if="middledata.length>0">
      <div class="detail-des-box" v-for="(item,index) in middledata" :key="'middledata'+index">
        <!-- 商品详情 -->
        <div class="detail-des-item"  v-if="index==0">
          <p class="detail-des-tab">商品详情</p>
          <div v-for="(con,num) in item.modules" :key="'item.modules'+num">
            <div class="detail-des-text" v-if="con.type='TEXT'">{{con.text}}</div>
            <div class="detail-des-img" v-if="con.type='IMAGE'">
              <img :src="con.image?con.image.src:''" />
            </div>
          </div>
        </div>
        <detailDes class="detail-des-item" v-if="index!==0" :item="item" />
      </div>
    </div>
    <Addcar :variant="variant"/>
    <!-- <Addcar/> -->
  </div>
</template>

<script>
import Vue from "vue";
import "./index.scss";
import detailDes from "@components/detail/detailDes";
import { detailData, detailMiddle } from "./index.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Addcar from "@components/detail/addCar/index.vue"
import { swiper, swiperSlide } from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default global options } */);
export default {
  name:"detail",
  props: ["proId"],
  components: {
    swiper,
    swiperSlide,
    detailDes,
    Addcar
  },
  data() {
    return {
      variant:{},
      detailBanner: [],
      datailDataTop: "",
      middledata: [],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },

  async created() {
    // let {limit,offset,title,sortField,sortOrder,pageName}=this.searchDate;
    let topdata = await detailData(this.proId);
    let middledata = await detailMiddle(this.proId);
    console.log(topdata, middledata, "detailDatatop  middledata");
    this.detailBanner = topdata.data.images;
    this.datailDataTop = topdata.data;
    this.middledata = middledata.data.details;
    this.variant=topdata.data.variant;
    console.log(this.variant,"this.variant")
    
  }
};
</script>

<style>
</style>