<template>
<div>
  <nav-bar>
    <div slot="left" class="img1" @click="backHome">
      <img src="~assets/img/common/back.svg" alt="" >
    </div>
    <div slot="center" class="detail">
      <div v-for="(item,index) in title" :key="index"
           class="itemdetail" :class="{active:index === currentItem}" @click="itemClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import navBar from 'components/common/navBar/NavBar'
export default {
  name: "detailNavBar",
  components:{
    navBar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentItem:0
    }
  },
  methods:{
    itemClick(index){
      this.currentItem=index
      this.$emit('topClick',index)
    },
    backHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail{
  display: flex;
  font-size: 14px;
}
.itemdetail{
  flex: 1;
  justify-content: space-around;
}
.img1 img{
  margin-top: 10px;
}
.active{
  color: var(--color-high-text);
}
</style>
