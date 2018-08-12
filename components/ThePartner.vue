<template>
  <div class="partner contentRowPad">
    <div class="container">
      <div class="row sectionTitle">
        <h3>合作品牌</h3>
        <h5>choose best with our favorite brands</h5>
      </div>
      <div class="row brands">
        <ul class="nav navbar-nav">
          <li>
            <a href="#"><img src="images/brands/1.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/brands/2.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/brands/3.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/brands/4.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/brands/5.png" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.partner {
  .brands {
    ul {
      float: none;

      li {
        width: 20%;
        padding: 0 15px;

        a {
          line-height: 74px;
          border: 1px solid #cccccc;
          padding: 0 10px;
          text-align: center;
          border-radius: 0;
          overflow: hidden;

          &:hover {
            background: transparent;
            border-color: #33AC41;
          }
        }
      }
    }
  }
}
</style>

