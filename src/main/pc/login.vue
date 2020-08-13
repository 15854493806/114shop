<template>
  <div class="sxf-mt-50">
    <el-row type="flex" justify="center">
      <el-form ref="formData" :model="formData" :rules="rules" label-width="80px" @keyup.enter.native="login()">
        <el-form-item prop="userName" label="用户名">
          <el-input v-model="formData.userName" placeholder="请输入用户名" prefix-icon="icon-login_user" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="formData.password" placeholder="请输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="login('formData')" icon="el-icon-upload">登录</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
        <router-link to="PcRig">没有密码？注册</router-link>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    };
  },
  methods: {
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    login(formName) {

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          });
          if (this._isMobile()) {
            // 手机端
            this.$router.push({name:'MobileHome'});
          } else {
            // pc端
            this.$router.push({name:'PcHome'});
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
