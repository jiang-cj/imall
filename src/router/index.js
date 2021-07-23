import Vue from 'vue'
import Router from 'vue-router'

const  Home=()=>import('../pages/home/home')
const Category =()=>import('../pages/category/category')
const  Cart =()=>import('../pages/cart/cart')
const  Profile = ()=>import('../pages/profile/profile')
const Detail = ()=>import('../pages/detail/detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/Home',
    },
    {
      path:'/Home',
      component:Home,
    },
    {
      path:'/Cart',
      component:Cart,
    },
    {
      path:'/Category',
      component:Category,
    },
    {
      path:'/Profile',
      component:Profile,
    },
    {
      path:'/Detail/:iid',
      component:Detail,
    }

  ],
  mode:"history"
})
