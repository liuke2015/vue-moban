<template>
  <div id="vheader">
    <i :class="['iconfont',showMenu?arrowLeft:arrowRight]" @click="setAside"></i>
    <div class="right nav text_right">
      <el-dropdown trigger="click" if="userInfo" @command="handleCommand">
        <span class="el-dropdown-link">
           <img :src="oUrl+'/'" :onerror="errImg('defPic.png')" class="img-circle">
           <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-setting" command="setUser">设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-back" command="signOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vheader",
    msg: "公共头部",
    data() {
      return {
        showMenu: true,
        arrowRight: "el-icon-right",
        arrowLeft: "el-icon-back",
      }
    },
    mounted() {

    },
    methods: {
      /*照片没有的情况下，显示默认图片*/
      errImg(defaultImg){
        return "this.src='"+require('@assets/img/'+defaultImg)+"'";
      },
      /*点击下拉菜单*/
      handleCommand(command) {
        switch (command) {
          case "signOut"://退出
            break;
          case "setUser"://设置
            break;
        }
      },
      /*点击左右箭头*/
      setAside() {
        this.showMenu = !this.showMenu;
        this.$emit("setAside", this.showMenu);
      }
    },
  }
</script>

<style lang="less">
  #vheader {
    width: 100%;
    min-width: 1200px;
    height: 52px;
    line-height: 52px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;

    .head-logo {
      float: left;
      margin: 7px 0 0 20px;
    }
    i.iconfont{
      font-size: 22px;
      margin-left: 20px;
      position: absolute;
      top:50%;
      transform: translateY(-50%)
    }

    .right {
      float: right;
    }

    .nav {
      width: 35%;
      a.toDashboard {
        float: right;
        color: #333;
        font-size: 20px;
      }
      .el-dropdown {
        float: right;
        margin: 0 30px;
        cursor: pointer;

        .img-circle {
          width: 26px;
          height: 26px;
          vertical-align: -7px;
        }
      }
    }
  }


  .nav > ul {
    padding-right: 50px;

  }

  .nav > ul > li {
    display: inline-block;
    width: 120px;
    text-align: center;
    height: 50px;
    position: relative;
    line-height: 50px;
    /*margin-top: 15px;*/
    box-sizing: border-box;
    box-shadow: -10px 0px 15px #034c6a inset,
      0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset,
    0px 10px 15px #034c6a inset;
    border-radius: 5px;
  }

  .nav > ul > li:hover {
    box-shadow: none;
    background-color: #034c6a;
    box-sizing: border-box;
  }

  .nav > ul > li i {
    width: 16px;
    height: 16px;
    display: inline-block;
    position: relative;
    top: 3px;
    margin-right: 5px;
  }

  .nav > ul > li > a {
    color: deepskyblue;
    display: block;
    font-size: 14px;
  }
</style>
