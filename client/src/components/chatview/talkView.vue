<template>
  <section class="talk-view">
    <!--左边区域-->
    <div class="talk-view-left">
      <p class="talk-user-list" v-for="v of userList" @click="changeTalk(v.name, v.img)">
        <img :src="v.img"> {{ v.name }}<img src="../../assets/close.png" class="close-view">
      </p>
    </div>
    <!--右边区域-->
    <div class="talk-view-right">
      <div class="header" @mousedown="down" @mousemove="move" @mouseup="up">
        <img :src="currentImg">{{ currentName }}
        <div class="window-tool-con">
          <img src="../../assets/reduce.png" alt="" class="window-tool">
          <img src="../../assets/close.png" alt="" class="window-tool">
        </div>
      </div>
      <div class="show-view">
        <p class="talk-list"></p>
      </div>
      <div class="edit">
        <div class="talk-tool-con">
          <img src="../../assets/face.png">
          <div class="upload-con"><input type="file" class="upload" @change="uploadImg"><img src="../../assets/img.png"></div>
        </div>
        <div class="edit-text" contenteditable="true" @keyup.enter="send">

        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    mounted() {
      let len = this.userList.length;
      this.currentName = this.userList[len - 1].name;
      this.currentImg = this.userList[len - 1].img;
    },
    data() {
      return {
        flag: false,
        userList: [{
            name: '我走了',
            img: '/static/img/uploadImg.png'
          },
          {
            name: '我走了',
            img: '/static/img/logo.png'
          },
          {
            name: '我走了',
            img: '/static/img/uploadImg.png'
          },
          {
            name: '我走了',
            img: '/static/img/uploadImg.png'
          },
        ],
        currentName: '',
        currentImg: '',
        selectImg: ''
      }
    },
    methods: {
      down() {
        this.flag = true;
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
      },
      move() {
        if (this.flag) {
          let self = event.currentTarget.parentNode.parentNode;
          let x = event.clientX - this.offsetX - 210;
          let y = event.clientY - this.offsetY;
          self.style.left = x + 'px';
          self.style.top = y + 'px';
        }
      },
      up() {
        this.flag = false;
      },
      changeTalk(name, img) {
        this.currentName = name;
        this.currentImg = img;
      },
      uploadImg() {
        let _this = this;
        let self = event.currentTarget;
        let file = event.currentTarget.files[0];
        let reader = new FileReader();

        reader.onload = function () {
          _this.selectImg = this.result;
          let img = document.createElement('img');
          img.src = _this.selectImg;
          img.style.width = '30px';
          img.style.height = '30px';
          let edit = self.parentNode.parentNode.parentNode.children[1];
          edit.appendChild(img);
          file = '';
        };
        reader.readAsDataURL(file);

      },
      send() {
        let self = event.currentTarget;
        let text = self.innerHTML;
        this.handerString(text);
        self.innerHTML = '';
      },
      handerString(text) {
        let has = /^\w*<img/.test(text);

      }
    }
  }

</script>
<style lang="scss" scoped>
  .talk-view {
    width: 700px;
    height: 500px;
    position: absolute;
    left: 100px;
    top: 50px;
    display: flex;
    justify-content: center;
  }
  /*左区域*/

  .talk-view-left {
    width: 30%;
    height: 100%;
    background: #ccc;
    overflow: auto;
  }

  .talk-view-left .talk-user-list {
    width: 90%;
    margin-left: 5%;
    height: 40px;
    padding: 5px 0px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }

  .talk-view-left .talk-user-list:hover {
    background: #bbb;
  }

  .talk-view-left .talk-user-list img {
    width: 40px;
    margin: 0px 5px;
    vertical-align: middle;
  }

  .talk-view-left .talk-user-list .close-view {
    width: 14px;
    position: absolute;
    right: 5px;
    top: 16px;
    display: none;
  }

  .talk-view-left .talk-user-list:hover .close-view {
    display: block;
  }
  /*右区域*/

  .talk-view-right {
    width: 70%;
    height: 100%;
    background: #f0f0f0;
  }

  .talk-view-right .header {
    width: 100%;
    height: 70px;
    background: #ddd;
    line-height: 70px;
    cursor: move;
  }

  .talk-view-right .header img {
    width: 40px;
    margin: 0px 10px;
    vertical-align: middle;
  }
  /*窗口工具*/

  .talk-view-right .header .window-tool-con {
    position: absolute;
    right: 0px;
    top: 10px;
    height: 14px;
    display: flex;
    cursor: pointer;
  }

  .talk-view-right .header .window-tool-con img {
    width: 14px;
  }

  .talk-view-right .header .window-tool-con img:hover {
    background: #aaa;
  }

  .talk-view-right .show-view {
    width: 100%;
    height: 300px;
    overflow: auto;
  }

  .talk-view-right .edit {
    width: 100%;
    height: 130px;
    border-top: 1px solid #ccc;
  }

  .talk-view-right .edit .talk-tool-con {
    width: 100%;
    height: 20px;
    padding: 5px 0px;
  }

  .talk-view-right .edit .talk-tool-con img {
    height: 100%;
    margin-left: 10px;
  }

  .talk-view-right .edit .talk-tool-con .upload-con {
    display: inline-block;
    height: 100%;
    width: 20px;
    overflow: hidden;
    background: red;
  }

  .talk-view-right .edit .talk-tool-con .upload-con img {
    height: 100%;
  }

  .talk-view-right .edit .talk-tool-con .upload-con .upload {
    position: absolute;
    width: 20px;
    height: 20px;
  }

  .edit-text {
    width: 100%;
    height: 100px;
    outline: none;
    padding: 5px;
    font-size: 14px;
  }

   ::-webkit-scrollbar {
    width: 4px;
  }

   ::-webkit-scrollbar-thumb {
    width: 4px;
    background: #aaa;
    border-radius: 2px;
  }

</style>
