<template>
  <div class="recommend">
    <div class="recommend-item"  v-for="(item,index) in recommends" :key="index">
      <a class="recommend-link" :href="item.link">
        <img class="recommend-img" :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
    name :'RecommendView',
    props :{
      recommends:{
        type : Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style scoped>
.recommend{
  display: flex;
  padding:15px 0px 30px;
  border-bottom: 10px solid #ffffff;
  height:70px;

}
.recommend-item{
  flex:1;
  text-align: center;
  font-size: 12px;;
}
.recommend-img{
  width:70px;
  height:70px;
  margin-bottom: 10px;;
}
</style>