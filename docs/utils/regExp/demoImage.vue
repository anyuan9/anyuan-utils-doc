<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// image 测试数据
const imageRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
imageRes.value = [
  { label: "jpg文件", value: "image.jpg", expected: true },
  { label: "jpeg文件", value: "photo.jpeg", expected: true },
  { label: "png文件", value: "picture.png", expected: true },
  { label: "gif文件", value: "animation.gif", expected: true },
  { label: "bmp文件", value: "bitmap.bmp", expected: true },
  { label: "webp文件", value: "webimage.webp", expected: true },
  { label: "svg文件", value: "vector.svg", expected: true },
  { label: "ico文件", value: "icon.ico", expected: true },
  { label: "tiff文件", value: "scan.tiff", expected: true },
  { label: "tif文件", value: "scan.tif", expected: true },
  { label: "heic文件", value: "photo.heic", expected: true },
  { label: "heif文件", value: "photo.heif", expected: true },
  { label: "avif文件", value: "image.avif", expected: true },
  { label: "大写扩展名", value: "IMAGE.JPG", expected: true },
  { label: "混合大小写", value: "Image.JpEg", expected: true },
  { label: "文件后缀", value: ".jpg", expected: true },
  { label: "txt文件", value: "document.txt", expected: false },
  { label: "无扩展名", value: "image", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in imageRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.image.test("{{ item.value }}") </span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.image.test(item.value) }}, 结果:
          {{ regExp.image.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
