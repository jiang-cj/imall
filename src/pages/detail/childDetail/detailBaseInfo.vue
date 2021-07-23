<template>
<div v-if="Object.keys(goods).length !==0 "><!--//获取对象所有的key，判断该对象是否为空对象-->
  <div class="title">{{goods.title}}</div>
  <div class="price">
    <span class="newprice">{{goods.newPrice}}</span>
    <span class="oldprice">{{goods.oldPrice}}</span>
    <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
  </div>
  <div class="sell">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span >{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <div class="service">
    <span v-for="index in goods.services.length-1" :key="index" class="itemservice">
      <img :src="goods.services[index-1].icon">
      <span>{{goods.services[index-1].name}}</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.title{
  margin-top: 10px;
  font-weight:bold;
  color: black;
  margin:5px 10px;
}
.newprice{
  font-size: 20px;
  color: var(--color-high-text);
  margin-left: 5px;
}
.oldprice{
  color: #999999;
  font-size: 10px;
  text-decoration: line-through;
  margin-left: 5px;
}

.discount{
  background-color: var(--color-high-text);
  padding:1px 5px;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  position: relative;
  top: -6px;
}
.sell{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-bottom: 5px;
  border-bottom: .5px solid rgba(100,100,100,.1);
  color: #999999;
  margin: 10px;
}
.service{
  display: flex;
  justify-content: space-between;
  margin: 6px;
  line-height: 30px;
  padding-bottom: 10px;
  border-bottom: 5px solid #f2f5f8;
}

.itemservice img{
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;
}
.itemservice span{
  font-size: 11px;
  color: #333;
}
</style>
