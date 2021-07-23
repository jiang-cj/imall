<template>
<div class="detail">
  <detail-nav-bar class="navbar" @topClick="topClick" ref="navbar"></detail-nav-bar>
  <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
    <detail-swiper :top-image="topImage"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="paraminfo"></detail-param-info>
    <comment-info :comment-info="commentInfo" ref="comment"></comment-info>
    <goods-list :goods="recommended" ref="try"></goods-list>

  </scroll>
    <back-top @click.native="backClick()" v-show="isShowBack"></back-top>
  <detail-bottom-bar @addCart="addToCart()"></detail-bottom-bar>
  <toast message="message" :showit="true"></toast>
</div>
</template>

<script>
import detailNavBar from "./childDetail/detailNavBar";
import detailSwiper from "./childDetail/detailSwiper";
import detailBaseInfo from "./childDetail/detailBaseInfo";
import detailShopInfo from "./childDetail/datailShopInfo"
import detailGoodsInfo from "./childDetail/detailGoodsInfo";
import detailParamInfo from "./childDetail/datailParamInfo";
import commentInfo from "@/pages/detail/childDetail/commentInfo";
import GoodsList from "@/components/content/goodsItem/GoodsList";
import detailBottomBar from "./childDetail/detailBottomBar";
import scroll from 'components/common/scroll/Scroll'
import backTop from 'components/content/backTop/BackTop'
import {debounce} from "../../common/utils";
import Toast from "../../components/common/toast/Toast";
import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
import {itemListenMixin} from "../../common/mixin";

export default {
  name: "detail",
  components:{
    Toast,
    GoodsList,
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailBottomBar,
    commentInfo,
    scroll,
    backTop
  },
  data(){
    return{
      iid:null,
      topImage:[],
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommended:[],
      topSetting:[],
      // getTopSet:null,
      currentIndex:0,
      isShowBack:false,
    }
  },
  created(){
    this.iid=this.$route.params.iid

    getDetailData(this.iid).then((res)=> {
        console.log(res);
        const data = res.result
        this.topImage = res.result.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获取图片、文字
        this.detailInfo = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }

      }
    )
    getRecommend().then((res)=>{
      // console.log(res);
      this.recommended = res.data.list
    })

  },
  updated() {
    this.getTopSet()
  },
  mixins:[itemListenMixin],
  methods: {
    imageLoad() {
      this.refresh()
    },
    topClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.topSetting[index], 200)
    },
    contentScroll(position) {
      // console.log(position.y);
      const positiony = -position.y
      // console.log(this.positiony);
      let length = this.topSetting.length
      for (let i = 0; i < length; i++) {
        if ((this.currentIndex != i) && (positiony > this.topSetting[i] && positiony < this.topSetting[i + 1])) {
          this.currentIndex = i;
          this.$refs.navbar.currentItem = this.currentIndex
          // console.log(i);
        }

      }
      this.isShowBack = (-position.y) > 1000
      this.istab = (-position.y) > this.tabcontroll
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 250)
    },
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.imgurl = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.newPrice = this.goods.newPrice
      product.realPrice = this.goods.realPrice

      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart', product)

    },
    getTopSet() {
      this.topSetting = []
      this.topSetting.push(0);
      this.topSetting.push(this.$refs.paraminfo.$el.offsetTop)
      this.topSetting.push(this.$refs.comment.$el.offsetTop)
      this.topSetting.push(this.$refs.try.$el.offsetTop)
      this.topSetting.push(Number.MAX_VALUE)
      // console.log(this.topSetting);
    }
  }}
</script>

<style scoped>
.detail{
  position: relative;
  background-color: white;
  z-index: 9;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
}
.navbar{
  position: relative;
  z-index: 9;
  width: 100%;
  background-color: white;
}
</style>
