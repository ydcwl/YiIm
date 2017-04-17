<template>
  <div class="login-con">
    <input type="text" class="user-name" placeholder="用户名">
    <input type="password" class="user-pw" placeholder="密码">
    <div class="circle-big">
      <div class="circle-mid">
        <div class="circle-sma" @click="postData">
          <img src="../../assets/login.png">
        </div>
      </div>
    </div>
    <div class="null"></div>
    <div class="circle-big register">
      <div class="circle-mid">
        <div class="circle-sma" @click="showRegisterPage">
          <img src="../../assets/register.png" alt="">
        </div>
      </div>
    </div>
    <register :show="showRegister" @adduser="register" @clickmask="hiddenRegisterPage"></register>
  </div>
</template>

<script>
  import Register from './register.vue'
  export default {
    components: {
      'register': Register
    },
    data() {
      return {
        showRegister: false,
      }
    },
    methods: {
      register(data) { //注册
        let _this = this;
        this.$http.post(host + '/register', {name: data.userName, pw: _this.$md5(data.userPW), img: data.userImg})
          .then((data) => {
           if(data.data.error_code == 200) {
             let name = data.data.name;
             let id = data.data.id;

             _this.setUserInfo(name, id);
           }else{
            //注册不成功

           }
          })
          .catch(err => {
            console.log(err)
          })
      },
      showRegisterPage() {
        this.showRegister = true;
      },
      hiddenRegisterPage() {
        this.showRegister = false;
      },
      postData() { //登录
        //提交数据
        let _this = this;
        this.$http.post(host + '/login', {name: 'cwl', pw: '123'})
          .then(data => {
            if (data.data.error_code == 200) {
              let name = data.data.name;
              let id = data.data.id;
              _this.setUserInfo(name, id);
            }else{
              //登录不成功
            }
          })
          .catch(err => {
            console.log(err)
          });
      },
      setUserInfo(name, id) {
        this.$store.dispatch('setname', name);
        this.$store.dispatch('setid', id);
        this.$router.push('/');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-con {
    width: 250px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -125px;
    margin-top: -40px;
    input {
      border: 0px solid #ccc;
      height: 35px;
      width: 100%;
      box-sizing: border-box;
      text-indent: 10px;
      outline: none;
      border-radius: 4px;
      box-shadow: 0px 0px 3px 0px #38556A inset;
    }
    .user-name {
      margin-bottom: 10px;
    }
    .circle-big {
      width: 60px;
      height: 60px;
      background: #4C6983;
      position: absolute;
      top: 50%;
      margin-top: -30px;
      left: 50%;
      margin-left: 95px;
      border-radius: 50%;
      text-align: center;
      box-shadow: -1px 0px 3px 0px #4C6983;
      .circle-mid {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ddd;
        margin-top: 4px;
        margin-left: 4px;
        border: 1px solid #38556A;
        .circle-sma {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #4C6983;
          margin-top: 5px;
          margin-left: 5px;
          position: relative;
          img {
            width: 20px;
            margin-top: 12px;
          }
        }
        .circle-sma:hover {
          .arrow {
            transform: rotate(225deg);
            transition: transform 2s;
          }
        }
      }
    }
    .null {
      width: 10px;
      height: 10px;
      background: #4C6983;
      left: 50%;
      margin-left: 88px;
      margin-top: -45px;
      position: absolute;
    }
    .register {
      margin-top: 60px;
      margin-left: -30px;
      img {
        margin-top: 10px !important;
        margin-left: 2px;
      }
    }
  }

</style>
