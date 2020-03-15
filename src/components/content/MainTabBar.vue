<template>
  <div class="main-tab-bar">
    <TabBar>
      <tabBarItem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home-on.png" />
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/all.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/all-on.png" />
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart-on.png" />
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile-on.png" />
        <div slot="item-text">我的</div>
      </tabBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

