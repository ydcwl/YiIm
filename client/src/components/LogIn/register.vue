<template>
  <section class="register-mask" @click="hiddenMask" v-if="isShow">
    <div class="register-con animated bounceInDown">
      <div class="upload-con">
        <input type="file" class="upload-img" v-on:change="uploadImg">
        <img :src="showImg" alt="">
      </div>
      <input type="text" class="user-name" placeholder="用户名" v-model="userName">
      <input type="text" class="user-pw" placeholder="密码" v-model="userPW">
      <div class="circle-big">
        <div class="circle-mid" @click="adduser">
          <img src="../../assets/add.png">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      userName: '',
      userPW: '',
      userImg: '',
      showImg: './static/img/uploadImg.png',
      pageShow: this.show
    }
  },
  computed: {
    isShow: function () {
      return this.show;
    }
  },
  methods: {
    uploadImg () {
      var _this = this;
      var self = event.currentTarget;
      var file = self.files[0];
      console.log(file.type)
      if(/\.(png|jpg)$/i.test(self.value)){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          _this.showImg = this.result;//显示图片
          _this.userImg = this.result.split('data:image/png;base64,')[1]//上传地址
          self.value = ''
        }
      }else{//提示图片格式

      }
    },
    adduser () {
      if (this.userName == '' || this.userName == null) {//提示不能为空

      } else if (this.userPw == '' || this.userPw == null) {

      } else if (this.userImg == '' || this.userImg == null) {

      } else {
        this.hiddenMask()
        this.$emit('adduser', {userName: this.userName, userPW: this.userPW, userImg: this.userImg})
      }
    },
    hiddenMask () {
      this.$emit('clickmask');
    }
  }
}
</script>
<style lang="scss" scoped>
  .register-mask{
    position: fixed;
    top: 0px;
    left: 0px;
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
      .upload-con{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #ccc;
        overflow: hidden;
        margin-left: 100px;
        margin-top: 20px;
        position: relative;
        .upload-img{
          width: 100px;
          height: 100px;
          outline: none;
          margin-top: 0px;
          margin-left: 0px;
          border-radius: 50%;
          opacity: 0;
        }
        img{
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: -1;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .upload-con:hover{
        border-color: #273952;
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