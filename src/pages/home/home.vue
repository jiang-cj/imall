<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <tab-control :title="['流行','新款','精选']" @tabclick="tabclick"
               ref="tabcontrol1" v-show="istab"></tab-control>
  <scroll class="content" ref="scroll"
        :probeType="3" @scroll="showBack"
          :pullUpLoad="true" @pullingUp="showLoad"><!--  :pullUpLoad="true"@pullingUp="showLoad" -->
    <home-swiper :banners="banners" @imageLoad="imageLoad"></home-swiper>
    <home-commend-view :recommend="recommend"></home-commend-view>
    <feature></feature>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @tabclick="tabclick"
                 ref="tabcontrol2" >
    </tab-control>
    <goods-list :goods="tagChange"></goods-list>
  </scroll>
 <back-top @click.native="backClick()" v-show="isShowBack"></back-top><!-- @click.native监听组件-->
</div>
</template>

<script>
import navBar from 'components/common/navBar/NavBar'
import {getHomeMultidata,getHomeGoods} from "network/home";
import homeSwiper from "./childComps/homeSwiper";
import homeCommendView from "./childComps/homeCommendView";
import feature from "./childComps/feature";
import tabControl from 'components/content/tabControl/TabControl'
import goodsList from 'components/content/goodsItem/GoodsList'
import scroll from 'components/common/scroll/Scroll'
import backTop from 'components/content/backTop/BackTop'
import {itemListenMixin} from "../../common/mixin";
import {debounce} from "common/utils";


export default {
  name: "home",
  components:{
    navBar,
    homeSwiper,
    homeCommendView,
    feature,
    tabControl,
    goodsList,
    scroll,
    backTop,
  },
  computed:{
    tagChange(){
      return this.goods[this.currentTag].list
    },

  },
  data(){
    return{
      banners:[],
      recommend:[],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentTag:'pop',
      isShowBack:false,
      tabcontroll:0,
      istab:false,
      saveY:0,

    }
  },

  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mixins:[itemListenMixin],
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY)//跳转至记录的页面的位置
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY()//记录离开页面时的位置
    this.$bus.$off('imageLoad',this.itemImageListen)
  },

  methods:{
    /* 事件监听相关*/


    tabclick(index){
      //console.log(index);
      switch (index){
        case 0:
          this.currentTag='pop'
              break
        case 1:
          this.currentTag='new'
              break
        case 2:
          this.currentTag='sell'
              break
      }
      this.$refs.tabcontrol1.cur=index;
      this.$refs.tabcontrol2.cur=index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,250)
    },
    //y轴到-1000时显示图标
    showBack(position){
      //console.log(position);
      this.isShowBack=(-position.y)>1000
      this.istab=(-position.y) > this.tabcontroll
    },
    showLoad(){
      this.getHomeGoods(this.currentTag)
      // this.$refs.scroll.scroll.refresh()//将显示高度变为图片加载完的高度，消除下拉卡住的bug
    },
    imageLoad(){
      this.tabcontroll = this.$refs.tabcontrol2.$el.offsetTop;
    },

    /* 网络接口相关*/
    getHomeMultidata() {
      getHomeMultidata().then(res=>{
        //console.log(res);
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
         this.goods[type].list.push(...res.data.list)//将获取的list加入到创建的list中
         this.goods[type].page+=1//页数增加
        //console.log(this.goods[type].page);
        //console.log(this.goods[type].list);
        this.$refs.scroll.finishPullUp()

      })
    }

  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;

  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;

}
.tab-control{
  /*position: sticky;*/
  top:44px;
  z-index:9;
}
.content{
  height: calc(100% - 93px);
  overflow: hidden;
  /*margin-top: 44px;*/
  /*position: absolute;*/
  /*top: 44px;*/
  /*bottom: 49px;*/
  /*right: 0;*/
  /*left: 0;*/
}
</style>
