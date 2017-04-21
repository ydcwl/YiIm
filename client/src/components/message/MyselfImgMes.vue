<template>
    <section class="mys">
        <div class="username">{{ _info.username }}</div>
        <p><img :src="_img"></p><i></i><span class="img"><img :src="_info.userimg"></span>
    </section>
</template>
<script>
    export default {
        props: {
            img: {
                type: String
            },
            info: {
                type: Object
            }
        },
        computed: {
            _img() {
                return this.img;
            },
            _info() {
                return this.info;
            }
        },
        // data () {
        //     return {
        //         imgs: this.img,
        //         infos: this.info
        //     }
        // }
    }
</script>
<style scoped>
    .mys {
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: right;
    }
    .mys i{
        box-sizing: content-box;
        display: inline-block;
        border-right: 11px solid #fff;
        border-top: 8px solid #CDD7E2;
        align-items: center;
    }
     .mys p{
         max-width: 200px;
         display: inline-block;
         background: #CDD7E2;
         padding: 5px;
         color: #252424;
         border-radius: 2px;
         font-size: 14px;
         vertical-align: middle;
         text-align: left;
     }
     .mys .username{
         text-align: right;
         font-size: 12px;
         padding-right: 10px;
         padding-bottom: 4px;
         color: #333;
     }
     .mys p img{
         width: 100%;
     }
      .mys .img{
         display: inline-block;
         width: 40px;
         height: 40px;
         vertical-align: middle;
         border-radius: 50%;
         margin-right: 5px;
         overflow: hidden;
         border: 1px solid #ccc;
     }
     .mys .img img{
          width: 100%;
          height: 100%;
    }
</style>