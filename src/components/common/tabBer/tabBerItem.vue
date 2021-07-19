<template>
  <div class = "tab-ber-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name = "item-icon"></slot>
    </div>
    <div v-else>
      <slot name = "item-icon-active"></slot>
    </div>
    <div :style="showColor">
      <slot name = "item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "tabBerItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#fe6280',
    }
  },
  data(){
    return{
      //isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    showColor(){
      return this.isActive?{color:this.activeColor }:{ }
    }

  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style scoped>
.tab-ber-item{
  flex:1;
  text-align: center;
  font-size: 14px;
}
.tab-ber-item img{
  width:24px;
  height: 24px;
}
.active{
  color:#fd7690;
}
</style>
