<template>
  <div class="login">
    <div class="container">
      <div class="my-center-text"><h2>后台管理系统</h2></div>
      <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><i-ep-UserFilled /></el-icon>
              <span>账户登录</span>
            </span>
          </template>
          账户登录
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><i-ep-Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          手机登录
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.login {
  display: grid;
  height: 100%;
  background: url('@/assets/images/system/login-bg.svg');
}
.container {
  place-self: center;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
