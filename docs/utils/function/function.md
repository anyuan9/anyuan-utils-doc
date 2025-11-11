<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(5)

import demoDebounce from './demoDebounce.vue'
import demoThrottle from './demoThrottle.vue'
import demoWait from './demoWait.vue'
import demoOnce from './demoOnce.vue'
import demoMeasureTime from './demoMeasureTime.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
函数工具函数
:::

## debounce

防抖函数

<div class="code-border">

#### <divider-base /> {#base1}

<demoDebounce />

<details>

<summary>查看代码</summary>

<<< @/utils/function/demoDebounce.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `fn` | 是 | 需要防抖的函数 | `Function` |  |
| `timeout` | 否 | 延迟时间（毫秒） | `number` | `200` |
| `immediate` | 否 | 是否立即执行 | `boolean` | `false` |

</div>

## throttle

节流函数

<div class="code-border">

#### <divider-base /> {#base2}

<demoThrottle />

<details>

<summary>查看代码</summary>

<<< @/utils/function/demoThrottle.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `fn` | 是 | 需要节流的函数 | `Function` |  |
| `timeout` | 否 | 延迟时间（毫秒） | `number` | `1000` |

</div>

## wait

等待函数，延迟执行

<div class="code-border">

#### <divider-base /> {#base3}

<demoWait />

<details>

<summary>查看代码</summary>

<<< @/utils/function/demoWait.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `timeout` | 否 | 等待时间（毫秒） | `number` | `20` |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `Promise` | 返回一个Promise对象，在指定时间后resolve |

</div>

## once

创建一个只能调用一次的函数

<div class="code-border">

#### <divider-base /> {#base4}

<demoOnce />

<details>

<summary>查看代码</summary>

<<< @/utils/function/demoOnce.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `fn` | 是 | 要包装的函数 | `Function` |  |

#### <divider-return /> {#return4}

| **名称** | **说明** |
| -------- | -------- |
| `Function` | 包装后的函数，只能成功执行一次 |

</div>

## measureTime

计算同步函数的执行时间

<div class="code-border">

#### <divider-base /> {#base5}

<demoMeasureTime />

<details>

<summary>查看代码</summary>

<<< @/utils/function/demoMeasureTime.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `fn` | 是 | 要计时的函数 | `Function` |  |
| `args` | 否 | 函数的参数 | `any[]` |  |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `result` | 函数的执行结果 |
| `time` | 函数的执行时间（毫秒） |

</div>