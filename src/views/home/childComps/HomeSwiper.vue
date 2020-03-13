<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
            <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票" />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<style scoped>
 
  .wrapper{
    overflow:hidden;
    width:100%;
    height:0;
    padding-bottom:26.6666667%;
    background :#ccc;
  }
  .swiper-item{
    width:100%;
  }
  .swiper-img{
    width:100%;
  }
  
</style> 
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'HomeSwiper',
    components: {
      swiper,
      swiperSlide
      
    },
    data() {
      return {
        swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:true,
                //滑动速度
                speed:1000,
                // delay:1000
                
               
        },
        //三张轮播，使用变量循环
        swiperList:[
            {
                id:'001',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
            },
            {
                id:'002',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
            },
            {
                id:'003',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
            }
        ]
      }
    }
    
  }
</script>

