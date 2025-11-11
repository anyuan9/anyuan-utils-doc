<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoAddition from './demoAddition.vue'
import demoSubtraction from './demoSubtraction.vue'
import demoMultiplication from './demoMultiplication.vue'
import demoDivision from './demoDivision.vue'
import demoModulo from './demoModulo.vue'
import demoSum from './demoSum.vue'
import demoAverage from './demoAverage.vue'
import demoClamp from './demoClamp.vue'
import demoLerp from './demoLerp.vue'
import demoRemap from './demoRemap.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
数学工具函数
:::

## addition

两个数值的加法运算

<div class="code-border">

#### <divider-base /> {#base1}

<demoAddition />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoAddition.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `num1` | 是 | 第一个数值 | `number` | |
| `num2` | 是 | 第二个数值 | `number` | |
| `decimals` | 否 | 保留的小数位数，为 `0` 时不进行任何处理 | `number` | |

</div>

## subtraction

两个数值的减法运算

<div class="code-border">

#### <divider-base /> {#base2}

<demoSubtraction />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoSubtraction.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `num1` | 是 | 第一个数值 | `number` | |
| `num2` | 是 | 第二个数值 | `number` | |
| `decimals` | 否 | 保留的小数位数，为 `0` 时不进行任何处理 | `number` | |

</div>

## multiplication

两个数值的乘法运算

<div class="code-border">

#### <divider-base /> {#base3}

<demoMultiplication />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoMultiplication.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `num1` | 是 | 第一个数值 | `number` | |
| `num2` | 是 | 第二个数值 | `number` | |
| `decimals` | 否 | 保留的小数位数，为 `0` 时不进行任何处理 | `number` | |

</div>

## division

两个数值的除法运算

<div class="code-border">

#### <divider-base /> {#base4}

<demoDivision />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoDivision.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `num1` | 是 | 被除数 | `number` | |
| `num2` | 是 | 除数 | `number` | |
| `decimals` | 否 | 保留的小数位数，为 `0` 时不进行任何处理 | `number` | |

::: warning 注意
当除数为 0 时会抛出错误
:::

</div>

## modulo

取余数运算（确保结果符号与被除数一致）

<div class="code-border">

#### <divider-base /> {#base5}

<demoModulo />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoModulo.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `dividend` | 是 | 被除数 | `number` | |
| `divisor` | 是 | 除数 | `number` | |
| `decimals` | 否 | 保留的小数位数，为 `0` 时不进行任何处理 | `number` | |

::: warning 注意
当除数为 0 时会抛出错误
:::

</div>

## sum

求数字类型组成数组中的和

<div class="code-border">

#### <divider-base /> {#base6}

<demoSum />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoSum.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `args` | 是 | 数字类型组成数组 | `number[] \| number[][]` | |

</div>

## average

求数字类型组成数组中的平均值

<div class="code-border">

#### <divider-base /> {#base7}

<demoAverage />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoAverage.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `args` | 是 | 数字类型组成数组 | `number[] \| number[][]` | |

</div>

## clamp

数值范围限制，常用于游戏开发中的数值调整等场景。将数值限制在[min, max]范围内

<div class="code-border">

#### <divider-base /> {#base8}

<demoClamp />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoClamp.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val` | 是 | 需要限制的数值 | `number` | |
| `min` | 否 | 最小值（包含） | `number` | `0` |
| `max` | 否 | 最大值（包含） | `number` | `1` |

</div>

## lerp

根据 `value` 在 `min` 和 `max` 之间线性插值

<div class="code-border">

#### <divider-base /> {#base9}

<demoLerp />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoLerp.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value` | 是 | 介于 0 和 1 之间的内插值 | `number` | |
| `min` | 是 | 最小值（包含） | `number` | |
| `max` | 是 | 最大值（包含） | `number` | |

</div>

## remap

将输入值 value 从源范围 [`inMin`，`inMax`] 线性重映射到目标范围 [`outMin`，`outMax`]

<div class="code-border">

#### <divider-base /> {#base10}

<demoRemap />

<details>

<summary>查看代码</summary>

<<< @/utils/math/demoRemap.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value` | 是 | 要重映射的输入值 | `number` | |
| `inMin` | 是 | 源范围的最小值 | `number` | |
| `inMax` | 是 | 源范围的最大值 | `number` | |
| `outMin` | 是 | 目标范围的最小值 | `number` | |
| `outMax` | 是 | 目标范围的最大值 | `number` | |

</div>