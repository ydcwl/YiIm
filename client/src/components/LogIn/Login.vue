<template>
  <div class="login-con">
    <input type="text" class="user-name">
    <input type="password" class="user-pw">
    <div class="circle-big">
      <div class="circle-mid">
        <div class="circle-sma">
          <img src="../../assets/login.png">
        </div>
      </div>
    </div>
    <div class="null"></div>
    <div class="circle-big register">
      <div class="circle-mid">
        <div class="circle-sma">
          <img src="../../assets/register.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-con{
    width: 250px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -125px;
    margin-top: -40px;
    input{
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
    .circle-big{
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
      .circle-mid{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ddd;
        margin-top: 4px;
        margin-left: 4px;
        border: 1px solid #38556A;
        .circle-sma{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #4C6983;
          margin-top: 5px;
          margin-left: 5px;
          position: relative;
          img{
            width: 20px;
            margin-top: 12px;
          }
         }
         .circle-sma:hover{
           .arrow{
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
      img{
        margin-top: 10px !important;
        margin-left: 2px;
      }
    }
  }
</style>
