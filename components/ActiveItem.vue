<template>
  <div class="active-item">
    <div class="service-wrap">
      <div class="service-img">
        <img :src="active.url" alt="">
        <ul>
          <li>
            <span class="rent">{{active.city}}</span>
          </li>
          <li>
            <p>
              {{active.school}}
              <span>操场</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="service-content">
        <h3> {{active.title}}</h3>
        <span>{{active.sponsor}}</span>
        <p>{{active.brief}}</p>
        <div class="row">
          <Col span="14">
          <span>
            <i class="fa fa-calendar"></i> 2018年8月2日
          </span>
          </Col>
          <Col span="10">
          <ul class="d-flex meta">
            <li>4
              <i class="fa fa-child"></i>
            </li>
            <li>6
              <i class="fa fa-motorcycle"></i>
            </li>
          </ul>
          </Col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
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
.active-item {
  width: calc(25% - 10px);
  height: 420px;
  float: left;
  margin: 0px 5px;
}

/* --------service-area start-------- */
.service-area {
  padding: 100px 0px 70px;
}

.section-title h2 {
  font-size: 36px;
  padding-bottom: 25px;
  position: relative;
  margin-bottom: 50px;
}

.section-title h2:before, .section-title h2:after {
  position: absolute;
  left: 50%;
  content: '';
  z-index: 9;
}

.section-title h2:before {
  width: 200px;
  height: 1px;
  background: #868686;
  bottom: 0;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
}

.section-title h2:after {
  height: 15px;
  width: 15px;
  background: #69b909;
  bottom: -12px;
  transform: rotate(45deg) translateX(-50%);
  -webkit-transform: rotate(45deg) translateX(-50%);
  -moz-transform: rotate(45deg) translateX(-50%);
}

.service-wrap {
  margin-bottom: 30px;
  border: 1px solid #e6e6e6;
}

.service-wrap:hover {
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
}

.service-img {
  position: relative;
  overflow: hidden;
}

.service-img img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  zoom: 1;
  height: 190px;
}

.service-img ul {
  position: absolute;
  left: 20px;
  bottom: 20px;
}

.service-img ul li span.rent {
  padding: 3px 15px;
  background: #66ad26;
  display: inline-block;
  font-size: 14px;
  color: #fff;
}

.service-img ul li p {
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  padding: 3px 15px;
}

.service-img ul li p span {
  font-size: 14px;
  font-weight: 300;
}

.service-content {
  padding: 25px;
}

.service-content h3 {
  font-size: 24px;
  margin-bottom: 0px;
}

.service-content span {
  font-size: 14px;
  line-height: 20px;
  display: block;
  font-weight: 300;
  margin-bottom: 15px;
}

.service-content p {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.service-content .row span {
  display: block;
  margin: 7px 0px;
  font-size: 14px;
  font-weight: 300;
}

.service-content .row span i {
  color: #66ad26;
  font-size: 18px;
  margin-right: 5px;
}

/* --------service-area end-------- */
ul.meta {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 5px 0px;
  list-style: none;
}

ul.meta li {
  padding-left: 20px;
  font-size: 14px;
  position: relative;
  float: left;
}

ul.meta li:before {
  position: absolute;
  left: 9px;
  top: 0;
  content: '|';
  color: #868686;
}

ul.meta li:first-child:before {
  display: none;
}

ul.meta li:first-child {
  padding-left: 0px;
}

ul.meta li i {
  color: #69b909;
  font-size: 18px;
  margin-left: 2px;
}
</style>
