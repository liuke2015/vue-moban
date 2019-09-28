<template>
  <el-menu id="main-menu" :default-active="defaultActive" :unique-opened="true" :router="true"
           background-color="#33495f" active-text-color="#ddedfa">
    <template v-for="(item,index) in menuData">
      <!--有二级列表-->
      <el-submenu :index="''+index+''" v-if="item.dataList && item.isShow">
        <template slot="title">
          <i :class="['iconfont',item.icon]"></i>{{item.title}}
        </template>
        <template v-for="(current,curIndex) in item.dataList">
          <!--无三级列表-->
          <el-menu-item :index="current.router" v-if="!current.isSub && current.isShow">{{current.name}}</el-menu-item>
          <!--有三级列表-->
          <el-submenu :index="''+index+'-'+curIndex+1+''" v-if="current.isSub && current.isShow">
            <template slot="title">{{current.subTit}}</template>
            <el-menu-item :index="chi.router" v-for="chi in current.children" :key="chi.router">{{chi.name}}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-submenu>
      <!--无二级列表-->
      <el-menu-item :index="item.router" v-if="!item.dataList && item.isShow">
        <i :class="['iconfont',item.icon]"></i>{{item.title}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: 'menuCom',
    data() {
      return {
      }
    },
    computed: {
      defaultActive() {
        let pathArray = this.$route.path.split("/");
        let ary = [];
         setTimeout(()=>{
           /*左侧导航刷新，重置滚动条位置*/
           this.$emit("setScrollTop");
         },1000);
        if (pathArray.length > 3) {
          for (let i = 0; i < pathArray.length - 1; i++) {
            ary.push(pathArray[i]);
          }
          let newPath = ary.join("/");
          return newPath
        } else {
          return this.$route.path
        }
      },
      menuData(){
        return this.$store.getters.menuData
      }
    },
    mounted() {
    },
    methods: {

    },
  }
</script>

<style lang="less">
  #main-menu {
    width: 240px;
    border: 0;

    i.iconfont {
      font-size: 16px;
      margin-right: 10px;
      color: #9bb1c3;
    }

    .el-submenu__title {
      color: #92a7b7;
      font-size: 16px;
    }

    .el-menu-item {
      color: #92a7b7;
      font-size: 16px;

      a {
        display: block;
        color: black;
        text-decoration: none;
      }

      &.is-active {
        background-color: #263345 !important;

        i.iconfont {
          color: #dfedf6;
        }

        a {
          color: #dfedf6;
        }
      }
    }
  }

</style>
