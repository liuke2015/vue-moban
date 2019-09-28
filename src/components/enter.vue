<template>
  <div id="enter">
    <el-container>
      <el-header>
        <vHeader @setAside="setAside"></vHeader>
      </el-header>
      <el-container class="main-con">
        <el-aside v-show="showAside">
          <el-scrollbar ref="myScrollbar" style="height:100%">
            <menuCom @setScrollTop="setScrollTop"></menuCom>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <el-scrollbar ref="scroll" style="height:100%">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import vHeader from "@common/header";
  import menuCom from "@common/menuCom";

  export default {
    name: "enter",
    msg: "",
    data() {
      return {
        userInfo: {},
        showAside: true,
      }
    },
    mounted() {
      window.addEventListener("scroll", this.getScrollTop, true)
    },
    methods: {
      /*设置左侧菜单栏显示隐藏*/
      setAside(flag) {
        this.showAside = flag;
      },
      /*获取菜单滚动条scrollTop*/
      getScrollTop() {
        if (this.$refs["myScrollbar"]) {
          let t = this.$refs["myScrollbar"].wrap.scrollTop;
          this.$store.dispatch("setMenuScrollTop", t);
        }
      },
      /*设置菜单滚动条位置*/
      setScrollTop() {
        if (this.$refs["myScrollbar"]){
          this.$refs["myScrollbar"].wrap.scrollTop = this.$store.state.scrollT;
        }
      }
    },
    components: {
      vHeader,
      menuCom
    }
  }
</script>

<style lang="less">
  #enter {
    height: 100%;
    font-size: 12px;

    .el-container {
      height: 100%;

      &.main-con {
        height: calc(~"100% - 60px");
        margin-top: -4px;

        .el-aside {
          width: 242px !important;
          background-color: #33495f;
          border-right: 1px solid #eee;
        }
      }
    }

    .el-scrollbar__wrap {
      /* overflow-y: auto;*/
      overflow-x: hidden;
    }

    .el-header, .el-main {
      padding: 0
    }

/*    .com-con {
      padding: 5px 15px;
      background: #fff;
      background: #fff;
    }

    .f-right {
      float: right !important;
    }

    .con-top {
      overflow: hidden;
      padding: 20px 0;

      .searchInput {
        .el-input {
          float: left;
          width: 200px;

          .el-input__inner {
            border-radius: 4px 0 0 4px
          }
        }

        .el-button {
          float: left;
          border-radius: 0 4px 4px 0;
          height: 30px;
        }

      }

      .btn-list {
        min-width: 100%;

        .el-input {
          .el-input__inner {
            height: 30px;
            line-height: 30px;
          }

          .el-input__icon {
            line-height: 30px;
          }
        }

      }

    }

    .con-bottom {
      padding: 10px 0 20px;

      .el-table {
        font-size: 12px;
        color: #666;

        thead {
          font-size: 12px;
          line-height: 36px;
          color: #999;

          tr, th {
            background: #f0f0f0;
            padding: 0;
          }
        }

        !*.cell {
          padding-left: 0 !important;
        }*!

        [class^=el-icon-] {
          font-size: 15px;
          padding: 0 6px;
        }
      }
    }

    .btn-list {
      float: left;

      li {
        float: left;

        span.labelTit {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          margin: 0 8px 0 15px;
          color: #606266;
        }
      }
    }

    .el-dialog {
      .el-dialog__header {
        border-bottom: 1px solid #eee;
        padding-top: 12px;
      }

      span.el-dialog__title {
        font-size: 14px;
      }

      .el-dialog__headerbtn {
        top: 16px;
      }

      .el-dialog__body {
        padding: 30px 30px 0 20px;
      }

      .el-dialog__footer {
        padding-right: 30px;

        .el-button {
          padding: 8px 15px;
          font-family: "Microsoft YaHei";
          font-size: 14px;
        }
      }
    }

    .page {
      text-align: center;
      padding-top: 10px
    }

    .el-tabs {
      .el-tabs__nav-wrap::after {
        height: 1px;
      }
    }*/
  }
</style>
