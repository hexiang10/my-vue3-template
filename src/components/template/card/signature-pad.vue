<template>
  <div class="signature-pad_wrap">
    <h2>签名画板</h2>
    <aside>
      <section class="attribute-item">
        <h4>画笔颜色:</h4>
        <input type="color" v-model="drawColor" @input="onChangeColor" />
        <span>{{ drawColor }}</span>
      </section>
      <section class="attribute-item">
        <h4>画笔大小:</h4>
        <input
          type="range"
          v-model="drawSize"
          min="1"
          max="10"
          step="0.1"
          @input="onChangeSize" />
        <span>{{ drawSize }}</span>
      </section>
    </aside>
    <canvas width="664" height="292" id="canvas" class="canvas"></canvas>
    <aside class="btns">
      <button @click="handleEvent(0)">清空画布</button>
      <button @click="handleEvent(1)">导出SVG</button>
      <button @click="handleEvent(2)">导出PNG</button>
      <button @click="handleEvent(3)">导出JPG</button>
      <button @click="undo">撤回</button>
      <button @click="redo">重做</button>
    </aside>
  </div>
</template>

<script setup>
import SignaturePad from 'signature_pad'
import { useDownLoad } from '@/utils/download'

const drawColor = ref('#01204E')
const drawSize = ref(1)
let signaturePad
let undoData = []

const { download } = useDownLoad()

function handleEvent(type) {
  if (signaturePad.isEmpty()) return
  switch (type) {
    case 0:
      // clear
      signaturePad.clear()
      undoData = []
      break
    case 1:
      // save image as SVG data url
      const dataURLsvg = signaturePad.toDataURL('image/svg+xml')
      download(dataURLsvg, 'signature.svg')
      break
    case 2:
      // save image as PNG
      const dataURLpng = signaturePad.toDataURL()
      download(dataURLpng, 'signature.png')
      break
    case 3:
      // save image as JPEG with 0.5 image quality
      const dataURL = signaturePad.toDataURL('image/jpeg', 0.5)
      download(dataURL, 'signature.jpg')
      break
    default:
      break
  }
}

function onChangeColor(evt) {
  signaturePad.penColor = drawColor.value
}

function onChangeSize(evt) {
  signaturePad.minWidth = drawSize.value
  const min = Math.round(Math.random() * 10) / parseInt(drawSize.value)
  const max = Math.round(Math.random() * 10) / parseInt(drawSize.value)
  signaturePad.minWidth = Math.min(min, max)
  signaturePad.maxWidth = Math.max(min, max)
}

function undo() {
  const data = signaturePad.toData()
  if (data && data.length > 0) {
    const removed = data.pop()
    undoData.push(removed)
    signaturePad.fromData(data)
  }
}

function redo() {
  if (undoData.length > 0) {
    const data = signaturePad.toData()
    data.push(undoData.pop())
    signaturePad.fromData(data)
  }
}

nextTick(() => {
  const canvas = document.querySelector('canvas')
  signaturePad = new SignaturePad(canvas, {
    minWidth: drawSize.value,
    penColor: drawColor.value,
    backgroundColor: '#fff',
  })
  signaturePad.addEventListener('endStroke', () => {
    undoData = []
  })
})

onBeforeUnmount(() => {
  signaturePad = null
})
</script>

<style lang="scss">
.signature-pad_wrap {
  margin: auto 20px;
  color: #028391;
  .attribute-item {
    display: flex;
    align-items: center;
    margin: 8px auto;
    h4 {
      margin-right: 12px;
    }
    span {
      padding-left: 12px;
      font-weight: bold;
    }
  }
  .canvas {
    border: 5px solid #f6dcac;
    border-radius: 8px;
  }
  .btns {
    button {
      margin: 6px 5px;
      color: #f6dcac;
      border: none;
      padding: 5px;
      border-radius: 4px;
      background: #01204e;
    }
  }
}
</style>
