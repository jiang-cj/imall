<template>
<div class="goodListItem" @click="itemClick">
  <img :src="showImage" alt="" @load="ImageLoad">
  <div class="goodsInfo">
    <p>{{goodItem.title}}</p>
    <div class="pandc">
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    goodItem:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  computed:{
    showImage(){
      return this.goodItem.image||this.goodItem.show.img
    }
  },
  methods:{
    ImageLoad(){
      //console.log("ImageLoad");
      this.$bus.$emit('imageLoad')//发送数据总线
    },
    itemClick() {
      // console.log('跳转至详情页');
      this.$router.push('/Detail/'+this.goodItem.iid)
    }
  }
}
</script>

<style scoped>
.goodListItem{
  padding-bottom: 40px;
  position: relative;
  width: 49%;
}
.goodListItem img{
  width: 100%;
  border-radius: 5px;
}
.goodsInfo{
  font-size: 12px;
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price{
  color: var(--color-high-text);
  margin-right: 30px;
}
.collect{
  position: relative;
}
.collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
