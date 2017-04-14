<template>
  <section class="all">
    <div class="user-panel" @mousedown="down" @mousemove="move" @mouseup="up">
      <div class="user-panel-header">
        <div class="user-panel-img">
          <img src="../../assets/uploadImg.png">
        </div>
        <p class="user-panel-name">李小明</p>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    data() {
      return {
        flag: false,
        offset: 0
      }
    },
    methods: {
      down() {
        this.flag = true;
        let self = event.currentTarget;
        let offsetx = self.style.left;
        let x = event.clientX;
        this.offset = x - offsetx;

      },
      move() {
       if(this.flag) {
         let self = event.currentTarget;
        let x = event.clientX - this.offset;
        self.style.left = x + 'px';
        console.log(event)
       }
      },
      up() {
        this.flag = false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .all{
  }
  /*用户面板*/
  .user-panel{
    position: absolute;
    width: 250px;
    height: 600px;
    border: 1px solid 4C6983;
    right: 50px;
    top: 50%;
    margin-top: -300px;
    background: #f0f0f0;
  }
  .user-panel-header{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  .user-panel-img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-panel-img img {
    width: 100%;
  }
  .user-panel-name{
    width: 100%;
    text-align: center;
  }
</style>