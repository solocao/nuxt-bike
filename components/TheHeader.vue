<template>
  <div>
    <div class="top_menus">

    </div>
    <div class="logo_line">

    </div>
    <div class="container">

    </div>
  </div>
</template>
<script>
import ShopCart from './ShopCart.vue'
import ShopHeader from './ShopHeader.vue'
import UserHoverCard from './UserHoverCard.vue'
export default {
  data() {
    return {
      showCart: false,
      userCart: false
    }
  },
  components: {
    ShopCart,
    ShopHeader,
    UserHoverCard
  },
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style lang="stylus">
@import '../style/var.styl';

.navarea-shop {
  height: 120px;

  .capsule1 {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .shop-nav {
    width: 100vw;
    height: 60px;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid linear-gradient(to right, #f3005c, #ffde00);
  }

  ul {
    padding-left: 0;
    display: flex;
    list-style: none outside none;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0 50px;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: black;
  }

  .cartitem {
    position: relative;
    float: right;
    margin-left: 15px;
  }

  .cartcount {
    font-family: 'Barlow', sans-serif;
    position: absolute;
    background: #ff2211;
    color: white;
    text-align: center;
    padding-top: 4px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    margin: -5px 0 0 20px;
    border-radius: 1000px;
    font-weight: 700;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: all 10s ease;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translateX(5px);
  opacity: 1;
}
</style>
