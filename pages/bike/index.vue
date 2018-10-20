<template>
  <div class="container">
    <Row>
      <Col span="5" style="padding-right:20px;display:flex;flex-direction:column">
      <div class="bike-brand">
        <div class="a-head">
          电单车品牌
        </div>
        <div class="a-body">
          <div class="brand-item" v-for="brand in brands" :key="brand.name" @click="brandBike(brand._id)">{{brand.name}}
            <span class="brand-num">
              <!-- {{brand.num}} -->
              9
            </span>
          </div>
        </div>
      </div>

      <div class="bike-color">
        <div class="a-head">
          电单车颜色
        </div>
        <div class="a-color">
          <ul class="color-widget mt-30">
            <li class="active white"></li>
            <li class="orange"></li>
            <li class="green"></li>
            <li class="blue"></li>
            <li class="pink"></li>
          </ul>
        </div>
      </div>

      <!-- <div class="bike-price">
        <div class="a-head">
          价格区间
        </div>
        <div class="a-price">
          <Slider v-model="value2" range></Slider>
        </div>
      </div> -->

      <!-- <div class="bike-hot">
        <div class="a-head">
          畅销车型
        </div>
        <div class="a-color">
        </div>
      </div> -->
      </Col>
      <Col span="19" v-if="products.length>0">
      <div class="bike-banner">
        <img src="http://www.shanghailima.com/upload/2017/09/26/15064182340273te42j.jpg" alt="">
      </div>
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
      value2: [40, 90],
      products: [],
      brands: [
        {
          name: '全部',
          num: 93
        }, {
          name: '爱玛',
          num: 93
        }, {
          name: '新日',
          num: 13
        }, {
          name: '新蕾',
          num: 12
        },
        {
          name: '小刀',
          num: 53
        },
        {
          name: '立马',
          num: 42
        },
        {
          name: '小鸟',
          num: 42
        },
        {
          name: '立马',
          num: 42
        },
        {
          name: '小鸟',
          num: 42
        },
        {
          name: '宝岛',
          num: 12
        },
        {
          name: '绿源',
          num: 121
        },
        {
          name: '比德文',
          num: 122
        },
        {
          name: '倍尔杰',
          num: 132
        }]
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
    },
    async brand() {
      const params = {
        url: 'brand/list',
        payload: {
        },
      }
      const result = await this.post(params);
      const brand = [{ name: '全部' }]
      if (result.code === 1) {
        this.brands = brand.concat(result.data);
      }
    },
    async brandBike(brandID) {
      const brands = [];
      brands.push(brandID)
      const params = {
        url: 'product/list',
        payload: {
          brand_ids: JSON.stringify(brands)
        },
      }
      const result = await this.post(params);
      if (result.code === 1) {
        const data = result.data;
        this.products = data;
      }
    }


  },
  mounted() {
    this.bike()
    this.brand()
  }
}
</script>
<style lang="stylus">
.a-head {
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  background: #33AC41;
  color: white;
  padding-left: 20px;
}

.bike-brand {
  .a-body {
    .brand-item {
      float: left;
      width: calc(50% -5px);
      height: 26px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 6px;
      box-shadow: 0px 2px 2px 1px rgba(3, 11, 12, 0.06);
      cursor: pointer;

      &:hover {
        background: #7cc576;
        color: white;

        .brand-num {
          color: #33AC41;
        }
      }

      .brand-num {
        margin-left: 4px;
        background: #EEEFF2;
        color: white;
        font-size: 12px;
        font-weight: bold;
        height: 16px;
        line-height: 16px;
        border-radius: 4px;
        padding: 0px 3px;
        color: #ADADAD;
      }
    }

    .brand-item:nth-child(2n) {
      margin-left: 5px;
    }
  }
}

.bike-banner {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}

// 单车颜色
.bike-color {
  margin-top: 10px;

  .a-head {
    font-size: 14px;
  }

  .a-color {
    list-style: none;

    ul {
      margin-top: 12px;
    }

    li {
      border-radius: 20px;
      display: inline-block;
      height: 20px;
      margin-right: 20px;
      width: 20px;
      box-shadow: 0px 1px 1px 1px rgba(3, 11, 12, 0.15);
      cursor: pointer;

      &:hover {
        border: 5px solid #71BD6B;
      }
    }

    li.white {
      background-color: #ffffff;
    }

    li.orange {
      background: #FBAF5D;
    }

    li.green {
      background: #00A651;
    }

    li.blue {
      background: #00AEEF;
    }

    li.pink {
      background: #EC008C;
    }
  }
}

.bike-price {
  margin-top: 10px;
}

.bike-hot {
  margin-top: 10px;
}

.ivu-slider-bar {
  background: #2DA239;

  &:hover {
    border-color: #2DA239 !important;
    transform: scale(1.5);
  }
}

.ivu-slider-button {
  border: 2px solid #2DA239;
}
</style>


