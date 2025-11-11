<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(16)

import demoToNumber from './demoToNumber.vue'
import demoNumToFinite from './demoNumToFinite.vue'
import demoNumToFixed from './demoNumToFixed.vue'
import demoNumToPercent from './demoNumToPercent.vue'
import demoNumToPercentRound from './demoNumToPercentRound.vue'
import demoNumSplit from './demoNumSplit.vue'
import demoNumFormatBytes from './demoNumFormatBytes.vue'
import demoNumFormatPhone from './demoNumFormatPhone.vue'
import demoNumFormatBigNumber from './demoNumFormatBigNumber.vue'
import demoNumFormatThousandth from './demoNumFormatThousandth.vue'
import demoNumFormatChineseAmount from './demoNumFormatChineseAmount.vue'
import demoNumRemoveSensitive from './demoNumRemoveSensitive.vue'
import demoCelsius2Fahrenheit from './demoCelsius2Fahrenheit.vue'
import demoFahrenheit2Celsius from './demoFahrenheit2Celsius.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
数字工具函数
:::

## toNumber

转为数字，如果无法转换则返回 NaN

<div class="code-border">

#### <divider-base /> {#base1}

<demoToNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoToNumber.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 输入值   | `any`    |            |

</div>

## numToFinite

value 转换为一个有限数字

<div class="code-border">

#### <divider-base /> {#base2}

<demoNumToFinite />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumToFinite.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 输入值   | `number` |            |

</div>

## numToFixed

数字保留四舍五入指定的小数位数，推荐使用 Number.EPSILON 来避免浮点数运算可能存在的精度问题

<div class="code-border">

#### <divider-base /> {#base3}

<demoNumToFixed />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumToFixed.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明**                                   | **类型** | **默认值** |
| ------------ | -------- | ------------------------------------------ | -------- | ---------- |
| `num`        | 是       | 需要计算的数字                             | `number` |            |
| `decimals`   | 否       | 保留的小数位数，取值 0~20                  | `number` | `0`        |

</div>

## numToPercent

数字转为四舍五入的百分比

<div class="code-border">

#### <divider-base /> {#base4}

<demoNumToPercent />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumToPercent.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明**                         | **类型** | **默认值** |
| ------------ | -------- | -------------------------------- | -------- | ---------- |
| `value`      | 是       | 输入值                           | `any`    |            |
| `decimals`   | 否       | 小数点后面保留的位数             | `number` | `2`        |
| `symbol`     | 否       | 后缀，例如"%"                    | `string` |            |

</div>

## numToPercentRound

输入一个数值数组，并返回各个数值的四舍五入百分比，各个值的总和是100

<div class="code-border">

#### <divider-base /> {#base5}

<demoNumToPercentRound />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumToPercentRound.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明**                           | **类型**        | **默认值** |
| ------------ | -------- | ---------------------------------- | --------------- | ---------- |
| `value`      | 是       | 数字数组                           | `Array<number>` |            |
| `decimals`   | 否       | 小数点后面保留的位数               | `number`        | `0`        |

</div>

## numSplit

将数字拆分为整数部分和小数部分

<div class="code-border">

#### <divider-base /> {#base6}

<demoNumSplit />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumSplit.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value`      | 是       | 输入值   | `number` |            |

</div>

## numFormatBytes

格式化字节数为易读的格式

<div class="code-border">

#### <divider-base /> {#base7}

<demoNumFormatBytes />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumFormatBytes.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明**             | **类型** | **默认值** |
| ------------ | -------- | -------------------- | -------- | ---------- |
| `byte`       | 是       | 字节数               | `number` |            |
| `decimals`   | 否       | 保留的小数位数       | `number` | `2`        |

</div>

## numFormatPhone

格式化电话号码

<div class="code-border">

#### <divider-base /> {#base8}

<demoNumFormatPhone />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumFormatPhone.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明**                           | **类型** | **默认值** |
| ------------ | -------- | ---------------------------------- | -------- | ---------- |
| `phone`      | 是       | 电话号码                           | `string` |            |
| `format`     | 否       | 格式化模板，例如"xxx-xxxx-xxxx"    | `string` |            |

</div>

## numFormatBigNumber

大数字格式化，例如数字过万转换成万，数字过亿转化成亿

<div class="code-border">

#### <divider-base /> {#base9}

<demoNumFormatBigNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumFormatBigNumber.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明**                           | **类型**                          | **默认值** |
| ------------ | -------- | ---------------------------------- | --------------------------------- | ---------- |
| `num`        | 是       | 输入数字                           | `number \| string`                |            |
| `options`    | 否       | 格式化选项                         | `FormatBigNumberOptions`          |            |

::: info 相关信息

FormatBigNumberOptions 配置项：

- `decimals`: 保留的小数位数
- `thresholds`: 大数字分段配置，从小到大排序
  :::

</div>

## numFormatThousandth

数字格式化，支持千分位、货币符号、大数字格式化等

<div class="code-border">

#### <divider-base /> {#base10}

<demoNumFormatThousandth />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumFormatThousandth.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明**                           | **类型**                          | **默认值** |
| ------------ | -------- | ---------------------------------- | --------------------------------- | ---------- |
| `val`        | 是       | 输入值                             | `number \| string`                |            |
| `options`    | 否       | 格式化选项                         | `NumFormatThousandthOptions`      |            |

::: info 相关信息

NumFormatThousandthOptions 配置项：

- `symbol`: 货币符号，默认为空
- `thousandth`: 是否千分位，默认为true
- `decimalForce`: 是否强制保留小数位数
- `decimals`: 保留的小数位数
- `bigNumber`: 是否启用大数字格式化
- `thresholds`: 大数字分段配置
  :::

</div>

## numFormatChineseAmount

将数字转换为中文金额大写

<div class="code-border">

#### <divider-base /> {#base11}

<demoNumFormatChineseAmount />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumFormatChineseAmount.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明** | **类型**               | **默认值** |
| ------------ | -------- | -------- | ---------------------- | ---------- |
| `val`        | 是       | 输入值   | `number \| string`     |            |

</div>

## numRemoveSensitive

移除数字中的敏感信息，如身份证号、手机号等

<div class="code-border">

#### <divider-base /> {#base12}

<demoNumRemoveSensitive />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoNumRemoveSensitive.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 输入字符串 | `string` |            |

</div>

## celsius2Fahrenheit

摄氏度转华氏度

<div class="code-border">

#### <divider-base /> {#base13}

<demoCelsius2Fahrenheit />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoCelsius2Fahrenheit.vue

</details>

#### <divider-param /> {#param13}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `celsius`    | 是       | 摄氏度   | `number` |            |

</div>

## fahrenheit2Celsius

华氏度转摄氏度

<div class="code-border">

#### <divider-base /> {#base14}

<demoFahrenheit2Celsius />

<details>

<summary>查看代码</summary>

<<< @/utils/number/demoFahrenheit2Celsius.vue

</details>

#### <divider-param /> {#param14}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `fahrenheit` | 是       | 华氏度   | `number` |            |

</div>