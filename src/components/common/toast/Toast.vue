<template>
<div>
  <div class="toa" v-show="showit">
    {{message}}
  </div>
</div>
</template>

<script>
export default {
  name: "Toast",
  props:{
    message:{
      type:String,
      default(){
        return ''
      }
    },
    showit:{
      type:Boolean,
      default() {
        return false
      }
    }
  },
}
</script>

<style scoped>
.toa{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%,-50%);
  color: white;
  background-color: rgba(0,0,0,.75);
}
</style>
