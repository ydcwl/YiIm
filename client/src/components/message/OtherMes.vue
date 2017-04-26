<template>
    <section class="oth">
       <div class="username">{{ infos.name }}</div>
       <span class="img"><img :src="infos.img"></span> <i></i><p>{{ texts }}</p>
    </section>
</template>
<script>
    export default {
        props: {
            text: {
                type: String
            },
            info: {
                type: Object
            }
        },
        data () {
            return {
                texts: this.text,
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
        border-left: 11px solid #f0f0f0;
        border-top: 8px solid #3399cc;
        margin-left: -5px;
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
     .oth .img{
         display: inline-block;
         width: 40px;
         height: 40px;
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