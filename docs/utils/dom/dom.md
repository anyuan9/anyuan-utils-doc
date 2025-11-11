<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoElementHasClass from './demoElementHasClass.vue'
import demoElementAddClass from './demoElementAddClass.vue'
import demoElementRemoveClass from './demoElementRemoveClass.vue'
import demoElementToggleClass from './demoElementToggleClass.vue'
import demoElementGetClass from './demoElementGetClass.vue'
import demoScrollTo from './demoScrollTo.vue'
import demoScrollIntoView from './demoScrollIntoView.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
DOM 工具函数
:::

## elementHasClass

判断元素是否存在指定类名

<div class="code-border">

#### <divider-base /> {#base1}

<demoElementHasClass />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoElementHasClass.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | DOM 元素 | `HTMLElement \| Element` |            |
| `name`       | 是       | 类名     | `string` |            |

#### <divider-return /> {#return1}

| **名称** | **说明**     |
| -------- | ------------ |
| `boolean` | 是否包含类名 |

</div>

## elementAddClass

向当前元素添加指定类名

<div class="code-border">

#### <divider-base /> {#base2}

<demoElementAddClass />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoElementAddClass.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | DOM 元素 | `HTMLElement \| Element` |            |
| `name`       | 是       | 类名     | `string` |            |

</div>

## elementRemoveClass

删除当前元素的指定类名

<div class="code-border">

#### <divider-base /> {#base3}

<demoElementRemoveClass />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoElementRemoveClass.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | DOM 元素 | `HTMLElement \| Element` |            |
| `name`       | 是       | 类名     | `string` |            |

</div>

## elementToggleClass

切换当前元素的类名

<div class="code-border">

#### <divider-base /> {#base4}

<demoElementToggleClass />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoElementToggleClass.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | DOM 元素 | `HTMLElement \| Element` |            |
| `name`       | 是       | 类名     | `string` |            |

</div>

## elementGetClass

获取当前元素的所有类名

<div class="code-border">

#### <divider-base /> {#base5}

<demoElementGetClass />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoElementGetClass.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | DOM 元素 | `HTMLElement \| Element` |            |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `string \| string[]` | 当前元素的所有类名，如果只有一个类名，返回字符串，如果有多个，返回字符串数组 |

</div>

## scrollTo

滚动到页面指定位置

<div class="code-border">

#### <divider-base /> {#base6}

<demoScrollTo />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoScrollTo.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `options`    | 否       | 滚动配置选项 | `ScrollToOptions` | `{ left: 0, top: 0, behavior: 'smooth' }` |

::: info 相关信息

ScrollToOptions 配置项：

- `left`: 滚动到页面的水平位置，默认为 0
- `top`: 滚动到页面的垂直位置，默认为 0  
- `behavior`: 滚动行为，可选值："auto" 或 "smooth"，默认为 "smooth"

:::

</div>

## scrollIntoView

将元素平滑滚动到可视区域

<div class="code-border">

#### <divider-base /> {#base7}

<demoScrollIntoView />

<details>

<summary>查看代码</summary>

<<< @/utils/dom/demoScrollIntoView.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `element`    | 是       | 目标元素 | `HTMLElement \| Element` |            |
| `options`    | 否       | 滚动配置选项 | `Object` | `{ block: 'nearest', inline: 'nearest', behavior: 'smooth' }` |

::: info 相关信息

滚动配置选项：

- `block`: 垂直对齐方式，可选值："start"、"center"、"end"、"nearest"，默认为 "nearest"
- `inline`: 水平对齐方式，可选值："start"、"center"、"end"、"nearest"，默认为 "nearest"
- `behavior`: 滚动行为，可选值："smooth"、"instant"、"auto"，默认为 "smooth"

:::

</div>