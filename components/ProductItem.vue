<template>
  <div class="product-item">
    <div class="product-thumb clearfix">
      <a href="#" class="product-thumb">
        <img src="~assets/img/shop/15.jpg" alt="image">
      </a>
      <span class="new sale">Sale</span>
    </div>
    <div class="product-info clearfix">
      <span class="product-title">Cotton White Underweaer Block Out Edition</span>
      <div class="price">
        <del>
          <span class="regular">$150.00</span>
        </del>
        <ins>
          <span class="amount">$100.00</span>
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
  }

  .new {
    font-size: 18px;
    line-height: 35px;
    width: 87px;
    text-align: center;
    background-color: #7cc576;
    color: #ffffff;
    display: block;
    position: absolute;
    top: 27px;
    left: 25px;
  }

  .sale {
    background-color: #f63440;
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


