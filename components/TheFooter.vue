<template>

  <!-- Footer Main Start -->
  <section class="footer-main">
    <div class="capsule">

      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-3 footer-col">
          <h3>关于我们</h3>
          <div class="row">
            <div class="col-md-12">
              <p>
                AA电单车是新零售电动车方案供应商
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 footer-col">
          <h3>友情链接</h3>
          <div class="row">
            <div class="col-md-12">
              <ul>
                <li>
                  <a href="#">爱玛电动车</a>
                </li>
                <li>
                  <a href="#">新蕾电动车</a>
                </li>
                <li>
                  <a href="#">Properties</a>
                </li>
                <li>
                  <a href="#">Rentals</a>
                </li>
                <li>
                  <a href="#">Properties Parking</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 footer-col">
          <h3>服务</h3>
          <div class="row">
            <div class="col-md-12">
              <ul>
                <li>
                  <a href="#">活动承办</a>
                </li>
                <li>
                  <a href="#">电单车资讯</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 footer-col">
          <h3>联系我们</h3>
          <div class="contact-item">
            <div class="icon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="text">ABC Steet, USA.</div>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="text">111-555-222</div>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fa fa-fax"></i>
            </div>
            <div class="text">111-555-222</div>
          </div>
          <div class="contact-item">
            <div class="icon">
              <i class="fa fa-envelope-o"></i>
            </div>
            <div class="text">info@email.com</div>
          </div>
        </div>
      </div>

    </div>

  </section>
  <!-- Footer Main End -->

</template>
        


<style lang="stylus">
.footer-main {
  width: 100%;
  height: auto;
  padding: 50px 0;
  background: #222;
  margin-top: 30px;

  h3 {
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 25px;

    &:after {
      content: '';
      position: absolute;
      width: 50px;
      background: #2abb67;
      left: 0;
      bottom: 0;
      height: 3px;
    }
  }
}

.footer-main .footer-col p {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 22px;
}

.footer-main .footer-col ul li {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 22px;
  -webkit-transition: all 0.4s ease 0s;
  -moz-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  list-style-type: none;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.footer-main .footer-col ul li a {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 22px;
  -webkit-transition: all 0.4s ease 0s;
  -moz-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

.footer-main .footer-col ul li a:hover {
  color: #fff;
}

.footer-main .footer-col ul li:before {
  color: #a3a3a3;
  content: '\f0a4';
  font-family: 'FontAwesome';
  left: 0;
  position: absolute;
  top: 0;
}

.footer-main .footer-col .contact-item {
  color: #a3a3a3;
  font-size: 14px;
  overflow: hidden;
  margin-bottom: 10px;
  display: table;
}

.footer-main .footer-col .contact-item .icon {
  width: 35px;
  display: table-cell;
  vertical-align: top;
  font-size: 16px;
  margin-right: 10px;
}

.footer-main .footer-col .contact-item .icon i {
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #dedede;
  color: #555555;
}

.footer-main .footer-col .contact-item .text {
  display: table-cell;
  vertical-align: top;
  line-height: 22px;
  display: block;
}
</style>
