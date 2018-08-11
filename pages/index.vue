<template>
  <div>
    <nav-swiper></nav-swiper>
    <main class="capsule">
      <div class="row sectionTitle">
        <h3> 品牌电动车</h3>
        <h5>热门电单车</h5>
      </div>

      <div class="row product-content">
        <product-item v-for="i in 8" :key="i"></product-item>
      </div>
      <div style="margin-top:30px">
        <home-banner></home-banner>
      </div>
      <div class="row sectionTitle">
        <h3> 热门活动</h3>
        <h5>热门电单车</h5>
      </div>
      <div>
        <active-item v-for="i in 4" :key="i"></active-item>
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
      products: []
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
    // 产品列表
    async productList() {
      const params = {
        url: 'product/list',
        payload: {}
      }
      const result = await this.post(params)
      this.products = result.data
      console.log(this.products)
      console.log('看看结果')
      console.log(result)
    }
  },
  mounted() {
    console.log('k俺看')
    console.log(this.$store)

    this.productList()

    this.products1 = [{ 'name': 'Khaki Suede Polish Work Boots', 'price': 149.99, 'category': 'women', 'sale': true, 'article': 'shoe', 'img': 'shoe1.png' }, { 'name': 'Camo Fang Backpack Jungle', 'price': 39.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'jacket1.png' }, { 'name': 'Parka and Quilted Liner Jacket', 'price': 49.99, 'category': 'men', 'sale': true, 'article': 'jacket', 'img': 'jacket2.png' }, { 'name': 'Cotton Black Cap', 'price': 12.99, 'category': 'men', 'sale': true, 'article': 'hats', 'img': 'hat1.png' }, { 'name': 'Knit Sweater with Zips', 'price': 29.99, 'category': 'women', 'sale': false, 'article': 'sweater', 'img': 'sweater1.png' }, { 'name': 'Long Linen-blend Shirt', 'price': 18.99, 'category': 'men', 'sale': false, 'article': 'shirt', 'img': 'shirt1.png' }, { 'name': 'Knit Orange Sweater', 'price': 28.99, 'category': 'men', 'sale': false, 'article': 'sweater', 'img': 'sweater2.png' }, { 'name': 'Cotton Band-collar Blouse', 'price': 49.99, 'category': 'men', 'sale': false, 'article': 'shirt', 'img': 'shirt2.png' }, { 'name': 'Camo Fang Backpack Jungle', 'price': 59.99, 'category': 'women', 'sale': true, 'article': 'jacket', 'img': 'jacket3.png' }, { 'name': 'Golden Pilot Jacket', 'price': 129.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'jacket4.png' }, { 'name': 'Spotted Patterned Sweater', 'price': 80.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'sweater4.png' }, { 'name': 'Double Knit Sweater', 'price': 59.99, 'category': 'men', 'sale': true, 'article': 'jacket', 'img': 'sweater5.png' }]
    // this.productList()
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
