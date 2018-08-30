<template>
  <div class="user-shop-info container">
    <row>
      <Col span="4">
      <div class="user-shop-box">
        <Menu :theme="theme3" active-name="credit" width='auto' @on-select="switchTab">
          <MenuGroup title="我的信息">
            <MenuItem name="info">
            <Icon type="md-document" /> 账户资料
            </MenuItem>
            <MenuItem name="credit">
            <Icon type="md-chatbubbles" /> 我的信用卡
            </MenuItem>
            <MenuItem name="loves">
            <Icon type="md-heart" /> 我的心愿单
            </MenuItem>
            <MenuItem name="address">
            <Icon type="md-leaf" /> 我的地址
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
      </Col>
      <Col class="shop-tab" span="20">
      <user-info v-if="activeTab==='info'"></user-info>
      <user-love v-if="activeTab==='loves'"></user-love>
      <user-credit v-if="activeTab==='credit'"></user-credit>
      <user-address v-if="activeTab==='address'"></user-address>
      <!-- <shop-cart v-if="activeTab==='cart'"></shop-cart> -->
      <!-- <shop-list v-if="activeTab==='order'"></shop-list>
      <user-address v-if="activeTab==='address'"></user-address>

-->
      </Col>
    </row>
  </div>
</template>
<script>
// import ShopOrder from '../../components/ShopOrder.vue';
// import ShopList from '../../components/ShopList.vue';
// import UserAddress from '../../components/shop/UserAddress.vue';
import UserInfo from '../../components/user/UserInfo.vue';
import UserLove from '../../components/user/UserLove.vue';
import UserCredit from '../../components/user/UserCredit.vue';
import UserAddress from '../../components/user/UserAddress.vue';

import store from '../../store'
import { mapState } from 'vuex';
// import ShopCart from './cart.vue';
export default {
  data() {
    return {
      activeTab: 'info'
    }
  },
  computed: {
    ...mapState(['login', 'user']),
  },
  layout: 'shop',
  components: {
    // ShopOrder,
    // ShopList,
    // UserAddress,
    // ShopCart,
    UserInfo,
    UserLove,
    UserCredit,
    UserAddress
  },

  created() {
    if (this.login !== true) {
      this.$router.push({ path: '/user/login' })
    }
  },
  methods: {
    switchTab(active) {
      this.activeTab = active
    }
  }
}
</script>
<style lang="stylus">
.user-shop-info {
  width: 1200px;
  margin: 0 auto;

  .user-shop-box {
    .ivu-menu {
      z-index: 1;
    }

    .user-shop-header {
      height: 60px;
    }

    .user-shop-container {
      li {
        list-style: none;
        position: relative;
        height: 48px;
        border-bottom: 1px solid #ebebeb;
        line-height: 48px;
        font-style: normal;
        text-decoration: none;
        color: #009a61;
        transition: all 0.15s ease-out;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          cursor: pointer;
        }
      }
    }
  }

  .shop-tab {
    padding-left: 20px;
  }
}
</style>
