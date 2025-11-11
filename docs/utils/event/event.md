<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoEvent from './demoEvent.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
事件工具函数
:::

## $on

注册事件和处理函数，支持数组形式注册多个事件

<div class="code-border">

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `event` | 是 | 事件名称，可以是字符串或字符串数组 | `string \| string[]` |  |
| `fn` | 是 | 事件处理函数 | `Fn` |  |

</div>

## $once

注册一次性事件，触发后自动销毁

<div class="code-border">

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `event` | 是 | 事件名称 | `string` |  |
| `fn` | 是 | 事件处理函数 | `Fn` |  |

</div>

## $emit

触发事件，执行所有注册的回调函数

<div class="code-border">

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `event` | 是 | 事件名称 | `string` |  |
| `...args` | 否 | 传递给回调函数的参数 | `any[]` |  |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `boolean` | 事件是否被成功触发（有监听器返回 true，无监听器返回 false） |

</div>

## $off

销毁事件处理函数，不传参数时清除所有事件

<div class="code-border">

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `event` | 否 | 事件名称，可以是字符串或字符串数组 | `string \| string[]` |  |
| `fn` | 否 | 要移除的特定处理函数 | `Fn` |  |

::: info 相关信息

- 不传任何参数时，清除所有事件
- 只传 event 参数时，清除该事件的所有处理函数
- 同时传 event 和 fn 参数时，只清除特定的处理函数

:::

</div>

#### <divider-base /> {#base1}

<demoEvent />

<details>

<summary>查看代码</summary>

<<< @/utils/event/demoEvent.vue
</details>