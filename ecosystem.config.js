module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      //项目的名字
      name: 'nuxt-bike',
      //项目主入口（Node.js）
      script: '',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '139.196.85.194',
      //需要部署的分支
      ref: 'origin/master',
      // 仓库地址
      repo: 'git@github.com:solocao/nuxt-bike.git',
      path: '/www//wwwroot/nuxt-bike',
      'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env production'
    },
    dev: {
      user: 'root',
      host: '139.196.85.194',
      ref: 'origin/master',
      repo: 'git@github.com:solocao/nuxt-bike.git',
      path: '/www//devroot/nuxt-bike',
      'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
};
