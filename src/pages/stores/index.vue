<template>
  <div id="store">
    <!-- 城市 -->
   
    <div class="store-city">
      <div class="store-city-title">
        <span
          v-for="(item,index) in cities"
          :key="'city'+index"
          v-text="item.cityId===activeCity?item.cityName:''"
        ></span>
        <span v-if="!activeCity&&activeCity!==0">距离最近</span>
        <i
          v-if="flagTri.flag==true"
          @click="hanldeTri"
          class="iconfont i-icon"
          v-html="flagTri.top"
        ></i>
        <i
          v-if="flagTri.flag==false"
          @click="hanldeTri"
          class="iconfont i-icon"
          v-html="flagTri.down"
        ></i>
      </div>
      <div class="select-eara" v-if="flagTri.flag==true">
        <div @click.stop="handleCity('')" :class="!activeCity&&activeCity!==0?'active':''">
          <i class="iconfont">&#xe655;</i>距离最近
        </div>
        <div
          v-for="(item,index) in cities "
          :key="'cityse'+index"
          :class="item.cityId===activeCity?'active':''"
          @click.stop="handleCity(item.cityId)"
        >{{item.cityName}}
        
        </div>
      </div>
    </div>
    <!-- 品牌 -->
    <div class="brands">
      <!-- 全部品牌 -->
      <div class="brands-col1 brand-item"
          
      >
        <v-touch  @tap=handleBrand() >
          <a  :class="brands.some(function(item){
          return item.id==activeBrand
          })?'':'active'"
         >
            <p    
             >全部品牌</p>
          </a>
        </v-touch>
      </div>

      <div
        v-for="(item,index) in 7"
        :key="'brands'+index"
        :class="index<3?'brands-col1 brand-item':'brand-item'"
      >
        <v-touch :class="(index+2)%4==0?'brands-row1':''"
         @tap="brands[index]?handleBrand(brands[index].id):''"
       
        >
          <a  
        :class="!brands[index]?'':brands[index].id===activeBrand?'active':''"

           >
            <p v-html="brands[index]?brands[index].name:''"></p>
          </a>
        </v-touch>
      </div>
      <br class="clear" />
    </div>

    <!--门店  -->
     <div v-if="stores.length===0" class="isnone">
      <p>暂无门店<br>
        换个城市或者品牌吧</p>
    </div>
    <div v-for="(item,index) in stores" :key="'store'+index">
      <div class="store-logo">
        <img :src="item.imgApp.url" />
      </div>
      <div class="store-info">
        <p>{{item.platformName}}</p>
        <p>{{item.storeName}}</p>
        <p>营业时间{{item.openTime}}</p>
        <p>{{item.address}}</p>
      </div>
      <div class="store-call">
        <p>
          <span>拨打门店电话</span>
          <span>微信联系门店</span>
        </p>
      </div>
      <div v-if="item.imgRecommendBig.length>0" class="store-suggest">
        <p>{{item.recommendTitle}}</p>
        <div class="store-suggest-imgcon">
          <img
            class="store-suggest-img"
            v-for="(prep,indexRe) in item.imgRecommendBig"
            :key="'imgRecommendBig'+indexRe"
            v-lazy="prep.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import css  from "./index.scss"
import { mapState } from "vuex";
export default {
  name: "store",
  components: {},
  data() {
    return {
      flagTri: {
        flag: false,
        top: "&#xe606;",
        down: "&#xe607;"
      }
    };
  },
  computed: {
    ...mapState({
      stores: state => state.storespage.stores,
      cities: state => state.storespage.cities,
      brands: state => state.storespage.brands,
      modules: state => state.storespage.modules,
      image: state => state.storespage.image,
      activeCity: state => state.storespage.apiData.cityId,
      activeBrand: state => state.storespage.apiData.brandId

    })
  },
  created() {
    //门店
    this.$store.dispatch("storespage/getstoresCity");
  },
  methods: {
    handleBrand(brandid){
      console.log(brandid,"brandid")
      this.$store.commit("storespage/handleBrandId",brandid);

    },
    handleCity(id) {
      console.log(id,"handleCity")
      this.$store.commit("storespage/handleCityId",id);
      this.flagTri.flag = false;
    },
    hanldeTri() {
      this.flagTri.flag = !this.flagTri.flag;
      console.log(this.flagTri.flag);
    }
  },
  watch:{
    activeCity:function(){
      console.log(this.activeCity)
      this.$store.dispatch("storespage/getstoresPage");
    },
    activeBrand:function(){
      this.$store.dispatch("storespage/getstoresPage");

    }
  }
};
</script>

<style lang="scss">
#store {
  img {
    width: 100%;
  }
  .store-logo {
    margin-bottom: 0.6rem;
  }
  .store-info {
    padding: 0 0.52rem;
    margin-bottom: 0.4rem;

    p {
      display: block;
    }
    & > p:nth-of-type(1) {
      height: 1rem;
      line-height: 1rem;
      font-size: 0.64rem;
      font-weight: 700;
    }
    & > p:nth-of-type(2) {
      height: 0.63rem;
      line-height: 0.63rem;
      font-size: 0.4rem;
      margin-bottom: 0.26rem;
      font-weight: 700;
    }
    & > p:nth-of-type(4),
    & > p:nth-of-type(3) {
      //   height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.24rem;
    }
  }
  .store-suggest {
    margin-bottom: 1.12rem;
    p {
      margin: 0 0.52rem 0.16rem 0.52rem;
      font-size: 0.4rem;
      font-weight: 700;
    }
    .store-suggest-imgcon {
      margin-left: 0.52rem;
      height: 2.12rem;
      overflow: hidden;

      img {
        float: left;
        width: 2.02rem;
        margin-right: 0.2rem;
      }
    }
  }
    .isnone{
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    p{
      width: 100%;
      text-align: center;
      font-size: .3rem;
      color:#444;
    }
   
  }
  .store-call {
    margin-bottom: 0.66rem;
    margin-left: 0.52rem;
    span {
      display: inline-block;
      color: #fff;
      background-color: #000;
      height: 0.72rem;
      width: 2.48rem;
      line-height: 0.72rem;
      text-align: center;
      border-radius: 0.05rem;
      margin-right: 0.33rem;
    }
    // span:nth-of-type(2){
    //   margin-left: ;
    // }
  }
}

.store-city {

  position: relative;
  background-color: #fff;
  z-index: 99;
  .store-city-title {
    padding-top: 0.4rem;
    font-weight: 700;
    background-color: #fff;

    margin-bottom: 0.66rem;
    padding-left: 0.3rem;
    text-align: center;
    span {
      font-size: 0.4rem;
    }
    .i-icon {
      display: inline-block;
      height: 100%;
      font-size: 0.2rem;
      margin-left: 0.22rem;
    }
  }
  .select-eara {
    .active {
      color: #dd4f14;
    }
    translate: all 3s;
    background-color: #fff;

    position: absolute;
    z-index: 99;
    padding-left: 0.48rem;
    width: 100%;
    top: 1.6rem;
    & > div {
      float: left;
      font-size: 0.4rem;
      width: 1.2rem;
      height: 0.5rem;
      margin-bottom: 0.52rem;
      font-weight: 700;
    }
    & > div:nth-of-type(1) {
      width: 100%;
      float: none;
      height: 0.5rem;
      margin-bottom: 0.52rem;
    }
  }
}

.brands {
  //   background-color: green;
  margin: 0 0.3rem 0.6rem 0.3rem;
  border: 0.04rem solid #000;

  .brand-item {
    padding: 0.04rem;
    float: left;
    width: 1.68rem;
    height: 1.22rem;
    border-top: 0.02rem solid #000;
    // display: flex;
    // align-items: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // justify-content: center;
      height: 100%;
      width: 100%;
      // display: block;
      margin-right: 0.08rem;
      // background-color: pink;
    }
    p {
      display: block;
      height: 100%;
      font-size: 0.28rem;
      font-weight: 700;
      text-align: center;
      // display: flex;
      // vertical-align: middle;
      // align-content: center;
      // align-items: center;
    }
    div {
      //  padding:.04rem 0  .04rem .04rem;
      padding: 0.04rem;
      // margin-right: .04rem;
      // background-color: red;
      height: 100%;
      width: 100%;

      border-right: 0.02rem solid #000;
    }
    .brands-row1 {
      border-right: 0;
    }
    
  }
  .brands-col1 {
    border-top: none;
    width: 1.68rem;
    height: 1.16rem;
    padding-bottom: 0.04rem;
  }
  .active{
    
      background: #000; 
      
    p{
    color:#fff;
     }
    }
}
</style>