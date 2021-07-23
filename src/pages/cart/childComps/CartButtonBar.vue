<template>
<div class="bottom-bar">
  <div class="checkall">
    <CheckButton class="checkbutton" :ischecked="isSelectAll" @click.native="checkedAll"></CheckButton>
    <span>全选</span>
  </div>
  <div class="totalPrice">合计：{{totalPrice}}</div>
  <div class="calculate">去结算({{calculate}})</div>
</div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";
export default {
  name: "CartButtonBar",
  computed:{
    totalPrice(){
      return '￥'+ this.$store.getters.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.count * item.realPrice
      },0).toFixed(2)
    },
    calculate(){
      return this.$store.getters.cartList.filter(item=>{
        return item.checked
      }).length
    },
    isSelectAll(){
      // return !this.$store.getters.cartList.filter(item=>!item.checked).length
      if (this.$store.getters.cartList.length === 0) return false
      return !this.$store.getters.cartList.find(item=>!item.checked)
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checkedAll(){
      // console.log("dddd");
      if(this.isSelectAll){
        this.$store.getters.cartList.forEach(item=>{
          item.checked=false
        })
      }else{
        this.$store.getters.cartList.forEach(item=>{
          item.checked=true
        })
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  width: 100%;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  display: flex;

}
.checkall{
  display: flex;
  align-items: center;
  width: 80px;
}
.checkbutton{
  width: 20px;
  height: 20px;
  margin-left: 10px;
  /*margin-top: 10px;*/
  /*margin-left: 20px;*/
}
.checkall span{
  line-height: 40px;
  margin-left: 5px;
}
.totalPrice{
  margin-top: 11px;
  margin-left: 10px;
  font-size: 15px;
  flex: 1;
}
.calculate{
  width: 80px;
  background-color: red;
  color: white;
  height: 49px;
  text-align: center;
  line-height: 40px;


}
</style>
