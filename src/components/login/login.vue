<template>
  <div id="login">
    <div class="login-center">
      <div class="center-box">
        <div class="login-left">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form">
            <el-form-item prop="userName">
              <el-input v-model.trim="ruleForm.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" v-model.trim="ruleForm.pass" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-right">
          <h1 class="heading"> 后台管理</h1>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from "md5";
  import {timest} from "@utils/public"

  export default {
    name: "login",
    msg: "",
    data() {
      return {
        ruleForm: {
          userName: "",
          pass: "",
        },
        rules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        loading: false,
      }
    },
    methods: {
      /*登录*/
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="less">
  #login {
    * {
      box-sizing: border-box;
    }

    width: 100%;
    height: 100%;
    display: table;

    .login-center {
      display: table-cell;
      vertical-align: middle;
    }

    .center-box {
      width: 90%;
      max-width: 1300px;
      height: 450px;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.1);

      .login-left {
        float: left;
        width: 42%;
        height: 100%;
        padding: 80px 30px 0;
        text-align: center;

        img {
          margin-bottom: 30px;
        }

        .el-button {
          width: 100%;
        }
      }

      .login-right {
        float: right;
        width: 58%;
        height: 100%;
        background: rgba(99, 156, 185, 0.92);
        padding: 196px 30px 0;
        color: #fff;

        h1 {
          margin-top: 0;
          margin-bottom: 5px;
          font-size: 26px;
          font-weight: 300;
        }

        p {
          margin: 0;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
  }
</style>
