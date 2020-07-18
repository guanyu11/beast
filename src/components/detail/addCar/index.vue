<template>
  <div>
    <div id="addcar" v-if="true">
      <router-link tag="i" to="/cart" class="iconfont">&#xe661;</router-link>
      <span class="add" @click.stop="toAddCar">加入购物车</span>
      <span>立即购买</span>
    </div>

    <div id="chooseSpv">
      <van-popup
        v-model="chooseDisplay"
        duration
        position="bottom"
        :style="{maxHeight: '10rem' }"
        bind:close="onClose"
        closeable
      >
        <div>
          <div class="spv-info">
            <img :src="spvs[activeIndex].image" />
            <div>
              <p>{{spvs[activeIndex].brand.name}}</p>
              <p>{{spvs[activeIndex].name}}</p>
              <p>￥{{spvs[activeIndex].price}}</p>
            </div>
          </div>

          <div class="content">
            <p>{{dimensions.name}}</p>
            <div>
              <v-touch
                tag="span"
                v-for="(item,index) in dimensions.choices"
                :key="index"
                :class="spvs[index].left==0?'forbid':''"
                @tap="chooseSpv(index)"
                :id="activeIndex==index?'activeSpv':''"
              >{{item}}</v-touch>
            </div>
          </div>
          <div class="num">
            <span>数量</span>
            <van-stepper v-model="number" />
          </div>
          <v-touch class="okAdd" @tap="postGoodMsg">确定</v-touch>
        </div>
      </van-popup>
      <div id="chooseDisplay"></div>
    </div>
  </div>
</template>

<script>
import "./index.scss";
import Vue from "vue";
import { addgoodData } from "./index.js";
import { Popup, Stepper,Dialog,Toast } from "vant";
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Dialog);
Vue.use(Toast);

export default {
  name:"addcar",
  data() {
    return {
      activeIndex: 0,
      activeId: "",
      dimensions: [],
      spvs: [],
      chooseDisplay: false,
      HasChoices: false,
      number: 1
    };
  },
  // props: {
  //   variant:{
  //     type:Object,
  //     required:false,
  //   }
  // },
  props:["variant"],
  methods: {
    // onClose() {

    // },
    chooseSpv(index) {
      this.activeIndex = index;
      console.log(index);
    },
    created() {
      // this.variant=JSON.parse(this.variant)
      // console.log(this.variant,"addcar variant")
      console.log("addcar ")
    },
    toAddCar() {
      if (this.$store.state.beast_id || localStorage.getItem("beast_id")) {
        if (this.HasChoices) {
          this.chooseDisplay = true;
        } else {
          this.postGoodMsg();
        }
        console.log(this.HasChoices, this.chooseDisplay);
      }else{
        Dialog.confirm({
        title: '',
        message: '您尚未登录，请前往登录'
      }).then(() => {
        this.$router.push("/passwordLogin")
        // on confirm
      }).catch(() => {
        // on cancel
      });
      }
    },
    getcontainer() {
      return document.querySelector("#chooseDisplay");
    },

    async postGoodMsg() {
      console.log(this.activeIndex, this.activeId, this.number);
      console.log("this.activeIndex,this.activeId,this.number");

      let arr = [
        {
          spvId: this.activeId,
          count: this.number,
          source: "RAW"
        }
      ];
      let data = await addgoodData(arr);
      console.log(data);
      if (data.code == 201) {
        this.chooseDisplay = false;
        // alert("加购成功");
        Toast('加购成功');
      }
    }
  },

  watch: {
    variant: {
      handler: function() {
        // console.log("addcar");
        this.dimensions = this.variant.dimensions[0] || [];
        this.spvs = this.variant.spvs;
        this.activeId = this.spvs[this.activeIndex].id;

        // console.log(this.dimensions, this.spvs, "this.spvs");
      },
      immediate: true
    },
    dimensions: {
      handler: function() {
        if (this.dimensions.choices) {
          this.HasChoices = true;
        }
        // console.log("341")
      },
      immediate: true
    },
    activeIndex: {
      handler: function() {
        console.log("active");
        if (this.spvs) {
          this.activeId = this.spvs[this.activeIndex].id;
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
</style>