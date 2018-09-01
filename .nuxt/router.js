import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8e570360 = () => import('../pages/bike/index.vue' /* webpackChunkName: "pages/bike/index" */).then(m => m.default || m)
const _2edbe9ba = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _0ef8e65e = () => import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */).then(m => m.default || m)
const _b4dd64d2 = () => import('../pages/active/join.vue' /* webpackChunkName: "pages/active/join" */).then(m => m.default || m)
const _99e8b266 = () => import('../pages/shop/_id.vue' /* webpackChunkName: "pages/shop/_id" */).then(m => m.default || m)
const _d5e45690 = () => import('../pages/bike/_id.vue' /* webpackChunkName: "pages/bike/_id" */).then(m => m.default || m)
const _5f21cb12 = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _2170fd56 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/bike",
			component: _8e570360,
			name: "bike"
		},
		{
			path: "/user",
			component: _2edbe9ba,
			name: "user"
		},
		{
			path: "/user/login",
			component: _0ef8e65e,
			name: "user-login"
		},
		{
			path: "/active/join",
			component: _b4dd64d2,
			name: "active-join"
		},
		{
			path: "/shop/:id?",
			component: _99e8b266,
			name: "shop-id"
		},
		{
			path: "/bike/:id",
			component: _d5e45690,
			name: "bike-id"
		},
		{
			path: "/post/:id?",
			component: _5f21cb12,
			name: "post-id"
		},
		{
			path: "/",
			component: _2170fd56,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
