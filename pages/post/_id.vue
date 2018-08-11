<template>
  <div class="container">
    <Col span="16">
    <article class="cs-post cs-single-post">
      <div class="cs-post-thumbnail">
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/257659076&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>

      <div class="cs-post-header">
        <h1>Emma Thompson Hosted an Anti-Fracking Bake Off and It Got Pretty Messy</h1>
        <div class="cs-post-header-meta">
          <a href="#">Fashion</a>
          <a href="#">35 Comments</a>
          <a href="#">John Doe</a>
        </div>
      </div>

      <div class="cs-post-footer">
        <div class="cs-footer-date">
          <div class="cs-date-year">2016</div>
          <div class="cs-date-day-month">16 sep</div>
        </div>
        <div class="cs-footer-icon" title="Standard post">
          <i class="fa fa-file-text-o"></i>
        </div>
        <div class="cs-footer-share">
          <span>share</span>
          <a href="http://www.facebook.com/" target="_blank">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="http://www.twitter.com/" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="http://www.pinterest.com/" target="_blank">
            <i class="fa fa-pinterest"></i>
          </a>
        </div>
      </div>

      <div class="cs-post-content">
        <p class="dropcap">Rellentesque consectetur ex magna, venenatis fringilla nisi sodales rhoncus. Etiam consectetur, leo pellentesque scelerisque mollis, lectus purus vestibulum felis, in lacinia nibh est eu odio. Etiam vel porttitor lorem, eget varius nisl. Nullam consectetur lectus eget ipsum tincidunt, eu lobortis magna vestibulum. Duis sed laoreet felis, in fringilla libero. Suspendisse laoreet lacinia dui id posuere. Vivamus ac nisi nisi. Nulla enim nisl, condimentum id lorem ut, maximus facilisis nibh. Etiam libero nulla, mollis a pellentesque sit amet, dignissim eget nisl. Morbi in commodo diam. Morbi mollis urna sed tellus rhoncus, non cursus augue imperdiet. Donec orci augue, vulputate eu pellentesque in, varius ut urna. Sed ut dolor volutpat, dignissim elit eu, euismod sem. Proin velit nunc, efficitur quis vestibulum et, vestibulum ut libero. Nulla facilisi. Cras in semper nisl, at convallis metus. Proin eu ipsum ac velit interdum mattis at a est.</p>
        <p class="pullquotes left">Maecenas purus libero, bibendum at tempus et, pulvinar ut urna.</p>
        <p>Nam a molestie nunc. Etiam nisi tortor, cursus quis lorem at, posuere dapibus neque. Morbi leo dolor, consequat at sapien ac, tempus aliquet tortor. Pellentesque vel neque rhoncus justo auctor varius sit amet et nibh. Nullam scelerisque, elit nec malesuada cursus, lorem augue fermentum orci, nec euismod arcu arcu at justo. Integer et metus id leo interdum sollicitudin. Donec orci augue, vulputate eu pellentesque in, varius ut urna. Sed ut dolor volutpat, dignissim elit eu, euismod sem. Proin velit nunc, efficitur quis vestibulum et, vestibulum ut libero. Nulla facilisi. Cras in semper nisl, at convallis metus. Proin eu ipsum ac velit interdum mattis at a est. Donec orci augue, vulputate eu pellentesque in, varius ut urna. Sed ut dolor volutpat, dignissim elit eu, euismod sem. Proin velit nunc, efficitur quis vestibulum et, vestibulum ut libero. Nulla facilisi. Cras in semper nisl, at convallis metus.</p>
      </div>

      <div class="cs-review-container">
        <div class="cs-criteria-area">
          <div class="cs-review-bar">
            <div class="cs-criteria">Criteria #1</div>
            <div class="cs-criteria-score">8.0</div>
            <div class="cs-criteria-bar">
              <div style="width: 80%"></div>
            </div>
          </div>
          <div class="cs-review-bar">
            <div class="cs-criteria">Criteria #2</div>
            <div class="cs-criteria-score">3.5</div>
            <div class="cs-criteria-bar">
              <div style="width: 35%"></div>
            </div>
          </div>
          <div class="cs-review-bar">
            <div class="cs-criteria">Criteria #3</div>
            <div class="cs-criteria-score">9.3</div>
            <div class="cs-criteria-bar">
              <div style="width: 93%"></div>
            </div>
          </div>
        </div>
        <div class="cs-summary-area">
          <div class="cs-summary-lists">
            <div class="cs-positive-list">
              <span>Positive</span>
              <ul>
                <li>Positive review</li>
                <li>Positive review</li>
                <li>Positive review</li>
              </ul>
            </div>
            <div class="cs-negative-list">
              <span>Negative</span>
              <ul>
                <li>Negative review</li>
                <li>Negative review</li>
                <li>Negative review</li>
              </ul>
            </div>
          </div>
          <div class="cs-summary-score">
            <span class="cs-score">6.93</span>
            <span class="cs-title">Awesome</span>
          </div>
        </div>
      </div>

      <div class="cs-post-tags">
        <a href="#">music</a>
        <a href="#">design</a>
        <a href="#">art</a>
      </div>
    </article>
    </Col>

    <Col span="8"></Col>

  </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus">
/* ------------------------------------------------------------------
    7. Blog
------------------------------------------------------------------- */
/* ------------------------------------------------------------------
    7.1 Post - article
------------------------------------------------------------------- */
/* Header */
.cs-post-header h3 {
  margin-top: 0;
}

.cs-post-header h3 a {
  display: block;
}

/* Category */
.cs-category-links {
  text-transform: uppercase;
  font-size: 12px;
}

.cs-category-links:before, .cs-category-links:after {
  content: ' ';
  display: table;
}

.cs-category-links:after {
  clear: both;
}

.cs-category-links a {
  float: left;
}

.cs-category-links a:after {
  content: '/';
  margin: 0 4px 0 0;
  color: #ddd;
}

.cs-category-links a:last-child:after {
  display: none;
}

/* Thumbnail */
.cs-post-thumbnail {
  margin-bottom: 15px;
  position: relative;
}

article.no-image .cs-post-thumbnail {
  margin-bottom: 5px;
}

.cs-module-3 article.no-image .cs-post-header h3 {
  margin-bottom: 5px;
}

article.no-image .cs-post-thumbnail .cs-post-comments {
  position: static;
  padding: 0;
}

.cs-post-thumbnail img, .cs-post-thumbnail iframe, .cs-post-thumbnail video, .cs-post-thumbnail audio {
  width: 100%;
}

.cs-post-thumbnail img {
  width: 100%;
  opacity: 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.cs-post-thumbnail img:hover {
  opacity: 0.8;
}

.cs-post-thumbnail .cs-post-rating {
  position: absolute;
  right: 1px;
  top: 1px;
  color: #fff;
  font-size: 26px;
  padding: 15px;
  cursor: default;
  z-index: 1;
}

.cs-post-thumbnail .cs-post-comments {
  position: absolute;
  left: 1px;
  bottom: 1px;
  background-color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  padding: 4px 8px;
  z-index: 1;
}

.cs-post-thumbnail .cs-post-comments a {
  color: #000;
}

.cs-post-thumbnail .cs-credit-line {
  position: absolute;
  right: 1px;
  bottom: 1px;
  background-color: #000;
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  padding: 4px 8px;
  z-index: 1;
}

.cs-post-thumbnail .cs-credit-line a {
  color: #fff;
  text-decoration: underline;
}

/* Slider */
.cs-post-slider .swiper-button-prev, .cs-post-slider .swiper-button-next {
  height: 80px;
  margin-top: -40px;
  width: 40px;
  line-height: 80px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.cs-post-slider .swiper-button-prev:hover, .cs-post-slider .swiper-button-next:hover {
  background-color: #000;
}

/* Content */
.cs-post-content {
  color: #999;
}

.cs-post-content a.read-more {
  border: 1px solid #ddd;
  padding: 6px 12px;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  color: #999;
}

.cs-post-content a.read-more:hover {
  border: 1px solid #000;
  color: #000;
}

/* Footer */
.cs-post-footer:before, .cs-post-footer:after {
  content: ' ';
  display: table;
}

.cs-post-footer:after {
  clear: both;
}

/* Date */
.cs-footer-date {
  float: left;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 15px;
}

.cs-footer-date .cs-date-year {
  font-size: 22px;
  line-height: 1;
  margin-bottom: 2px;
  color: #999;
}

.cs-footer-date .cs-date-day-month {
  font-size: 13px;
  line-height: 1;
  color: #000;
}

/* Icon */
.cs-footer-icon {
  float: left;
  color: #ddd;
  padding: 15px;
}

.cs-footer-icon i {
  font-size: 28px;
}

/* Share */
.cs-footer-share {
  float: left;
  padding: 15px;
}

.cs-footer-share span {
  font-size: 10px;
  text-transform: uppercase;
  color: #bbb;
}

.cs-footer-share a {
  font-size: 16px;
}

.cs-footer-share a:hover {
  color: #000;
}

/* Comments */
.cs-footer-comments {
  float: left;
  font-size: 12px;
  text-transform: uppercase;
  color: #000;
  padding: 15px;
}

.cs-footer-comments span {
  font-size: 10px;
  margin-right: 4px;
  color: #999;
}

.cs-footer-comments b {
  font-size: 12px;
  color: #000;
}
</style>

