<template>
<div class="navbar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>

</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>
<style>
.navbar{
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.08);
}
.left{
  width:90px;
}
.right{
  width:90px;
}
.center{
  flex: 1;

}
</style>
<style scoped>

</style>
