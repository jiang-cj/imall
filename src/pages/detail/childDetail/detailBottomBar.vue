<template>
<div class="bottom-bar">
  <div class="left">
    <div class="left-k">
      <i class="icon kefu" ></i>
      <span>客服</span>
    </div>
    <div class="left-d">
      <i class="icon dianpu"></i>
      <span>店铺</span>
    </div>
    <div class="left-s">
      <i class="icon shoucang"></i>
      <span>收藏</span>
    </div>
  </div>
  <div class="right">
    <div class="shop" @click="addToCart()">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods:{
    addToCart(){
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  background-color: white;
  display: flex;
  text-align: center;

}
.bottom-bar>div{
  flex: 1;
}
.left{
  display: flex;
  font-size: 14px;
}
.left>div{
  flex: 1;
}
.icon{
  display: block;
  width: 20px;
  height: 20px;
  margin: 5px auto 5px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.kefu{
  background-position: 0 -48px;
}
.dianpu{
  background-position: 0 47px;
}
.shoucang{
  background-position: 0 137px;
}
.right{
  display: flex;
}
.right>div{
  flex: 1;
  line-height: 50px;
  font-size: 14px;
}
.shop{
  width: 50%;
  background-color: yellow;
  color: #111111;
}
.buy{
  width: 50%;
  background-color: var(--color-high-text);
  color: white;
}
</style>
