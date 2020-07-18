<template>
  <div>
    <div class="cart-head">
      <van-checkbox @click="handChooseAll()" v-model="allChecked" checked-color="#000"></van-checkbox>
      <span class="allChoose">全选</span>
      <div class="free-mail">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABTxJREFUaAXNmkFoHUUcxl8TQSOGEG0K1goVeyhelBLooQcp2kIRSyFeLDk8gj705MVjoLf00EJLoZc2gZ5UYiHppYWKNAc9JYWCSIsmCAGjQjViiRFsq98vvAn//DO7O7tvE/3gy5ud+c/3/2Z3dnZ2yY5GPeiRzBHxsLhf3Cf2i70ieCAui/PiPfGW+IW4Kv5nwGBTnBJXxH9Kkj70bYpobRueVqZR8Q+xrOmseLTQRHvL0C3llrgkZhnptB5tcpArCTuSohqNFxQ3LQ4WxD9W+4KIkUByPC/ubvNl/XaJeZhT4wnxx7yg1LaDCsRM1tn9U23XxBFxQCwCMcTSh75ZuuQkd0cYVm9WilgSko+JfWJV0BeNrIGQGw+VQMeYcabJuMi0qgtoTYhox3KWHgSXLnbmWfqGxK3COxImhx8EXvCUBM5GbM4vqv61JIXOgshBLj8IPBVedZav2UhnBFlJtgvkig0Cb7lLbEsBfuRc0jJnfq/i0bksstLcFCfF0+IxsUtMATlj0wntKHgKcpnsALipUuc8l/eq+MhpWD3K34hviyngnvA3Nh6jT+xRNfhkrDYpOKCgX0XfP+/4c8U/kSDO6uR18LoBbKb83oa1ufCmUcyz4s+iT5JyfEb9ioAH/5zAK57X0VTJJxxbb80vnI305bJ/Kn4gfih+JvqpQL6/xRfFIuDF+2vaTmxrbQAjTnnCss/5yfVF56To8a4qbI5Q/sgHRo7x4q8CntfAy4i/21k9UvCSgoKR8Pt1TsdvI/EXc+JtE55CDn7x3MNNxJuUv6tTB6CujUv8Mbhlyr7I7vIVX5l4jKfjJhbPeG+cE+3IWAYHaKgZT0ovdrN/nJgHT36JxnvjhmgH8B2VW4Dz0rR5KGOI9+dU4M1q4L3xvaucobJG7JTWpGgTh/KVknlmnA7eG/dd5SdU1gS2Dr+IwbD9/Ur1T5XMgzercZ99Sfj0EbSWQqHDX9b/6+KuiM4F1b0h/hVpy6vy3npjj/LU9+S8RGzEMOnxgyreF7/0DYnHm7wxAD46PWcE6tg2j0jPn5zbqjsq/mZylS16bw+YQstOZbc7rnIY236/J6FOzOPDe1tmAPO0GPgg05Rc9DcnV/lOcu/sQO9tngHwrdKC7zadPsi42RYN79oEFct4wpvFmncez3Zpojxio/4nZTx5n2tbi042c9s5tuhmLhhga2pHl7qdDv1jv9wHr4q88HSKPglkbqcRb4p2AJTHxKp4Sx3DK+ZDlU9VFWr3w4v317Sa/TrgNc0GMWJe58qCbe7votWi/HpZoXY8HvzZxyueN4AXZZ90fENE2gHPAK/Dceq22WeZiOjhdRM4cyx/NnmZzypB8BkVWPetDuU3Q0CJ3yHF+ndpPOI1ipZqfeIV1cWerFGBdiWJw5TEQMrXB69HTnJ7P3jMRLdaZkXfiYeS34dkirQbWDkOiXuKAiPt5CKn94E3POaCm8ZPJYQQLHslchNlNJIjZh5PyYsKn7JXRX8GuKRMj60CnxJj0wYveCqFYUX7AXDMnGZ1Sj4bii0CWmj6Gzbkx0sl0DF2JRBmbR4TmetVQV80/DofjJO7svlgiksXuydCEpKzTxkRB8QiEEMsfbKMo03Owmmz6RVNnWLgEk+Lg7FGU8cUWBBJHkgz+/hAtsRdVOZgTm0nRD6E1QaWr5aIsXD26/5FmxyFS6ViKoOn4KgYHlR1DAItNDOfsGqrHWymmuKUGFv6igZGH/o2xU0bM9UlIfUeKBLjpYgPrYfF/eI+EVPhmxN7o2VxXqz1323+BX8mmOo2LCLwAAAAAElFTkSuQmCC"
        />
        <span>满99免邮</span>
      </div>
    </div>
    <div>
      <div class="goodCon" v-if="packs.length>0">
        <div v-for="(item,index) in packs " :key="index">
            <van-swipe-cell>
          <div class="goodCon-item" >

            <van-checkbox
              @click="handChooseOne(index)"
              checked-color="#000"
              v-model="packs[index].flag"
            ></van-checkbox>
            <router-link
              :to="'/detail/'+item.productId"
              tag="img"
              class="img"
              v-lazy="item.spv.image"
            />
            <div class="info">
              <p>{{item.spv.brand.name}}</p>
              <p>{{item.spv.name}}</p>
              <p>{{item.spv.spvDesc}}</p>
              <p class="price">￥{{item.spv.price}}</p>
            </div>
            <div class="num">x{{item.count}}</div>
          </div>
          <!-- 右边 -->
          <van-button 
          @click="deleteGood(index,item.id)"
          class="delete" slot="right" square type="danger" text="删除" />
          </van-swipe-cell>
        </div>
      </div>
    </div>
    <div class="cart-foot">
      <div class="total">
        <p class="totalPri">总计￥{{active?price:0}}</p>
        <p class="freePri" v-if="active">已优惠￥{{savedPrice}}</p>
      </div>
      <div class="account" :id="active?'canCount':''">结算({{active?totalNum:0}})</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, SwipeCell, Button,Toast } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Toast);
import "./index.scss";
import { getcartData, cartPreview,deleteCartData } from "./index.js";
export default {
  data() {
    return {
      allChecked: false,
      packs: [],
      list: [],
      active: false,
      savedPrice: 0,
      price: "",
      totalNum: ""
    };
  },
  methods: {
    handChooseAll() {
      this.allChecked = !this.allChecked;
      for (let i = 0; i < this.packs.length; i++) {
        this.packs[i].flag = this.allChecked;
      }
      this.packs = JSON.parse(JSON.stringify(this.packs));
    },
    handChooseOne(index) {
      this.packs[index].flag = !this.packs[index].flag;
      this.allChecked = this.packs.every(function(item, index) {
        return item.flag == true;
      });
      this.packs = JSON.parse(JSON.stringify(this.packs));
      console.log(this.packs, "this.packs11");
    },
    async toPreview() {
      let arr = [];
      for (let i = 0; i < this.packs.length; i++) {
        if (this.packs[i].flag) {
          arr.push({
            id: this.packs[i].id
          });
        }
      }
      console.log(arr, "arr");
      //发送 更改请求
      let data = await cartPreview(arr);
      console.log(data, "toPreview");
      this.savedPrice = data.data.savedPrice;
      this.price = data.data.price;
      this.totalNum = data.data.packs.reduce(function(value, item, index) {
        return value + item.count;
      }, 0);
      console.log(this.totalNum);
    },
    async deleteGood(index,id){

     let data= await deleteCartData(id);
     if(data.data===true){
       this.packs.splice(index,1);
       Toast("删除成功")
     }
    }
  },

  // props:["id"],
  async created() {
    let data = await getcartData();
    console.log(data, "cartdate");
    this.packs = data.data.groups[0].packs;
    this.packs.forEach(function(item, index, arr) {
      arr[index].flag = false;
    });
    // this.packs=JSON.parse(JSON.stringify(this.packs))

    console.log(this.packs);
    // this.list=this.packs.map(function(item,index,arr){
    //   return{
    //     id:item.id
    //   }
    // })
  },
  watch: {
    packs: {
      handler: function() {
        console.log("gaibianl");
        this.active = this.packs.some(function(item, index) {
          return item.flag == true;
        });
        console.log(this.active, "this.active");
        if (this.active) {
          this.toPreview();
        }
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>