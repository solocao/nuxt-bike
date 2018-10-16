<template>
  <div class="index">
    <transition name="zoom">
      {{page}}
      <div class="login" v-if="page === 0">
        <span class='title'> AA电单车</span>
        <p>校园电动车市场，我们更专业</p>
        <p>但,不仅如此</p>
        <transition name="fadeUp" mode="out-in">
          <i-button type="primary" long @click.stop="start" v-if="!isLogin" key="start">
            开始吧
          </i-button>
          <i-button type="success" long @click.stop="login" v-else key="login">登录</i-button>
        </transition>
        <transition name="fadeLeft">
          <div v-show="isLogin" v-click-outside="onClickOutside">
            <i-input size="large" placeholder="用户名,没有会自动注册" ref="user" v-model="username" @on-enter="login" style="marginBottom:20px"></i-input>
            <i-input size="large" placeholder="密码" type="password" v-model="password" @on-enter="login"></i-input>
          </div>
        </transition>
      </div>
    </transition>
    <div v-if="page === 1" class="section section-login" style="zIndex: 6">
      <transition name="fade">
        <div class="fullscreen" :class="{'is-login': isLogin}" ref="wallpaper" style="height: calc(100vh - 40px)">
          其他宣传页
        </div>
      </transition>
      <div class="about-btn" @click="page = 1">AA电单车</div>
    </div>

    <div class="section section-about" style="zIndex: 5" :class="{'is-old': page > 1}">
      <em-shape-shifter v-if="page === 1"></em-shape-shifter>
      <div class="feature-list">
        <transition-group name="fadeDown">
          <div class="section-title" key="a" v-show="featureVisible">
            Easy Mock
          </div>
          <div class="section-description" key="b" v-show="featureVisible">
            p.login.about
          </div>
        </transition-group>
        <Row :gutter="100">
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <img src="/public/images/icon-swagger.png" style="margin-left: 1px;">
                </div>
                <h2>p.login.feature[0]</h2>
                <p>p.login.feature[0]</p>
              </div>
            </transition>
          </i-col>
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <img src="/public/images/icon-mock.png" style="margin-left: 1px;">
                </div>
                <h2>p.login.feature[1</h2>
                <p>p.login.feature[2</p>
              </div>
            </transition>
          </i-col>
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <img src="/public/images/icon-command.png">
                </div>
                <h2>{p.login.feature[2]</h2>
                <p>p.login.feature[2]</p>
              </div>
            </transition>
          </i-col>
        </Row>
        <Row :gutter="100">
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <Icon type="ios-book"></Icon>
                </div>
                <h2>p.login.feature[3]</h2>
                <p>p.login.feature[3]</p>
              </div>
            </transition>
          </i-col>
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <Icon type="ribbon-b"></Icon>
                </div>
                <h2>p.login.feature[4]</h2>
                <p>.login.feature[</p>
              </div>
            </transition>
          </i-col>
          <i-col span="8">
            <transition name="zoom">
              <div v-show="featureVisible">
                <div class="feature-icon">
                  <Icon type="lightbulb"></Icon>
                </div>
                <h2>p.login.feature[5</h2>
                <p>ogin.feature[5]</p>
              </div>
            </transition>
          </i-col>
        </Row>
      </div>
    </div>

    <div class="pagination">
      <div class="dot" :class="{'active': page === 0}" @click="page = 0"></div>
      <div class="dot" :class="{'active': page === 1}" @click="page = 1"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { md5 } from '../../lib/utils'
let resizeTimer

export default {
  layout: 'none',
  name: 'index',
  data() {
    return {
      isLogin: false,
      page: 0,
      username: '',
      password: '',
      copyright: '宁成信息',
      featureVisible: false,
      wallpaperVisible: false
    }
  },
  asyncData({ store }) {
    return store.dispatch('wallpaper/FETCH')
  },
  mounted() {
    // alert(this.page)
    const img = new Image()
    img.src = 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExOTUwfQ&s=01bb6c9935ded6d970fad6809a18c3ed?w=2200'
    img.onload = () => {
      this.wallpaperVisible = true
      this.$nextTick(() => {
        // this.$refs.wallpaper.style.background = `url(https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExOTUwfQ&s=01bb6c9935ded6d970fad6809a18c3ed?w=2200)`
        // this.$refs.wallpaper.style.backgroundSize = 'cover'
        // this.$refs.wallpaper.style.backgroundPosition = '50% 50%'
      })
    }
  },
  computed: {
    wallpaperCopyright() {
      return '双击666'
    }
  },
  watch: {
    page: function (current) {
      clearTimeout(resizeTimer)
      if (current === 1) {
        resizeTimer = setTimeout(() => {
          this.featureVisible = true
        }, 3000)
      } else {
        this.featureVisible = false
      }
    }
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    onClickOutside() {
      if (!this.username && !this.password) {
        this.isLogin = false
      }
    },
    start() {
      this.isLogin = true
      this.$nextTick(() => {
        this.$refs.user.focus()
      })
    },
    async login() {
      const params = {
        url: '/user/login',
        payload: {
          name: this.username,
          password: md5(this.password)
        }
      }
      const result = await this.post(params)
      if (result.code === 1) {
        console.log(result.data)
        this.set({ login: true, user: result.data })
        this.$router.push({
          path: '/'
        })
      } else {
        this.$Modal.confirm({
          title: '提示',
          content: '该用户不存在, 是否根据当前输入的用户名和密码注册用户?注：请妥善保管好你的密码，目前无法提供找回密码的通道。',
          onOk: () => {
            this.register()
          }
        })
      }
    },
    // 注册
    async register() {
      const params = {
        url: '/user/register',
        payload: {
          name: this.username,
          password: md5(this.password)
        }
      }
      // 用户名注册
      const result = await this.post(params)
      if (result.code === 1) {
        this.loadShow = false
        this.set({ login: true, user: result.data })
        this.$router.push({
          path: '/home/user'
        })
      } else {
        this.$Message.error(result.msg);
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.index {
  color: #fff;

  .pagination {
    left: 40px;
    position: absolute;
    top: 50%;
    z-index: 2147483643;
    transform: translateY(-50%);

    .dot {
      border-radius: 50%;
      box-shadow: inset 0 0 0 3px #fff;
      cursor: pointer;
      height: 16px;
      margin-bottom: 10px;
      opacity: 0.4;
      position: relative;
      width: 16px;
      box-sizing: border-box;
    }

    .dot.active {
      background: #fff;
      box-shadow: none;
    }

    .dot:hover, .dot.active {
      opacity: 1;
    }
  }

  .login {
    display: block;
    left: 50%;
    margin-top: -165px;
    margin-left: -150px;
    position: absolute;
    top: 50%;
    width: 300px;
    box-sizing: border-box;
    z-index: 7;
    text-align: center;
    font-size: 17px;
    font-weight: 700;

    .title {
      width: 230px;
      margin-bottom: 15px;
      font-size: 30px;
      font-weight: bold;
    }

    button {
      height: 45px;
      margin: 30px 0 20px 0;
    }

    input {
      margin-bottom: 10px;
      font-weight: 400;
    }

    input, input:hover, input:focus {
      border-color: #fff;
      box-shadow: none;
    }
  }

  .section {
    background: #56bc8a;
    color: #fff;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.7s cubic-bezier(0.825, 0, 0.5, 1);

    @when old {
      transform: translateY(-100%);
    }

    .section-login {
      a {
        color: #fff;
      }

      .fullscreen {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 45px;
        height: calc(100vh - 40px);

        &:before {
          content: '';
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0.6;
          background-color: rgba(0, 0, 0, 0.3);
          transition: all 0.5s;
        }

        &.is-login:before {
          background-color: rgba(0, 0, 0, 1);
        }
      }

      .about-btn {
        background: #56bc8a;
        box-shadow: inset 0 3px 0 rgba(0, 0, 0, 0.1);
        bottom: -45px;
        color: #fff;
        cursor: pointer;
        height: 45px;
        font-weight: 700;
        left: 0;
        line-height: 45px;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 2;
        transition: bottom 0.3s ease-out 1.7s;
        bottom: 0;
      }

      .links {
        position: absolute;
        bottom: 45px;
        padding: 0 12px;
        margin: 0 0 13px 0;
        line-height: 25px;
        z-index: 90210;
        transition: opacity 0.2s linear;
        text-align: left;
      }

      .fullscreen-by {
        position: absolute;
        bottom: 45px;
        padding: 0 12px;
        margin: 0 0 13px 0;
        line-height: 25px;
        z-index: 90210;
        transition: opacity 0.2s linear;
        text-align: left;
      }

      .fullscreen-by {
        right: 0;

        .avatar {
          display: inline-block;
          border-radius: 2px;
          vertical-align: -8px;
          margin: 0;
          padding: 0;
          height: 24px;
          width: 24px;
          background-size: cover;
          background-position: 50% 50%;
          background-size: 24px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
          margin-left: 10px;
        }

        img {
          display: block;
          width: 24px;
          height: 24px;
        }
      }

      .link {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        padding-right: 5px;
        padding-left: 5px;
        margin-left: -5px;
        margin-right: 12px;
        font-weight: normal;
      }
    }
  }

  .section-about {
    text-align: left;

    .section-title {
      font-size: 38px;
      font-weight: 700;
    }

    .section-description {
      font-size: 18px;
      margin-bottom: 100px;
    }

    .feature-list {
      width: 70%;
      height: 570px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -285px;
      margin-left: -35%;
      font-size: 13px;
    }

    .ivu-col {
      min-height: 200px;
      margin-bottom: 20px;
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #fff;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      font-size: 22px;
      color: #2d8cf0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

      img {
        width: 25px;
      }

      i {
        font-size: 32px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
</style>
