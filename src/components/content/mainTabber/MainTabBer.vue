<template>
  <tab-ber>
    <tab-ber-item path="/Home">
      <img slot="item-icon" src="../../../assets/img/tabBer/home.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabBer/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-ber-item>
    <tab-ber-item path="/Category">
      <img slot="item-icon" src="../../../assets/img/tabBer/category.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabBer/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-ber-item>
    <tab-ber-item path="/Cart">
      <img slot="item-icon" src="../../../assets/img/tabBer/cart.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabBer/cart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-ber-item>
    <tab-ber-item path="/Profile">
      <img slot="item-icon" src="../../../assets/img/tabBer/profile.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabBer/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-ber-item>
  </tab-ber>
</template>

<script>
import tabBerItem from "../../common/tabBer/tabBerItem";
import tabBer from "../../common/tabBer/tabBer";
export default {
  name: "MainTabBer",
  components:{
    tabBerItem,
    tabBer
  }
}
</script>

<style scoped>

</style>
