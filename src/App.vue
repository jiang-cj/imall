<template>
  <div id="App">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-ber></main-tab-ber>
  </div>
</template>

<script>

import MainTabBer from "./components/content/mainTabber/MainTabBer";
export default {
  name: 'App',
  components:{
    MainTabBer
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
