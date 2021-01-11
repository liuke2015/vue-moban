<template>
  <div id="page21">
    二维码页面
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>

<script>
  import qrcodeVue from 'qrcode.vue'
  export default {
    name: "page21",
    msg: "页面二-1",
    components: {
      qrcodeVue,
    },
    data() {
      return {
        value: 'https://example.com',
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  #page21{
    min-height:500px;
  }
</style>
