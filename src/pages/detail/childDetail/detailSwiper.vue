<template>
<div>
  <swiper class="lunbo">
    <swiper-item v-for="(item,index) in topImage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "detailSwiper",
  props:{
    topImage:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.lunbo{
  height: 250px;
  overflow: hidden;
}
</style>
