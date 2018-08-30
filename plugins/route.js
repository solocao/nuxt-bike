import store from '../store';
export default ({ app }) => {

  app.router.afterEach((to, from) => {
    console.log('看看route里面的');
    console.log(app.store.state.login)
    // const store = app.store;
    // console.log(app.store);
    // if (to.path === '/user') {

    // if (app.store.state.login !== true) {
    //   app.router.push({ path: '/user/login' })
    // }
    // }
  })
}