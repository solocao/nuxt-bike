<template>
  <div class="user-hover-card">
    <div class="inner-card">
      <div class="arrow-up"></div>
      <ul class="c-ul">
        <li>我的订单</li>
        <li>收货地址</li>
        <li>售后服务</li>
        <li>退出登录</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.user-hover-card {
  z-index: 9999;
  position: absolute;
  right: -47px;
  top: 26px;
  width: 120px;
  box-shadow: 2px 2px 2px #F3F4F5;
  // border: 1px solid red;
  background: transparent;

  .inner-card {
    margin-top: 20px;

    .arrow-up {
      width: 0;
      height: 0;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
      border-bottom: 8px solid #EBECEE;
      margin: 0 auto;
    }

    .c-ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #EBECEE;

      li {
        width: 100%;
        height: 30px;
        list-style: none;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          cursor: pointer;
          background: #F3F4F5;
        }
      }
    }
  }
}
</style>
