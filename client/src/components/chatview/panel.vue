<template>
  <section class="all">
    <!--用户面板-->
    <div class="user-panel">
      <div class="user-panel-header" @mousedown="down" @mousemove="move" @mouseup="up">
        <div class="user-panel-img">
          <img :src="userInfo.image">
        </div>
        <p class="user-panel-name">{{ userInfo.name }}</p>
        <div class="window-tool-con">
          <img src="../../assets/reduce.png" alt="" class="window-tool">
          <img src="../../assets/close.png" alt="" class="window-tool">
        </div>
      </div>
      <div class="user-panel-list-con">
        <p class="user-panel-list" @dblclick="chat(v)" v-for="v of friendList">
          <img :src="v.userImage"> {{ v.username }}
        </p>
      </div>
    </div>
    <!--用户面板结束-->
    <!--聊天界面-->
    <talk-view :list="talkList" :current="current" :show="show"></talk-view>
    <!--聊天界面结束-->
  </section>
</template>
<script>
  import TalkView from './talkView.vue'
  export default {
    mounted() {
      this.userId = this.$store.state.id;
      if (!!this.userId) {
        this.getUserInfo();
        this.getFriendList();
      } else {
        this.$router.push({
          path: '/login'
        });
      }
    },
    components: {
      'talk-view': TalkView
    },
    data() {
      return {
        flag: false,
        offsetX: 0,
        offsetY: 0,
        userInfo: {},
        friendList: [],
        talkList: [],
        userId: '',
        current: {
          name: '',
          img: ''
        },
        show: false
      }
    },
    methods: {
      down() {
        event.preventDefault();
        this.flag = true;
        this.offsetX = event.offsetX;
        this.offsetY = event.offsetY;
      },
      move() {
        event.preventDefault();
        if (this.flag) {
          let self = event.currentTarget.parentNode;
          let x = event.clientX - this.offsetX;
          let y = event.clientY - this.offsetY;
          self.style.left = x + 'px';
          self.style.top = y + 'px';
        }
      },
      up() {
        event.preventDefault();
        this.flag = false;
      },
      chat(user) {
        event.preventDefault();
        //let socket = io.connect('http://127.0.0.1:3000');
        let len = this.talkList.length;
        for (let i = 0; i < len; i++) {
          if (user.username === this.talkList[i].username) {
            return;
          }
        }
        this.show = true;
        this.talkList.push(user);
        this.current.name = user.username;
        this.current.img = user.userImage;
      },
      getUserInfo() {
        let _this = this;
        _this.$http.get('/userInfo?id=' + _this.userId).then(data => {
          if (data.data.code == 200) {
            _this.userInfo = data.data.userInfo;
          }
        })
      },
      getFriendList() {
        let _this = this;
        _this.$http.get('/friendList?id=' + _this.userId).then(data => {
          if (data.data.code == 200) {
            _this.friendList = data.data.list;
          }
        })
      }

    }
  }

</script>
<style lang="scss" scoped>
  .all {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  /*用户面板*/

  .user-panel {
    position: absolute;
    width: 250px;
    height: 600px;
    right: 50px;
    top: 20px;
    background: #f0f0f0;
    z-index: 999;
    box-shadow: 0px 0px 5px 1px #4C6976
  }

  .user-panel-header {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #ccc;
    cursor: move;
    background: #ccc;
  }
  /*窗口工具*/

  .user-panel-header .window-tool-con {
    position: absolute;
    right: 0px;
    top: 10px;
    height: 14px;
    display: flex;
    cursor: pointer;
  }

  .user-panel-header .window-tool-con img {
    width: 14px;
    margin-right: 8px;
  }

  .user-panel-header .window-tool-con img:hover {
    background: #aaa;
  }

  .user-panel-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  .user-panel-img img {
    width: 100%;
    cursor: pointer;
  }

  .user-panel-name {
    width: 100%;
    text-align: center;
  }
  /*用户列表*/

  .user-panel-list-con {
    width: 100%;
    position: absolute;
    top: 150px;
    bottom: 0px;
    overflow: auto;
  }

  .user-panel-list {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 0px;
    cursor: pointer;
  }
  /*.user-panel-list:last-child{
     border: 0px;
   }*/

  .user-panel-list img {
    width: 40px;
    vertical-align: middle;
    margin: 0px 10px;
  }
  /*滚动条样式*/

   ::-webkit-scrollbar {
    width: 5px;
    background: #f0f0f0;
    border-radius: 2px;
  }

   ::-webkit-scrollbar-thumb {
    width: 5px;
    background: #aaa;
    border-radius: 2px;
  }

</style>
