<template>
  <div class="goods">
    <GoodListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from "components/content/goods/GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
/* .goods {
  column-count: 2;
  column-gap: 1em;
  width: 90%;
  margin: 2px auto;
} */

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
