<template>
    <div id="classifyBot">
    <div id="category">
        <ul>
            <v-touch tag="li"  v-for="(item,index) in subcategory" 
            :key="'subcategory'+index" 
            :class="index==categoryIndex?'active category-li':'category-li'"
            @tap="handleToggleIndex(index)"
            ><span>{{item.data.title}}</span></v-touch>
        </ul>
    </div>
    <div id="category-right">
        <ul>
            <li class="subcategory-li" v-for="(item,index) in subcategory[categoryIndex].data.subCategory" :key="'subcategoryActive'+index" >
               <v-touch @tap="handlePush(item)">
                <span>{{item.title}}</span>
                <img :src="item.image.src"></v-touch>
            </li>
        </ul>
    </div>

    </div>
    
    
</template>

<script>
export default {
    props:{
        subcategory:{
         type:Array,
        //   default:"默认值"
         required:true
        }
          
    },
    data(){
        return{
        categoryIndex:0,
         searchDate:{  
            // sortField: "SYNTHESIS",
            // sortOrder: "DESC",   
            // limit: 20,
            // offset: 0,
            // keyword:'',//必要
            cateTitle:"",//必要   对应父类
            categoryId: '',//必要   对应link的type是category 
            //值为  link.type.value    
            listId: '',//必要   对应link的type是list 
            //值为  link.type.value  
            searchTitle:"",//必要   item.targetTitle
            subTitle:"",
            title:'',//必要  item.title
          //   sortField: "SYNTHESIS",
          //   sortOrder: "DESC",//拍序
            pageName:"",
            
      }
        }
       
    },
    created(){
     this.searchDate.cateTitle=this.subcategory[this.categoryIndex].data.title; 

    },
    methods:{
        handleToggleIndex(index){
           this.categoryIndex=index;
           this.searchDate.cateTitle=this.subcategory[index].data.title; 
        },
        handlePush(item){
            console.log(item.link.type)
             this.searchDate.searchTitle=item.targetTitle;
             this.searchDate.title=item.title;
             this.searchDate.pageName=item.title;
            switch(item.link.type){
                case"list":
                this.searchDate.categoryId='';
                this.searchDate.listId=item.link.value;
                break;
               case"deeplink":
                var obj=this.urlToObj(item.link.value);
                // this.searchDate.
                Object.assign(this.searchDate,obj)
                break;
                case"category":
                this.searchDate.categoryId=item.link.value;
                this.searchDate.listId='';
                break;
                default:
               
            }
            console.log(this.searchDate)
            
      this.$router.push("/searchList/?"+this.myParams(this.searchDate));

        },
        myParams(obj) {
        return Object.keys(obj).map(function(item) {
        return item + '=' + obj[item];
        }).join('&');
        },
        urlToObj(str){
            var obj = {};
            var arr1 = str.split("?");
            var arr2 = arr1[1].split("&");
            for(var i=0 ; i < arr2.length; i++){
            var res = arr2[i].split("=");
            obj[res[0]] = res[1];
            }
            return obj;
            }

    }
}
</script>

<style lang="scss">
#classifyBot{
    display: flex;
    
}
    #category{
        width: 2.3rem;
        padding-left: .4rem;
        padding-right: .3rem;
        // background-color: aqua;
        .category-li{
            height: .92rem;
            font-size: .32rem;
            font-weight: 700;
            line-height: .92rem;
            vertical-align: middle
          }
          .active{
              span{
                  white-space: nowrap;
              font-size: .44rem;
              font-weight: 800;
              border-bottom:.06rem solid #000
              }
              
          }

    }
    #category-right{
        width: 5.2rem;
        height: 11.16rem;
        overflow: auto;


    .subcategory-li{
        display: inline-block;
        width: 2.58rem;
        position: relative;
        span{
            position: absolute;
            padding-left: .28rem;
            top: .2rem;
            color: #fff;
        }
        img{
            width:100%
        }

        }
    }
    
</style>