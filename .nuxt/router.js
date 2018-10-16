import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _32e5c52a = () => import('../pages/bike/index.vue' /* webpackChunkName: "pages/bike/index" */).then(m => m.default || m)
const _5c9488d5 = () => import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */).then(m => m.default || m)
const _263c2bec = () => import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */).then(m => m.default || m)
const _7859a1bc = () => import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */).then(m => m.default || m)
const _2eec91dc = () => import('../pages/active/join.vue' /* webpackChunkName: "pages/active/join" */).then(m => m.default || m)
const _e32a775c = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _53097e93 = () => import('../pages/bike/_id.vue' /* webpackChunkName: "pages/bike/_id" */).then(m => m.default || m)
const _710750a8 = () => import('../pages/shop/_id.vue' /* webpackChunkName: "pages/shop/_id" */).then(m => m.default || m)
const _1092195b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _32e5c52a,
			name: "bike"
		},
		{
			path: "/user",
			component: _5c9488d5,
			name: "user"
		},
		{
			path: "/user/login",
			component: _263c2bec,
			name: "user-login"
		},
		{
			path: "/shop/cart",
			component: _7859a1bc,
			name: "shop-cart"
		},
		{
			path: "/active/join",
			component: _2eec91dc,
			name: "active-join"
		},
		{
			path: "/post/:id?",
			component: _e32a775c,
			name: "post-id"
		},
		{
			path: "/bike/:id",
			component: _53097e93,
			name: "bike-id"
		},
		{
			path: "/shop/:id?",
			component: _710750a8,
			name: "shop-id"
		},
		{
			path: "/",
			component: _1092195b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
