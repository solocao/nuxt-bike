import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _d6010e56 = () => import('../pages/bike/index.vue' /* webpackChunkName: "pages/bike/index" */).then(m => m.default || m)
const _0b06e43f = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _56a2f154 = () => import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */).then(m => m.default || m)
const _4552be78 = () => import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */).then(m => m.default || m)
const _4ec5a3b2 = () => import('../pages/active/join.vue' /* webpackChunkName: "pages/active/join" */).then(m => m.default || m)
const _149e1b88 = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _8b60a706 = () => import('../pages/bike/_id.vue' /* webpackChunkName: "pages/bike/_id" */).then(m => m.default || m)
const _4f6502dc = () => import('../pages/shop/_id.vue' /* webpackChunkName: "pages/shop/_id" */).then(m => m.default || m)
const _05bac3b1 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _d6010e56,
			name: "bike"
		},
		{
			path: "/user",
			component: _0b06e43f,
			name: "user"
		},
		{
			path: "/user/login",
			component: _56a2f154,
			name: "user-login"
		},
		{
			path: "/shop/cart",
			component: _4552be78,
			name: "shop-cart"
		},
		{
			path: "/active/join",
			component: _4ec5a3b2,
			name: "active-join"
		},
		{
			path: "/post/:id?",
			component: _149e1b88,
			name: "post-id"
		},
		{
			path: "/bike/:id",
			component: _8b60a706,
			name: "bike-id"
		},
		{
			path: "/shop/:id?",
			component: _4f6502dc,
			name: "shop-id"
		},
		{
			path: "/",
			component: _05bac3b1,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
