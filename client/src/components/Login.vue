<template>
  <div class="login-con">
    <input type="text" class="user-name">
    <input type="password" class="user-pw">
    <div class="circle-big">
      <div class="circle-mid">
        <div class="circle-sma">
          <div class="arrow"></div>
        </div>
      </div>
    </div>
    <div class="null"></div>
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
      border: 1px solid #ccc;
      height: 35px;
      width: 100%;
      box-sizing: border-box;
      text-indent: 10px;
      outline: none;
      border-radius: 4px;
      box-shadow: 0px 0px 2px 1px #ccc inset;
    }
    .user-name {
      margin-bottom: 10px;
    }
    .circle-big{
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      position: absolute;
      top: 50%;
      margin-top: -30px;
      left: 50%;
      margin-left: 95px;
      border-radius: 50%;
      text-align: center;
      box-shadow: -1px 0px 2px 0px #ccc;
      .circle-mid{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ddd;
        margin-top: 4px;
        margin-left: 4px;
        border: 1px solid #ccc;
        .circle-sma{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: skyblue;
          margin-top: 5px;
          margin-left: 5px;
          position: relative;
          .null{ }
          .arrow{
            border-top: 20px solid rgba(0,0,0,0);
            border-left: 20px solid #ccc;
            position: absolute;
            top: 10px;
            left: 5px;
            transform:rotate(-135deg);
          }
         }
      }
    }
    .null {
      width: 10px;
      height: 10px;
      background: #f0f0f0;
      left: 50%;
      margin-left: 88px;
      margin-top: -45px;
      position: absolute;
    }
  }
</style>
