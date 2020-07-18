<template>
        <div class="product-list" v-if="list.length>0">
        <router-link tag="div"
        :to="'/detail/'+item.id"
        v-for="(item,index) in list"
        :key="item.id"
        :class="index%2==1?'product-item no-margin':'product-item' "
        >
          <img v-lazy=item.featureImage>
          <div class="product-info" >
            <p class="activityDesc">{{item.activityDesc?item.activityDesc:''}}</p>
            <p>{{item.brand.name?item.brand.name:''}}</p>
            <p>{{item.name?item.name:''}}</p>
            <div class="product-price">
              <span v-if="item.price" class="price">￥{{item.price}}</span>
              <span v-if="item.rawPrice>item.price" class="rawPrice">￥{{item.rawPrice}}</span>
              <span v-if="item.stockWarn"  class="stockWarn">{{item.stockWarn}}</span>
            </div>
          </div>
        </router-link>
      </div>
</template>

<script>
export default {
    props:["list"]

}
</script >

<style lang="scss">

.product-list{
    // padding-top: .92rem;
    font-size: .24rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
.product-item{
    width: 3.73rem;
    height:5.22rem;
    margin-bottom: .68rem;
    margin-right: .02rem;
    img{
      width: 100%;
      height: 3.9rem;
      margin-bottom: .14rem;  
    }
    .product-info{
        width: 100%;
        overflow: hidden;
        padding-left: .3rem;
        .activityDesc{
           color: #c44747; 
        }
        p{
            // display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        span{
            display: inline-block;
        }
        .product-price{
            padding-top: .12rem;
            .rawPrice{
                margin-left: .08rem;
            } 
            .price{
                font-size: .3rem;
                font-weight: 700;
            }
            .stockWarn{
               color: #c44747; 
               margin-left: .12rem;
    
            }
        }
        

    }
}
.no-margin{
    margin-right: 0;
}


}




</style>