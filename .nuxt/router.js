import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0d238d02 = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _d1c7bcd0 = () => import('../pages/bike/index.vue' /* webpackChunkName: "pages/bike/index" */).then(m => m.default || m)
const _52699fce = () => import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */).then(m => m.default || m)
const _df83d962 = () => import('../pages/active/join.vue' /* webpackChunkName: "pages/active/join" */).then(m => m.default || m)
const _4cd3401c = () => import('../pages/user/login.1.vue' /* webpackChunkName: "pages/user/login.1" */).then(m => m.default || m)
const _4956efbf = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _0df5aa00 = () => import('../pages/bike/_id.vue' /* webpackChunkName: "pages/bike/_id" */).then(m => m.default || m)
const _2bf37c15 = () => import('../pages/shop/_id.vue' /* webpackChunkName: "pages/shop/_id" */).then(m => m.default || m)
const _b09b25e4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/user",
			component: _0d238d02,
			name: "user"
		},
		{
			path: "/bike",
			component: _d1c7bcd0,
			name: "bike"
		},
		{
			path: "/user/login",
			component: _52699fce,
			name: "user-login"
		},
		{
			path: "/active/join",
			component: _df83d962,
			name: "active-join"
		},
		{
			path: "/user/login.1",
			component: _4cd3401c,
			name: "user-login.1"
		},
		{
			path: "/post/:id?",
			component: _4956efbf,
			name: "post-id"
		},
		{
			path: "/bike/:id",
			component: _0df5aa00,
			name: "bike-id"
		},
		{
			path: "/shop/:id?",
			component: _2bf37c15,
			name: "shop-id"
		},
		{
			path: "/",
			component: _b09b25e4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
