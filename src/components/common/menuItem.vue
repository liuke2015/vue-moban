<template>
    <div id="menuItem">
      <!--有下级列表-->
      <el-submenu :index="item.router" v-if="item.dataList" >
        <template slot="title">
          <i :class="['iconfont',item.icon]" v-if="item.icon"></i>{{item.name}}
        </template>
        <menuItem v-for="child in item.dataList" :key="child.name" :item="child"></menuItem>
      </el-submenu>
      <!--无下级列表-->
      <el-menu-item v-else :index="item.router">
        <i :class="['iconfont',item.icon]" v-if="item.icon"></i>{{item.name}}
      </el-menu-item>
    </div>
</template>

<script>
    export default {
        name: "menuItem",
        msg: "左侧菜单-组件",
        props:{
          item:{
            type:Object,
            default:{}
          }
        },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less">
    #menuItem {

    }
</style>
