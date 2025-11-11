<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoGetPrototype from './demoGetPrototype.vue'
import demoAssert from './demoAssert.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
基础工具函数
:::

## getPrototype

获取数据类型，例如String

注意首字母大写

<div class="code-border">

### <divider-base /> {#base1}

<demoGetPrototype />

<details>

<summary>查看代码</summary>

<<< @/utils/common/demoGetPrototype.vue

</details>

### <divider-param /> {#param1}

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `value`      | 输入的数据      | `any` |

</div>

## assert

断言函数，如果条件不满足则抛出错误

<div class="code-border">

### <divider-base /> {#base2}

<demoAssert />

<details>

<summary>查看代码</summary>

<<< @/utils/common/demoAssert.vue

</details>

### <divider-param /> {#param2}

| **参数属性** | **说明** | **类型** |
| ------------ | -------- | -------- |
| `condition`      | 条件      | `boolean` |
| `message`      | 错误信息      | `string` |

</div>

