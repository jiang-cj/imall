<template>
<div class="tab-control">
  <div v-for="(item,index) in title" :key="index" class="tab-control-item" :class="{active:index===cur}" @click="pdpd(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      cur:0
    }
  },
  methods:{
    pdpd(index){
      this.cur=index
      this.$emit("tabclick",index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  width: 100%;
  font-size: 15px;
  background-color: white;
}
.tab-control-item{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom:3px solid var(--color-tint);
}

</style>
