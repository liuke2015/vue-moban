<template>
  <div id="slidMenu">
    <el-scrollbar wrap-class="scrollbar-wrapper" ref="myScrollbar" style="height:100%">
      <el-menu class="main-menu" :default-active="defaultActive" :unique-opened="true" :router="true" :collapse-transition="false"
               :collapse="isCollapse" mode="vertical" background-color="#33495f" text-color="#92a7b7" active-text-color="#ddedfa">
        <menuItem v-for="item in menuData" :key="item.name" :item="item"></menuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import menuItem from "@common/menuItem";

  export default {
    name: "slidMenu",
    msg: "左侧菜单",
    props: {
      isCollapse: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    computed: {
      defaultActive() {
        let pathArray = this.$route.path.split("/");
        let ary = [];
        if (pathArray.length > 3) {
          for (let i = 0; i < 3; i++) {
            ary.push(pathArray[i]);
          }
          let newPath = ary.join("/");
          return newPath
        }
        return this.$route.path
      },
      menuData() {
        return this.$store.getters.menuData
      }
    },
    mounteds() {

    },
    method: {},
    components: {
      menuItem
    }
  }
</script>

<style lang="less">
  #slidMenu {

  }
</style>
