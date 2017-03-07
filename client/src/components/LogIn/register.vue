<template>
  <section class="register-mask">
    <div class="register-con">
      <div class="upload-con">
        <input type="file" class="upload-img">
      </div>
      <input type="text" class="user-name" placeholder="用户名">
      <input type="text" class="user-pw" placeholder="密码">
      <div class="circle-big">
        <div class="circle-mid">
          <img src="../../assets/add.png">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .register-mask{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(33,33,33,.8);
    .register-con{
      width: 300px;
      height: 400px;
      background: #4C6983;
      position: absolute;
      top: 50%;
      margin-top: -200px;
      left: 50%;
      margin-left: -150px;
      .upload-con{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-image: url('../../assets/uploadImg.png');
        background-size: 100px 100px;
        border: 2px solid #ccc;
        overflow: hidden;
        margin-left: 100px;
        margin-top: 20px;
        .upload-img{
          width: 100px;
          height: 100px;
          outline: none;
          opacity: 0;
        }
      }
      .upload-con:hover{
        border-color: #273952;
      }
      input{
        width: 200px;
        height: 35px;
        outline: none;
        border: 1px solid #ccc;
        margin-left: 50px;
        margin-top: 20px;
        text-indent: 10px;
        border-radius: 4px;
      }
      .circle-big{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #fff;
        margin-top: 30px;
        margin-left: 125px;
        .circle-mid{
          width: 40px;
          height: 40px;
          background: #4C6983;
          border-radius: 50%;
          margin-top: 5px;
          margin-left: 5px;
          img{
            width: 25px;
            margin-top: 8px;
            margin-left: 8px;
          }
        }
      }
    }
  }
</style>