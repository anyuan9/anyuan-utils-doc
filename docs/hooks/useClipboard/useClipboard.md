<script setup>
import demoInput from './demoInput.vue'
import demoCode from './demoCode.vue'
</script>

# useCopyToClipboard

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
文本拷贝
:::

### 示例

#### 文本拷贝

<demoInput />

<details>

<summary>查看代码</summary>

<<< @/hooks/useClipboard/demoInput.vue

</details>

#### 代码片段拷贝

自动保留代码的空格、换行符和缩进

<demoCode />

<details>

<summary>查看代码</summary>

<<< @/hooks/useClipboard/demoCode.vue

</details>

### 最简代码

拷贝文本

```vue
<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "@anyuan/utils";

const { isSupported, text, error, copy, paste, updateText } = useClipboard();

let textValue = ref(""); // 要拷贝的文本值

function copyText() {
  copy(textValue.value).then(success => {
    if (success) {
      console.log("拷贝成功");
    } else {
      console.log("拷贝失败");
    }
  });
}
</script>

<template>
  <button @click="copyText">拷贝</button>
</template>
```

### API

#### 参数

```ts
//  在此处配置参数
const { isSupported, text, error, copy, paste, updateText } =
  useClipboard(options);
```

<div class="code-no-border">

| **属性**             | **必传** | **说明**                           | **类型**  | **默认值** |
| -------------------- | -------- | ---------------------------------- | --------- | ---------- |
| `showSuccessMessage` | 否       | 是否显示复制成功后的提示信息       | `boolean` | `true`     |
| `showErrorMessage`   | 否       | 是否显示复制失败后是否显示错误信息 | `boolean` | `true`     |
| `successMessage`     | 否       | 自定义成功消息                     | `string`  | `复制成功` |
| `errorMessage`       | 否       | 自定义错误消息                     | `string`  | `操作失败` |
| `autoUpdateText`     | 否       | 读取剪贴板时是否自动更新text ref   | `boolean` | `false`    |

</div>

#### 返回值、方法

<div class="code-no-border">

| **名称**      | **说明**                | **类型**                                                            |
| ------------- | ----------------------- | ------------------------------------------------------------------- |
| `isSupported` | 浏览器是否支持剪贴板API | `Ref<boolean>`                                                      |
| `text`        | 剪贴板文本内容（只读）  | `Readonly<Ref<string>>`                                             |
| `copy`        | 复制文本到剪贴板        | `(text: string, options?: UseClipboardOptions) => Promise<boolean>` |
| `paste`       | 从剪贴板获取文本内容    | `(options?: UseClipboardOptions) => Promise<string>`                |
| `error`       | 错误信息                | `Ref<Error \| null>`                                                |
| `updateText`  | 手动更新剪贴板文本内容  | `() => Promise<void>`                                               |

</div>
