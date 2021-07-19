<template>
  <div id = "tab-ber">
    <slot></slot>
  </div>


</template>

<script>
export default {
  name: "tabBer"
}
</script>

<style scoped>
#tab-ber{
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  position: fixed;
  bottom: 0;
  left:0;
  right:0;

  box-shadow: 0 -3px 1px rgba(100,100,100,.08);

}

</style>
