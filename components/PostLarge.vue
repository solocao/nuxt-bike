<template>
  <div class="cs-module-2">
    <article class="cs-post">

      <div class="cs-post-footer">
        <div class="cs-footer-date">
          <div class="cs-date-year">2016</div>
          <div class="cs-date-day-month">6 oct</div>
        </div>
        <div class="cs-footer-icon" title="Image post">
          <i class="fa fa-file-image-o"></i>
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
        <div class="cs-footer-comments" title="156 Comments">
          <span>Comments</span>
          <b>0</b>
        </div>
      </div>

      <div class="cs-post-container">

        <div class="cs-post-thumbnail">
          <div class="cs-post-rating" title="Rating 6.75">6.75</div>
          <a href="post-standard.html"><img src="http://view.jqueryfuns.com/%E9%A2%84%E8%A7%88-/2016/8/3/540228123fb5a2f1102d67d780a07668/photos/8.jpg" alt="Infinity"></a>
        </div>

        <div class="cs-post-inside-container">

          <div class="cs-post-header">
            <div class="cs-category-links">
              <a href="blog-category.html">Kitchen</a>
            </div>
            <h3>
              <a href="post-standard.html">Why Arsenal Risks Missing Out on Champions League</a>
            </h3>
          </div>

          <div class="cs-post-content">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
            <a href="post-standard.html" class="read-more">View post</a>
          </div>
        </div>
      </div>
    </article>
  </div>

</template>

<style lang="stylus">
.cs-module-2 .cs-post {
  margin-bottom: 40px;
  overflow: hidden;
}

.cs-module-2 .cs-post.sticky {
  background-color: #f5f5f5;
  padding: 15px;
}

.cs-module-2 .cs-post-footer {
  text-align: center;
  border-right: 1px solid #eee;
  float: left;
  margin-right: -1px;
}

.cs-module-2 .cs-footer-date {
  border-bottom: 1px solid #eee;
  display: block;
  float: none;
  padding: 10px 5px;
}

.cs-module-2 .cs-footer-date .cs-date-year {
  font-size: 16px;
}

.cs-module-2 .cs-footer-date .cs-date-day-month {
  font-size: 10px;
}

.cs-module-2 .cs-footer-icon {
  text-align: center;
  display: block;
  float: none;
  border-bottom: 1px solid #eee;
  padding-bottom: 11px;
  padding: 15px 5px 10px 5px;
}

.cs-module-2 .cs-footer-icon i {
  font-size: 24px;
}

.cs-module-2 .cs-footer-share {
  border-bottom: 1px solid #eee;
  float: none;
  display: block;
  padding: 10px 5px;
}

.cs-module-2 .cs-footer-share span, .cs-module-2 .cs-footer-share a {
  display: block;
  margin-bottom: 5px;
}

.cs-module-2 .cs-footer-comments {
  display: block;
  text-align: center;
  float: none;
  padding: 10px 5px;
}

.cs-module-2 .cs-footer-comments span {
  display: block;
  margin: 0;
  line-height: 1.2;
}

.cs-module-2 .cs-post-container {
  overflow: hidden;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

.cs-module-2 .cs-post-thumbnail {
  float: left;
  width: 50%;
  margin-right: 20px;
  margin-bottom: 0;
}

.cs-module-2 .cs-post.no-image .cs-post-thumbnail {
  display: none;
}

.cs-module-2 .cs-post-inside-container {
  overflow: hidden;
}

.cs-module-2 .cs-post-header h3 {
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 15px;
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
  height: 280px;
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
</style>

