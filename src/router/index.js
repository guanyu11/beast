import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import mine from './mine'
import find from './find'
import classify from './classify'
import stores from './stores'
import search from './search'
import searchList from './searchList'
import productList from './productList'
import article from './article'
import detail from './detail'
import login from './login'
import passwordLogin from './passwordLogin'
import cart from './cart'
import store from "@store/index.js"
passwordLogin
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  home,
  mine,
  find,
  classify,
  stores,
  search,
  searchList,
  productList,
  article,
  detail,
  login,
  passwordLogin,
  cart
]

const router = new VueRouter({
  routes
})

document.cookie="_CA=5f38ccc2-2369-4e36-9003-3fc874b482f4,_bid=249cb686-3147-4fea-ac5f-d842ec449273,_auth=b24f0666-3f7f-49d1-b091-dcf402af037a,_b_m_c=M204812251"

router.beforeEach((to,from,next)=>{
  console.log(to.meta.required,"to.meta.required")
  if(to.meta.required){
    if(store.state.beast_id){
      console.log("store.state.beast_id 存在")

      next()
    }else{
      console.log("store.state.beast_id 不存在")
      next({
        name:'passwordLogin',
        params:{
          to:to.path
        }
      })
    }
  }else{
    next()
    console.log("to.meta.required 为false")

  }
})





export default router
