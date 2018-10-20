<template>
  <div>
    <div>
    </div>
    <section class="row contentRowPad">
      <div class="container">
        <div class="row cartPage">
          <h3 class="heading pageHeading">购物车</h3>
          <div>
            {{cart}}
          </div>
          <div class="table-responsive cartTable row m0">
            <table class="table">
              <thead>
                <tr>
                  <th class="productImage">单车图片</th>
                  <th class="productName">单车</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>总计</th>
                  <th>删除</th>
                </tr>
              </thead>
              <tbody>
                <tr class="alert" v-for="product in cart" :key="product.id">
                  <td class="productImage">
                    <img :src="product.img" alt="">
                  </td>
                  <td class="productName">
                    <h6 class="heading">{{product.name}}</h6>
                  </td>
                  <td class="price">
                    ¥{{product.price}}</td>
                  <td>
                    <div class="input-group spinner a-inline-num">
                      <button class="btn btn-default" @click="cartItemMinus(product.id)">
                        <i class="fa fa-minus"></i>
                      </button>
                      <input type="text" class="form-control" :value="product.count">
                      <button class="btn btn-default" @click="cartItemAdd(product.id)">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td class="price">{{product.count*product.price}}</td>
                  <td>
                    <a href="#" class="edit" data-dismiss="alert" aria-label="Close" @click="cartDelete(product)">
                      <i class="fa fa-trash-o"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="7">
                    <a href="#" class="btn btn-primary btn-lg">继续购物</a>
                    <a href="#" class="btn btn-default btn-lg fright" @click="cartList">更新购物车</a>
                    <a href="#" class="btn btn-default btn-lg fright" @click="cartClear">清空购物车</a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    setCart(data) {
      const cart = data.map(x => {
        return {
          id: x.product._id,
          name: x.product.name,
          price: x.product.sale_price,
          img: x.product.img_list[0].url,
          count: x.count
        }
      })
      this.set({ cart: cart })
    },
    // 购物车减
    cartMinus(product) {
      const { count, id } = product;
      const index = this.cart.findIndex(x => x.id === id)
      if (count > 1) {
        this.cart[index].count = this.cart[index].count - 1;
      }
      this.set({ cart: this.cart })
    },
    // 购物车加
    cartPlus(product) {
      const { name, sale_price: price, id, img_list, count } = product;
      const index = this.cart.findIndex(x => x.id === id)
      this.cart[index].count = count + 1;
      this.set({ cart: this.cart })
    },
    // 购物车删除
    cartDelete(product) {
      const { _id: id } = product;
      const index = this.cart.findIndex(x => x.id === id)
      this.cart.splice(index, 1)
      this.set({ cart: this.cart })
    },
    // 购物车清空
    async  cartClear() {
      const params = {
        url: 'user/cart/clear',
        payload: {},
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.setCart(result.data)
      }
    },
    // 购物车列表
    async  cartList() {
      const params = {
        url: 'user/cart/list',
        payload: {},
        auth: true
      }
      const result = await this.get(params)
      if (result.code === 1) {
        this.setCart(result.data)
      }
    },
    // 购物车商品减一
    async  cartItemMinus(product_id) {
      const params = {
        url: 'user/cart/item/minus',
        payload: {
          product_id
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.setCart(result.data)
      }
    },
    // 购物车 商品 加一
    async  cartItemAdd(product_id) {
      const params = {
        url: 'user/cart/item/add',
        payload: {
          product_id
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.setCart(result.data)
      }
    }
  },
  mounted() {

  },
  created() {
    this.cartList();
  }
}
</script>

<style lang="stylus">
.contentRowPad {
  padding: 70px 0 90px;
}

/* ---------------------------------------------------------------- */
.cartPage .pageHeading {
  margin-bottom: 50px;
}

.cartTable {
  margin-bottom: 50px;
}

.cartTable .table thead {
  text-transform: uppercase;
}

.cartTable .table thead tr th {
  padding: 17px;
  line-height: 1;
  border: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc !important;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #222222;
  white-space: nowrap;
}

.cartTable .table thead tr th:first-child {
  width: 160px;
}

.cartTable .table thead tr th:nth-child(2) {
  width: 540px;
}

.cartTable .table tbody tr td {
  padding: 20px;
  line-height: 1;
  border: 1px solid #dcdcdc;
  text-align: center;
  white-space: nowrap;
}

.cartTable .table tbody tr td:first-child {
  width: 160px;
  text-align: left;
}

.cartTable .table tbody tr td:first-child img {
  width: 100%;
}

.cartTable .table tbody tr td:nth-child(2) {
  width: 540px;
  text-align: left;
}

.cartTable .table tbody tr td.price {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2;
  color: #222222;
}

.cartTable .table tbody tr td.price del {
  display: block;
  color: #777777;
}

.cartTable .table tbody tr td .edit {
  display: inline-block;
  width: 40px;
  line-height: 40px;
  background: #3ab54a;
  color: #FFF;
  text-align: center;
  font-size: 18px;
}

.cartTable .table tbody tr td .descList dl {
  margin: 0;
}

.cartTable .table tbody tr td .heading {
  margin-bottom: 10px;
}

.cartTable .table tfoot tr td {
  padding: 20px;
  width: 100%;
  line-height: 1;
  border: 1px solid #dcdcdc;
}

.cartTable .table tfoot tr td a.fright {
  margin-left: 30px;
  border-color: #dcdcdc;
  color: #777777;
}

.cartTable .table tfoot tr td a.fright:hover {
  background-color: transparent;
  border-color: #3ab54a;
}

.discountCupon {
  border: 1px solid #dcdcdc;
  padding: 20px;
}

.discountCupon .heading {
  margin-bottom: 10px;
}

.discountCupon p {
  color: #777777;
  margin-bottom: 10px;
}

.discountCupon .form-control {
  border-radius: 0;
  margin-bottom: 20px;
  box-shadow: none;
}

.discountCupon .btn {
  padding: 0 15px;
}

.shippingTax {
  border: 1px solid #dcdcdc;
  padding: 20px;
}

.shippingTax .heading {
  margin-bottom: 10px;
}

.shippingTax p {
  color: #777777;
  margin-bottom: 10px;
}

.shippingTax .form-control {
  border-radius: 0;
  margin-bottom: 20px;
  box-shadow: none;
}

.shippingTax .countrySelect.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {
  width: 100%;
  margin-bottom: 10px;
}

.shippingTax .countrySelect .btn {
  border-color: #dcdcdc;
  color: #777777;
  padding: 0 15px;
  line-height: 28px;
  font-family: 'Open Sans', sans-serif;
}

.shippingTax label {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: normal;
  color: #222222;
  margin: 0 0 5px;
}

.shippingTax .form-group {
  margin: 0;
}

.shippingTax .btn {
  padding: 0 15px;
}

.totalCheckout {
  text-align: right;
}

.totalCheckout .link {
  display: block;
  line-height: 1;
  color: #777777;
  font-family: 'Open Sans', sans-serif;
  margin-top: 10px;
}

.totalCheckout .descList dl dt, .totalCheckout .descList dl dd {
  text-align: right;
  font-family: 'Open Sans', sans-serif;
  color: #777777;
  font-size: 14px;
  font-weight: normal;
}

.totalCheckout .descList dl dt:last-child, .totalCheckout .descList dl dd:last-child, .totalCheckout .descList dl dt.gt, .totalCheckout .descList dl dd.gt {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-top: 5px;
}

.totalCheckout .descList dl dt {
  width: 70%;
}

/* ---------------------------------------------------------------- */
.totalCheckout {
  text-align: right;
}

.totalCheckout .link {
  display: block;
  line-height: 1;
  color: #777777;
  font-family: 'Open Sans', sans-serif;
  margin-top: 10px;
}

.totalCheckout .descList dl dt, .totalCheckout .descList dl dd {
  text-align: right;
  font-family: 'Open Sans', sans-serif;
  color: #777777;
  font-size: 14px;
  font-weight: normal;
}

.totalCheckout .descList dl dt:last-child, .totalCheckout .descList dl dd:last-child, .totalCheckout .descList dl dt.gt, .totalCheckout .descList dl dd.gt {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-top: 5px;
}

.totalCheckout .descList dl dt {
  width: 70%;
}

.a-inline-num {
  display: flex;
  justify-content: space-between;

  input {
    margin: 0px 3px;
  }

  .fa {
    color: #9e9e9e;
  }
}
</style>

