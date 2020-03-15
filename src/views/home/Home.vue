<template>
  <div class="home">
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Scroll class>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>

      <TabControl :titles="titles"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
  </div>
</template>


<script>
import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,

    TabControl,
    GoodsList,
    Scroll
  },
  data() {
    return {
      titles: ["流行", "新款", "时尚"],
      banners: [],
      recommends: [],
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
  },
  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(
        res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        err => {
          console.log(err);
        }
      );
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      this.currentType = type;
      getHomeGoods(type, page).then(
        res => {
          //通过push函数，将一个数组添加到另一个数组的尾部
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          console.log(res);
        },
        err => {}
      );
    }
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
