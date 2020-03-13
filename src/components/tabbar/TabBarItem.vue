<template>
    <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props:{
      path : String
    },
    data() {
      return {
      }
    },
    computed :{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1;
      }
    },
    methods :{
      itemClick(){
        this.$router.replace(this.path);
      }
    }
    
  }
</script>

