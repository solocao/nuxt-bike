<template>
  <div class="product-item">
    <div class="product-thumb clearfix">
      <a href="#" class="product-thumb">
        <img :src="product.img_list[0].url" alt="image">
      </a>
      <span class="tag new sale">在售</span>
    </div>
    <div class="product-info clearfix">
      <span class="product-title">{{product.name}}</span>
      <div class="price">
        <del>
          <span class="regular">$150.00</span>
        </del>
        <ins>
          <span class="amount">{{product.sale_price}} </span>
        </ins>
      </div>
    </div>
    <div class="add-to-cart text-center">
      <a href="#">ADD TO CART</a>
    </div>
    <a href="#" class="like">
      <i class="fa fa-heart-o"></i>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="stylus">
.product-content {
  .product-item:nth-child(4n) {
    border-right: 0px;
  }

  .product-item {
    width: 25%;
  }
}

.product-item {
  float: left;
  margin-bottom: 33px;
  border-right: 1px solid #efefef;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 19px 1px rgba(36, 11, 12, 0.15);
    z-index: 9;

    .add-to-cart {
      opacity: 1;
      visibility: visible;
      transform: translate(0px, -10px);
    }

    .like {
      opacity: 1;
      visibility: visible;
      transform: translate(0px, 0px);
    }
  }

  .tag {
    width: 60px;
    height: 26px;
  }

  .like {
    font-size: 18px;
    line-height: 35px;
    position: absolute;
    top: 27px;
    right: 22px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    transform: translate(30px, 0px);
  }

  .product-thumb {
    padding: 20px 0px 0px 0px;

    img {
      width: 230px;
      height: 200px;
    }
  }

  .new {
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    background-color: #7cc576;
    color: #ffffff;
    display: block;
    position: absolute;
    top: 27px;
    left: 25px;
  }

  .sale {
    background-color: #7cc576;
  }

  .product-title {
    font-size: 15px;
    line-height: 27px;
    color: #333333;
    font-weight: 500;
  }

  .product-info {
    padding: 0px 35px 35px 35px;
  }

  .price {
    del {
      font-size: 16px;
      line-height: 36px;
      color: #c5c5c5;
      font-weight: 100;
    }

    ins {
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
      color: #33AC41;
      text-decoration: none;
    }
  }

  .add-to-cart {
    background: #33AC41;
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    opacity: 0;
    visibility: visible;
    transition: all 0.3s ease-in-out;
    transform: translate(0px, 10px);

    a {
      font-weight: 700;
      line-height: 50px;
      color: #ffffff;
    }
  }
}
</style>


