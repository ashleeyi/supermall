<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background: #fcfcfc;
}
.active {
  color: red;
}
.active span {
  color: red;
}
.tab-control-item {
  height: 44px;
  line-height: 44px;
  text-align: center;
  flex: 1;
}
</style>