<template>
  <div>
    <nav-swiper></nav-swiper>
    <main class="capsule">
      <div class="row sectionTitle">
        <h3> 品牌电动车</h3>
        <h5>热门电单车 底价出售</h5>
      </div>

      <div class="row product-content">
        <product-item :product="product" v-for="product in products" :key="product._id"></product-item>
      </div>
      <div style="margin-top:30px">
        <home-banner></home-banner>
      </div>
      <div class="row sectionTitle">
        <h3> 热门活动</h3>
        <h5>厂家活动，参与领取大礼包</h5>
      </div>
      <div>
        <active-item :active="active" v-for="active in actives" :key="active.url"></active-item>
      </div>

      <div class="row sectionTitle">
        <h3>新闻资讯</h3>
        <h5>电单车行业新闻</h5>
      </div>
      <div class="row" style="margin-top:35px">
        <Col span="16">
        <post-large v-for="i in 8" :key="i"></post-large>
        </Col>
      </div>
      <!-- 合作伙伴 -->
      <the-partner></the-partner>
    </main>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import MastHead from '../components/MastHead.vue';
import ShopItem from '../components/ShopItem.vue';
import NavSwiper from '../components/NavSwiper.vue';
import ProductItem from '../components/ProductItem.vue';
import ActiveItem from '../components/ActiveItem.vue';
import HomeBanner from '../components/HomeBanner.vue';
import ThePartner from '../components/ThePartner.vue';
import TheFooter from '../components/TheFooter.vue';
import PostLarge from '../components/PostLarge.vue';

export default {
  layout: 'shop',
  components: {
    SideBar,
    MastHead,
    ShopItem,
    NavSwiper,
    ProductItem,
    HomeBanner,
    ThePartner,
    TheFooter,
    ActiveItem,
    PostLarge
  },
  data() {
    return {
      highprice: 300,
      products: [],
      actives: [{
        url: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/ee.jpg',
        city: '扬州',
        school: '扬州大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'

      }, {
        url: 'https://moto7.tw/imgs/QJ0A6300.jpg',
        city: '南京',
        school: '南京大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }, {
        url: 'http://i4.hexunimg.cn/2015-07-30/177952024.jpg',
        city: '盐城',
        school: '盐城工学院',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }, {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534097351472&di=e96187db51bbbfda63a67c8d8e96ea89&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3835662309%2C1136007658%26fm%3D214%26gp%3D0.jpg',
        city: '南通',
        school: '南通大学',
        title: '快乐校园行',
        sponsor: '新蕾电动车有限公司',
        brief: '开学季,电动车'
      }]
    };
  },
  computed: {
    // products() {
    //   return this.$store.state.products.filter(el =>
    //     this.$store.state.sale
    //       ? el.price < this.highprice && el.sale
    //       : el.price < this.highprice
    //   );
    // }
  },
  methods: {
    async bike() {
      const params = {
        url: 'bike/index',
        payload: {
        },
      }
      const result = await this.get(params);
      if (result.code === 1) {
        const data = result.data;
        this.products = data.product
      }
      console.log('看看bike');
      console.log(result);
    }

  },
  mounted() {
    this.bike();


  }
};
</script>

 <style lang="stylus">
 /* no grid support */
 aside {
   float: left;
   width: 19.1489%;
 }

 .content {
   /* no grid support */
   float: right;
   width: 79.7872%;
   /* grid */
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
   padding: 0 !important;
 }
</style>
