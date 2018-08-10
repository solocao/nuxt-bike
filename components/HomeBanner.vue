<template>
  <div class="homeBanners">
    <div>
      <div class="row text-center">
        <Col span="6">
        <div class="homeBanner">
          <div class="row-img">
            <img src="~assets/img/banner/homeBanner1.png" alt="" class="bgImage">
            <div class="row m0 bannerTextArea">
              <div class="row m0 bannerTextAreaInner">
                <h4>new year sales</h4>
                <h5>now in stores</h5>
              </div>
            </div>
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="homeBanner">
          <div class="row">
            <img src="~assets/img/banner/homeBanner2.png" alt="" class="bgImage">
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="homeBanner">
          <div class="row-img">
            <img src="~assets/img/banner/homeBanner3.png" alt="" class="bgImage">
            <div class="row m0 bannerTextArea">
              <div class="row m0 bannerTextAreaInner">
                <h4>new arrivals</h4>
                <h5>shop now</h5>
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
