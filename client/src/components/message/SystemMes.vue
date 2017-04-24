<template>
    <section class='sys'>
        <p class='title'>{{times}} {{texts}}</p>
    </section>
</template>
<script>
    export default {
        props: {
            time: {
                type: String,
            },
            text: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                times: this.time,
                texts: this.text
            }
        }
    }
</script>
<style scoped>
    .sys{
        text-align: center;
        margin: 10px 0;
    }
    .sys .title{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: rgba(221, 221, 221, .5);
        border: 1px solid #ddd;
        border-radius: 2px;
        color: #727272;
        font-size: 12px;
        padding: 0px 5px
    }
</style>