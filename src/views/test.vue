<template>
  <el-divider />
  <div class="my-center-grid">
    <div>
      ref数据：【{{ data }}】 ； 全局数据：【{{ baseStore.HelloWord }}】；
      mixin数据：【{{ mixinData }}】
      <el-button @click="handleClick" class="ml-4">mixin方法测试</el-button>
    </div>
    <el-divider />
    <div>
      mock数据：【{{ mockData }}】
      <el-button @click="sendHttp_01" class="ml-4">mock测试</el-button>
    </div>
    <el-divider />
    <div>
      <el-button @click="$router.push('/')">回到首页</el-button>
      <el-button @click="$router.push('/error/404')">404页面</el-button>
      <el-button @click="$router.push('/error/401')">401页面</el-button>
      <el-button @click="$router.push('/error/500')">500页面</el-button>
    </div>
    <el-divider />
    <h1 class="text-3xl font-bold text-blue-500">Hello world!</h1>
    <el-divider />
    <my-seamless :list="res.seamlessList"></my-seamless>
    <el-divider />
    <lord-icon src="https://cdn.lordicon.com/vyqvtrtg.json" />
    <el-divider />
  </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const data = ref('Hello World')
const baseStore = proxy.$store.baseStore.useBaseStore()
const res = $ref({})
const mockData = ref('当前无mock数据')
onMounted(async () => {
  await sendHttp_02()
})
function handleClick() {
  proxy.submitOk()
}
async function sendHttp_01() {
  mockData.value = await proxy.$api.test.getTestData_01()
}
async function sendHttp_02() {
  // 获取对象数组中每个对象的download_url和title属性，并赋值给res.seamlessList
  res.seamlessList = JSON.parse(
    JSON.stringify(await proxy.$api.test.getTestData_02()),
  ).map((item) => ({
    imgUrl: item.download_url,
    title: item.author,
  }))
}
</script>

<style scoped></style>
