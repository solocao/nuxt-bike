<template>
  <div class="user-info">
    <Card :bordered="false">
      <p slot="title">账户资料</p>
      <a href="#" slot="extra">
        <Icon type="ios-loop-strong"></Icon>
        刷新
      </a>
      <div>
        <Row>
          <Col span="5">
          <!-- <img class="avatar" :src="user.avatar" @click="visible = true" /> -->
          </Col>
          <Col span="19" style="margin-top:10px">
          <div class="info-container" style="width:100%;height:140px">
            <div class="info-item">
              <span class="key">姓名:</span>
              <span class="value">{{user.name}}</span>
            </div>
            <div class="info-item">
              <span class="key">手机号:</span>
              <span class="value">
                <span v-if="!editMobile"> {{user.mobile ===''?'暂未设置':user.mobile}}</span>
                <Input v-else v-model="user.mobile" placeholder="输入手机号" style="width: 200px"></Input>
              </span>
              <span class="action">
                <Button v-if="!editMobile" type="ghost" @click="()=>{editMobile=true;this.copyUser.mobile=this.user.mobile}" style="width:80px">设置</Button>
                <div v-else>
                  <Button type="primary" @click="updateMobile" style="width:80px">保存</Button>
                  <Button type="dashed" @click="editMobile=false" style="width:80px;margin-left:10px">取消</Button>
                </div>
              </span>
            </div>
            <div class="info-item">
              <span class="key">邮箱:</span>
              <span class="value">
                <span v-if="!editEmail">{{user.email ===''?'暂未设置':user.email}}</span>
                <Input v-else v-model="user.email" placeholder="输入邮箱" style="width: 200px"></Input>
              </span>
              <span class="action">
                <Button v-if="!editEmail" type="ghost" @click="()=>{editEmail=true;this.copyUser.email=this.user.email}" style="width:80px">设置</Button>
                <div v-else>
                  <Button type="primary" @click="updateEmial" style="width:80px">保存</Button>
                  <Button type="dashed" @click="editEmail=false" style="width:80px;margin-left:10px">取消</Button>
                </div>
              </span>
            </div>
            <div class="info-item">
              <span class="key">密码:</span>
              <span class="value">
                <span v-if="!editPassword">**********</span>
                <Input v-else v-model="copyUser.password" placeholder="Enter Password" style="width: 200px"></Input>
              </span>
              <span class="action">
                <Button v-if="!editPassword" type="ghost" @click="()=>{editPassword=true;this.copyUser.password=''}" style="width:80px">设置</Button>
                <div v-else>
                  <Button type="primary" @click="editPassword=true" style="width:80px">保存</Button>
                  <Button type="dashed" @click="editPassword=false" style="width:80px;margin-left:10px">取消</Button>
                </div>
              </span>
            </div>
          </div>
          </Col>
        </Row>
      </div>
    </Card>

  </div>
</template>
<script>
import { mapState } from 'vuex';
const crypto = require('crypto');

export default {
  data() {
    return {
      visible: false,
      editMobile: false,
      editEmail: false,
      editPassword: false,
      modalEmail: false,
      changeMobile: '',
      value: '',
      password: '',
      copyUser: {
        mobile: '',
        email: '',
        password: ''
      },
      // user: {
      //   avatar: 'https://images.nowcoder.com/images/20180304/5364495_1520164499544_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x',
      //   uname: 'Johon',
      //   mobile: '17768118595',
      //   email: 'solocao@126.com',
      //   password: '*******'
      // }

    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async updateMobile() {
      this.editMobile = true
      const params = {
        url: 'user/update',
        payload: {
          mobile: this.copyUser.mobile
        },
        auth: true
      }
      const result = await this.post(params);
      if (result.code === 1) {
        this.editMobile = false
        this.user.mobile = this.copyUser.mobile
      }
    },
    async updateEmial() {
      const params = {
        url: 'user/update',
        payload: {
          email: this.copyUser.email
        },
        auth: true
      }
      const result = await this.post(params);
      if (result.code === 1) {
        this.editEmail = false
        this.user.email = this.copyUser.email
      }
    },
    async  updatePassword() {
      const params = {
        url: 'user/update',
        payload: {
          password: crypto.createHash('md5').update(this.copyUser.password).digest('hex')
        },
        auth: true
      }
      const result = await this.post(params);
      if (result.code === 1) {
        this.editPassword = false
      }
    },
    edit() { },
    cancel(key) {

    },
    submitMobile() {
      this.modalMobile = true;
      alert('h安徽');
    },
    submitEmail() {
      alert('h安徽');
    }
  },
  mounted() {

  }

}
</script>
<style lang="stylus">
.user-info {
  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 4px;
    margin: 5px 0;
    cursor: pointer;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-item {
    height: 40px;
    display: flex;
    align-items: center;

    .key {
      font-size: 14px;
      width: 100px;
      display: flex;
      justify-content: flex-end;
      padding-right: 10px;
    }

    .value {
      width: 300px;
      font-size: 14px;
    }

    .action {
      float: right;
    }

    .auth-yes {
      border: 1px solid #19be6b;
      padding: 1px 2px;
      border-radius: 2px;
    }

    .auth-no {
    }
  }
}
</style>
Information