<template>
  <div id="app">
    <router-view v-if="isRouterAlive" :key="key"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide(){
      return {
        reload: this.reload
      }
    },
    data(){
      return {
        isRouterAlive: true
      }
    },
    computed:{
      key () {
        return this.$route.fullPath
      }
    },
    methods: {
      reload(){
        this.isRouterAlive = false
        this.$nextTick(function(){
          this.isRouterAlive = true
        })
      },
    }
  }
</script>

<style>
  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
