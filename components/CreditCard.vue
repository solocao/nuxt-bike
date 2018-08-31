<template>
  <div class="credit-card">
    <div>
      <div class="featured-inner">
        <div class="featured-image">
          <a href="single-product.html">
            <img :src="credit.img" alt="">
          </a>
        </div>
        <div class="featured-info">
          <a href="single-product.html">{{credit.name}}</a>
          <p class="reating">
            <span class="rate">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </p>
          <div class="featured-button">
            <a href="cart.html" class="add-to-card">立即申请</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    credit: {
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
.credit-card {
  width: calc(25% - 10px);
  float: left;
  margin: 0px 5px;
  height: 260px;

  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
  }

  .featured-inner {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #e6e6e6;
    margin-bottom: 1px;
    position: relative;
    transition: all 0.3s ease 0s;

    .featured-image {
      border-bottom: 1px solid #e7e7e7;
      overflow: hidden;
      padding: 3px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
      }
    }
  }

  .featured-info {
    margin-bottom: 15px;
    overflow: hidden;
    padding: 7px;
    text-align: center;

    a {
      color: #777;
      display: block;
      font-size: 16px;
      font-family: 'Khula', sans-serif;
      font-weight: 400;
      line-height: 19px;
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: break-word;
    }

    .reating {
      margin-bottom: 3px;
      position: relative;
    }

    .price {
      color: #3f3f3f;
      display: block;
      font-size: 22px;
      font-family: 'Khula', sans-serif;
      font-weight: 600;
      line-height: 25px;
      padding-bottom: 11px;
      padding-top: 3px;
    }
  }

  .featured-button {
    .add-to-card {
      background: #fff none repeat scroll 0 0;
      border: 1px solid #e5e5e5;
      border-radius: 3px;
      color: #3f3f3f;
      display: block;
      font-size: 16px;
      font-family: 'Khula', sans-serif;
      font-weight: 400;
      line-height: 32px;
      margin: 0 auto;
      overflow: hidden;
      padding: 1px 3px 0;
      text-align: center;
      text-overflow: ellipsis;
      transition: all 0.3s ease 0s;
      white-space: nowrap;
      word-wrap: break-word;

      &:hover {
        border: 1px solid #33AC41;
        transition: all 0.3s ease 0s;
      }
    }
  }
}
</style>
