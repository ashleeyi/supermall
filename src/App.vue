<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template> 

<script>
import MainTabBar from 'components/MainTabBar'
import axios from 'axios'
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
