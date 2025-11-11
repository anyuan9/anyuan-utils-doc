<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "@anyuan/utils";
import { useMessage } from "../../components/message";

const { message } = useMessage();

const { isSupported, text, error, copy, paste, updateText } = useClipboard({
  successMessage: "复制成功",
  errorMessage: "复制失败"
});

let textValue = ref("");
function copyText() {
  copy(textValue.value).then(success => {
    if (success) {
      message.success("拷贝成功");
    } else {
      message.warning("拷贝失败");
    }
  });
}

const pasteText = ref("");
function handlePaste() {
  paste().then(content => {
    if (content) {
      pasteText.value = content;
    }
  });
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2 flex items-center">
      <n-input
        v-model:value="textValue"
        type="text"
        clearable
        placeholder="请输入要拷贝的值"
      />
      <n-button @click="copyText"> 拷贝 </n-button>
    </n-space>

    <n-space className="mt-2 flex items-center">
      <n-input v-model:value="pasteText" type="textarea" placeholder="请粘贴" />
      <n-button @click="handlePaste"> 粘贴 </n-button>
    </n-space>
  </naive-theme>
</template>
