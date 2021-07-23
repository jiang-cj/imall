<template>
<div>
  <nav-bar class="narbar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <CartList></CartList>
  <Cart-button-bar></Cart-button-bar>
</div>
</template>

<script>
import navBar from 'components/common/navBar/NavBar'
import CartList from "./childComps/CartList";
import CartButtonBar from "./childComps/CartButtonBar";
import {mapGetters} from 'vuex'//辅助函数
export default {
  name: "cart",
  components:{
    navBar,
    CartList,
    CartButtonBar
  },
  computed:{
    ...mapGetters(['cartLength'])
    }

}
</script>

<style scoped>
.navbar{
  background-color: var(--color-high-text);
  color: white;
}
</style>
