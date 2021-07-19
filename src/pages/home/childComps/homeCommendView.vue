<template>
<div class="homeCommendView">
  <div v-for="(item,index) in recommend" :key="index" >
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "homeCommendView",
  props:{
    recommend:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.homeCommendView{
  display: flex;
  text-align: center;
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 12px;
  padding:10px 0 20px 0;
  border-bottom:8px solid #eee ;
}
.homeCommendView a{
  flex: 1;

}
.homeCommendView a img{
  width:80%;
  padding-bottom: 5px;
}
</style>
