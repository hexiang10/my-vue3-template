<template>
  <vue3-seamless-scroll
    :list="list"
    :style="{ width: width }"
    class="scroll"
    :direction="`left`"
    :hover="true"
    :singleLine="true"
    :step="0.3">
    <template  v-for="(item) in list">
      <span class="m-[10px]"
        ><el-card shadow="hover" class="show-item w-[120px]">
          <img
            :src="item.imgUrl"
            class="object-fill h-[150px]">
          </img>
          <template #footer><span class="my-center-flex my-ellipsis">{{item.title}}</span></template></el-card
        >
      </span>
    </template>
  </vue3-seamless-scroll>
</template>
<script setup>
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

const props = defineProps({
  width: {
    type: String,
  },
  list: {
    type: Array,
    default: () => {
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({
           imgUrl: `https://picsum.photos/120/150?${i}`,
           title: `第${i + 1}条数据`,
        })
      }
      return arr
    }
  }
})
</script>

<style>
.el-card__body{
  padding: 0px;
}
.el-card__footer{
  padding: 5px;
}
.scroll {
  margin: 0px auto;
  overflow: hidden;
}
.show-item:hover {
cursor: pointer;
	transform: translateY(-5px);
	transition: all 0.2s ease-in;

}
</style>
