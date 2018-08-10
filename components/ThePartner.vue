<template>
  <div class="partner contentRowPad">
    <div class="container">
      <div class="row sectionTitle">
        <h3>our brands</h3>
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
  .sectionTitle {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 45px;
  }

  .sectionTitle h3 {
    font-family: 'Montserrat', sans-serif;
  }

  .sectionTitle h3:after {
    height: 1px;
    width: 65px;
    content: '';
    background: #222222;
    margin: 15px auto;
    display: block;
  }

  .sectionTitle h5 {
    font-family: 'Montserrat', sans-serif;
  }

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

