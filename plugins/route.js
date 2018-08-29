export default ({ app }) => {
  const store = app.store;
  app.router.afterEach((to, from) => {
    if (to.path === '/user') {
      console.log('看看咯啊')
      console.log(store.state)
      if (store.state.login === false) {
        app.router.push({ path: '/user/login' })
      }
    }
  })
}