<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template> 

<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  name : "App",
  components : {
    MainTabBar
  },
  data(){
    return{

    }
  },
  methods:{
  }
  
}
</script>
<style>
  @import "~assets/css/base.css";
</style>
