<template>
    <section class="oth">
       <div class="username">{{ infos.username }}</div>
       <span class="img"><img :src="infos.userimg"></span> <i></i><p><img :src="imgs"></p>
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
        data () {
            return {
                imgs: this.img,
                infos: this.info
            }
        }
    }
</script>
<style scoped>
    .oth {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .oth i{
        box-sizing: content-box;
        display: inline-block;
        border-left: 11px solid #fff;
        border-top: 8px solid #3399cc;
        margin-left: -7px;
    }
     .oth .username{
         text-align: left;
         font-size: 12px;
         padding-left: 10px;
         padding-bottom: 4px;
         color: #333;
     }
     .oth p{
         max-width: 200px;
         display: inline-block;
         background: #3399cc;
         padding: 5px;
         color: #252424;
         border-radius: 2px;
         font-size: 14px;
         vertical-align: middle;
     }
     .oth p img {
         width: 100%;
     }
     .oth .img{
         display: inline-block;
         width: 40px;
         height: 40px;
         background: #3399cc;
         vertical-align: middle;
         border-radius: 50%;
         margin-left: 5px;
         overflow: hidden;
         border: 1px solid #ccc;
     }
       .oth .img img{
          width: 100%;
          height: 100%;
      }
</style>