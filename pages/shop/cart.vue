<template>
  <div>
    <div>

    </div>
    <section class="row contentRowPad">
      <div class="container">
        <div class="row cartPage">
          <h3 class="heading pageHeading">购物车</h3>
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
                <tr class="alert" role="alert">
                  <td class="productImage"><img src="images/product/single/l1.png" alt=""></td>
                  <td class="productName">
                    <h6 class="heading">dining table</h6>
                    <div class="row descList m0">
                      <dl class="dl-horizontal">
                        <dt>manufacturer :</dt>
                        <dd>Tartaan & Co</dd>
                        <dt>product code :</dt>
                        <dd>Xuo15</dd>
                        <dt>color :</dt>
                        <dd>Black</dd>
                        <dt>size :</dt>
                        <dd>Queen</dd>
                      </dl>
                    </div>
                  </td>

                  <td class="price">
                    <del>$580</del>$420</td>
                  <td>
                    <div class="input-group spinner a-inline-num">
                      <button class="btn btn-default">
                        <i class="fa fa-angle-up"></i>
                      </button>
                      <input type="text" class="form-control" value="2">
                      <button class="btn btn-default">
                        <i class="fa fa-angle-down"></i>
                      </button>
                      、
                    </div>
                  </td>
                  <td class="price">$840</td>
                  <td>
                    <a href="#" class="edit" data-dismiss="alert" aria-label="Close">
                      <i class="fa fa-trash-o"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="7">
                    <a href="#" class="btn btn-primary btn-lg">继续购物</a>
                    <a href="#" class="btn btn-default btn-lg fright">更新购物车</a>
                    <a href="#" class="btn btn-default btn-lg fright">清空购物车</a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="row m0">
            <div class="col-sm-4">
              <form class="row discountCupon m0" action="#" method="get">
                <h5 class="heading">Discount codes</h5>
                <p>Enter your coupon code</p>
                <input type="text" class="form-control" name="cuponCode" id="cuponCode">
                <input type="submit" class="btn btn-default btn-sm" value="apply code">
              </form>
            </div>
            <div class="col-sm-4">
              <form class="row m0 shippingTax" action="#" method="get">
                <h5 class="heading">Estimate shipping and tax</h5>
                <p>Enter your destination to get a shipping estimate</p>
                <div class="form-group">
                  <label for="country">Country*</label>
                  <select class="selectpicker countrySelect">
                    <option value="bd">Bangladesh</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="country">State/Province</label>
                  <select class="selectpicker countrySelect">
                    <option value="">Please select region, state or province</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="country">Zip/Postal Code</label>
                  <input type="text" class="form-control">
                </div>
                <input type="submit" class="btn btn-default btn-sm" value="get a code">
              </form>
            </div>
            <div class="col-sm-4">
              <div class="row m0 totalCheckout">
                <div class="descList row m0">
                  <dl class="dl-horizontal">
                    <dt>Subtotal</dt>
                    <dd>$1260</dd>
                    <dt class="gt">Grand Total</dt>
                    <dd>$1260</dd>
                  </dl>
                </div>
                <a href="#" class="btn btn-default btn-sm">Proceed to Checkout</a>
                <a href="#" class="link">Checkout with multiple addresses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {


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
}
</style>

