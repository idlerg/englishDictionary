<template>
  <div class="loginIndex">
    <img class="loginBg" src="/static/images/loginBg.jpg" alt />
    <div class="comLogin">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="管理员">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
    submitForm() {
        if (
            this.formLabelAlign.name === "idlerg" ||
            this.formLabelAlign.region === "idlerg520"
        ) {
            this.$router.push({
            path: "/adminIndex"
            });
        } else {
            this.$message.error("信息输入错误哦 (#^.^#)");
        }
    }
  }
};
</script>

<style scoped>
.loginIndex {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
}
.loginBg {
    width: 100%;
    height: 100%;
    opacity: 0.8;
}
.comLogin {
    width: 500px;
    height: 300px;
    border-radius: 20px;
    position: absolute;
    right: 15%;
    top: 35%;
    background: #fff;
    opacity: 0.6;
    box-sizing: border-box;
    padding: 60px 100px 0 60px;
}
</style>
