<template>
  <div class="container">
    <Row>
      <Col span="6"> afaf
      </Col>
      <Col span="18" v-if="products.length>0">
      <product-item :col="3" :product="product" v-for="product in products" :key="product._id"></product-item>
      </Col>
    </Row>
  </div>

</template>
<script>
import ProductItem from '../../components/ProductItem.vue';
export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: []
    }
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
        this.products = data.product;
        console.log('看看products');
        console.log(this.products)
      }
    }


  },
  mounted() {
    this.bike()
  }
}
</script>
<style lang="stylus">
</style>


