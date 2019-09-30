<template>
  <div id="enter" :class="{'hideMenu':!showAside}">
    <vHeader @setAside="setAside"></vHeader>
    <slidMenu class="slid-con" :isCollapse="!showAside"></slidMenu>
    <div class="main-con">
      <div class="tag-box">
        <topTagList></topTagList>
      </div>
      <div class="right-con">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from "@common/header";
  import topTagList from "@common/topTagList";
  import slidMenu from "@common/slidMenu";

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

    },
    methods: {
      /*设置左侧菜单栏显示隐藏*/
      setAside(flag) {
        this.showAside = flag;
      }
    },
    components: {
      vHeader,
      topTagList,
      slidMenu
    }
  }
</script>

<style lang="less">
  @headH: 52px;
  #enter {
    height: 100%;
    font-size: 12px;
    background: #f3f3f4;

    &.hideMenu {
      .main-con {
        margin-left: 54px;
      }

      .slid-con {
        width: 54px !important;
      }
    }

    .main-con {
      margin-left: 240px;
      height: calc(~"100% - 60px");
      margin-top: -4px;

      .tag-box {
        margin-top: 5px;
      }
    }

    .el-scrollbar__wrap {
      /* overflow-y: auto;*/
      overflow-x: hidden;
    }

    .el-header, .el-main {
      padding: 0
    }

    .slid-con {
      width: 240px !important;
      height: calc(~"100% - " @headH);
      position: fixed;
      left: 0;
      top: @headH;
      bottom: 0;
      overflow: hidden;
      transition: width 0.28s;
      background: #33495f;

      .el-menu {
        width: 100% !important;
      }

      border: 0;

      &.el-menu--collapse {
        width: 50px;
      }


      i.iconfont {
        font-size: 16px;
        margin-right: 17px;
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
