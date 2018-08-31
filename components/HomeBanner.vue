<template>
  <div class="homeBanners">
    <div>
      <div class="row text-center">
        <Col span="6">
        <div class="homeBanner">
          <div class="row-img">
            <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/4de3471d76b0b6266d2593783548bf54_259_146.jpg" alt="" class="bgImage" style="width:288px;height:180px">
            <div class="row m0 bannerTextArea">
              <div class="row m0 bannerTextAreaInner">
                <h4>新年特惠</h4>
                <h5>正在热销</h5>
              </div>
            </div>
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="homeBanner">
          <div class="row">
            <img src="http://www.xlddc.cn/uploads/20171030/20171030143338122.jpg" alt="" class="bgImage" style="width:585px;height:180px">
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="homeBanner">
          <div class="row-img">
            <img src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/cd1f14dbb7ef9eb7fe4b96da2ed403bb_259_146.jpg" alt="" class="bgImage" style="width:288px;height:180px">
            <div class="row m0 bannerTextArea">
              <div class="row m0 bannerTextAreaInner">
                <h4>新品推荐</h4>
                <h5>立即购买</h5>
              </div>
            </div>
          </div>
        </div>
        </Col>
      </div>
    </div>
  </div>
  <!--Banner-->
</template>
<style lang="stylus">
.homeBanners {
  .homeBanner {
    text-transform: uppercase;
    color: #222222;

    .bannerTextArea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.85);
      padding: 10px;

      .bannerTextAreaInner {
        height: 100%;
        border: 2px solid #222222;
        padding-top: 35px;

        h4 {
          font-size: 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;

          &:after {
            content: '';
            width: 65px;
            height: 2px;
            background: #222222;
            margin: 13px auto;
            display: block;
          }
        }

        h5 {
          font-family: 'Montserrat', sans-serif;
        }
      }
    }
  }

  .row-img {
    .row {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
}
</style>
