<template>
  <div class="GoodsList">
    <good-list-item v-for="(item,index) in goods" :good-item="item" :key="index"></good-list-item>
  </div>
</template>

<script>
import goodListItem from 'components/content/goodsItem/GoodListItem'
export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    goodListItem
  }
}
</script>

<style scoped>
.GoodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;


}
</style>
