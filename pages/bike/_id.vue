<!--商品详情-->
<template>
  <div class="store-content container">

    <div class="gray-box">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="a-thumbnail">
            <ul>
              <li v-for="item in product.img_list" :class="{on:big===item.url}" @click="big=item.url">
                <img :src="item.url" style="width:100%;height:100%">
              </li>
            </ul>
          </div>
          <div class="thumb">
            <div class="big">
              <img :src="big" :alt="product.name" style="width:100%;height:100%">
            </div>
          </div>
        </div>
      </div>
      <!--右边-->
      <div class="banner">
        <div class="sku-custom-title">
          <h4>{{product.name}}</h4>
          <h6>
            <span>{{product.description}}</span>

            <span class="price">
              <span>价格</span>
              <em>¥</em>
              <i>{{product.sale_price}}</i>
            </span>
          </h6>
        </div>
        <div class="num">
          <span class="params-name">数量</span>

          <div class="a-inline-num">
            <button class="btn btn-default" @click="minNum">
              <i class="fa fa-minus"></i>
            </button>
            <input type="text" class="form-control" :value="num">
            <button class="btn btn-default" @click="num++">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="buy">
          <button text="加入购物车" class="btn-shop" style="margin-right:10px" @click="addCart">加入购物车</button>
          <button text="加入购物车" class="btn-shop" style="margin-right:10px">立即购买</button>
        </div>
      </div>
    </div>
    <div v-html="product.content">
      {{product.content}}
    </div>
    <div>
    </div>
    <div v-html="product.content">
      {{product.content}}
    </div>
    <the-comment :postId="product._id"></the-comment>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import TheComment from '../../components/TheComment.vue'
export default {
  layout: 'shop',
  components: {
    TheComment
  },
  data() {
    return {
      value: null,
      productMsg: {},
      small: ['http://www.qqddc.com/fileUpload/products/20130621150159666226985.jpg', 'http://www.qqddc.com/fileUpload/products/20130621150159666226985.jpg', 'http://www.qqddc.com/fileUpload/products/20130621150159666226985.jpg'],
      big: null,
      product: {},
      num: 1,
      item: null
    };
  },
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async productDetail() {
      const id = this.$route.params.id;
      const params = {
        url: 'product/item/' + id,
        payload: {}
      }
      const result = await this.get(params)
      this.product = result.data
      this.big = this.product.img_list[0].url
      console.log('看看结果')
      console.log(this.product)
    },
    minNum() {
      if (this.num > 1) {
        this.num = this.num - 1;
      }
    },
    async addCart() {
      const result = await this.post({
        url: 'user/cart/item/add',
        payload: {
          product_id: this.product._id
        },
        auth: true
      })
      if (result.code === 1) {
        console.log('看看结果')
        console.log(result.data)
        const cart = result.data.map(x => {
          console.log(x.product)
          alert(x.product._id)
          return {
            id: x.product._id,
            name: x.product.name,
            price: x.product.sale_price,
            img: x.product.img_list[0].url,
            count: x.count
          }
        })
        console.log(cart)
        this.set({ cart: cart })
      }
    }
  },

  created() {
    const id = this.$route.params.id;
    console.log(id)

    // this.productDetail()
    // console.log()
    // let id = this.$route.query.productId;

    // this.$route.params.id
    // this.getProductDetail(id);
    // this._productDet(id);
  },
  mounted() {
    this.productDetail()
  }
};
</script>
<style lang="scss" scoped>
.store-content {
  .gray-box {
    background: white;
    display: flex;
    border-radius: 4px;
    margin: 20px 0;
    .gallery-wrapper {
      .gallery {
        display: flex;
        width: 540px;

        .a-thumbnail {
          li:first-child {
            margin-top: 0px;
          }
          li {
            list-style: none;
            width: 80px;
            height: 80px;
            margin-top: 10px;
            padding: 0px;
            border: 1px solid #33ac41;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            &.on {
              padding: 10px;
              border: 1px solid #33ac41;
            }
            img {
              display: block;
              width: 100%;
            }
          }
        }
        .thumb {
          .big {
            margin-left: 20px;
            width: 400px;
            height: 400px;
            border: 1px solid rgba(128, 128, 128, 0.178);
          }
          img {
            display: block;
            max-width: 400px;
            max-height: 400px;
          }
        }
      }
    }
    // 右边
    .banner {
      width: 450px;
      margin-left: 10px;
      h4 {
        font-size: 24px;
        line-height: 1.25;
        color: #000;
        margin-bottom: 13px;
      }
      h6 {
        font-size: 14px;
        line-height: 1.5;
        color: #bdbdbd;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .sku-custom-title {
        overflow: hidden;
        padding: 8px 8px 18px 10px;
        position: relative;
      }
      .params-name {
        padding-right: 20px;
        font-size: 14px;
        color: #8d8d8d;
        line-height: 36px;
      }
      .num {
        padding: 29px 0 8px 10px;
        border-top: 1px solid #ebebeb;
        display: flex;
        align-items: center;
      }
      .buy {
        position: relative;
        border-top: 1px solid #ebebeb;
        padding: 30px 0 0 10px;
      }
    }
  }
}

.no-info {
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
}

.price {
  display: block;
  color: #d44d44;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;

  > span {
    color: #9e9e9e;
  }
  i {
    padding-left: 2px;
    font-size: 24px;
  }
}

.btn-shop {
  width: 145px;
  height: 50px;
  line-height: 48px;
}
.a-inline-num {
  display: flex;
  input {
    width: 60px;
    margin: 0px 6px;
  }
  .fa {
    color: #9e9e9e;
  }
}
</style>
