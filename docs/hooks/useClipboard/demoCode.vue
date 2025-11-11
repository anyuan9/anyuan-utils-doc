<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "@anyuan/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

const { isSupported, text, error, copy, paste, updateText } = useClipboard();

let codeValue = ref(`function sayHello() {
  console.log('Hello, World!');
}`);
function copyCode() {
  copy(codeValue.value).then(success => {
    if (success) {
      console.log("拷贝成功");
    } else {
      console.log("拷贝失败");
    }
  });
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2 flex items-center">
      <n-code :code="codeValue" language="javascript" inline />
      <n-button @click="copyCode"> 拷贝 </n-button>
    </n-space>
  </naive-theme>
</template>
