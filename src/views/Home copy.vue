<template>
  <div class="home">
    <tab-bar></tab-bar>
    <HelloWorld/>
    <div>{{test}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../HelloWorld.vue'
import TabBar from '../tabbar/TabBar.vue'
import test from  "../test.js"
export default {
  name: 'Home',
  data(){
    return {
      test
    }
  },
  created(){
    this.test = test;
  },
  components: {
    HelloWorld,
    TabBar
  }
}
</script>

