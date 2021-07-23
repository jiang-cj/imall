import {debounce} from "./utils";

export const itemListenMixin = {
  data(){
    return{
      itemImageListen:null,
      refresh:null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImageListen = ()=>{
      this.refresh()
    }
    this.$bus.$on('imageLoad',this.itemImageListen)
  }
}
