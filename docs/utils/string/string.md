
<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(16)

import demoStrTrim from './demoStrTrim.vue'
import demoStrSubBefore from './demoStrSubBefore.vue'
import demoStrSubAfter from './demoStrSubAfter.vue'
import demoStrSubBetween from './demoStrSubBetween.vue'
import demoStrSubEllipsis from './demoStrSubEllipsis.vue'
import demoStrCapitalize from './demoStrCapitalize.vue'
import demoStrUniq from './demoStrUniq.vue'
import demoStrSplitWithUnit from './demoStrSplitWithUnit.vue'
import demoStrCalcWithUnit from './demoStrCalcWithUnit.vue'
import demoStrHideSensitive from './demoStrHideSensitive.vue'
import demoStrHasCNChars from './demoStrHasCNChars.vue'
import demoStrCamelize from './demoStrCamelize.vue'
import demoStrHyphenate from './demoStrHyphenate.vue'
import demoStrCamelCase from './demoStrCamelCase.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
字符串工具函数
:::

## strTrim

字符串空格处理函数

<div class="code-border">

#### <divider-base /> {#base1}

<demoStrTrim />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrTrim.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 字符串 | `string` |            |
| `mode`       | 否       | 去除方式 | `'left' \| 'right' \| 'both' \| 'all'` | `'both'` |

::: info 相关信息

mode 参数说明：
- `left`: 去除前(左边)空格
- `right`: 去除后(右边)空格  
- `both`: 去除前后(左右两边)空格
- `all`: 去除所有空格
:::

</div>

## strSubBefore

截取指定字符前面的值

<div class="code-border">

#### <divider-base /> {#base2}

<demoStrSubBefore />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrSubBefore.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 要截取的值 | `string` |            |
| `char`       | 是       | 指定字符 | `string` |            |

</div>

## strSubAfter

截取指定字符后面的值

<div class="code-border">

#### <divider-base /> {#base3}

<demoStrSubAfter />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrSubAfter.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 要截取的值 | `string` |            |
| `char`       | 是       | 指定字符 | `string` |            |

</div>

## strSubBetween

截取指定两个字符之间的值

<div class="code-border">

#### <divider-base /> {#base4}

<demoStrSubBetween />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrSubBetween.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 要截取的值 | `string` |            |
| `before`     | 是       | 前一个指定字符 | `string` |            |
| `after`      | 是       | 后一个指定字符 | `string` |            |

</div>

## strSubEllipsis

截取字符并追加省略号（常用场景：`echarts`）

<div class="code-border">

#### <divider-base /> {#base5}

<demoStrSubEllipsis />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrSubEllipsis.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 要截取的值 | `string \| number` |            |
| `len`        | 否       | 要保留的位数 | `number` | `3` |

</div>

## strCapitalize

首字母大写，其他字母不变

<div class="code-border">

#### <divider-base /> {#base6}

<demoStrCapitalize />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrCapitalize.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 字符串 | `string` |            |

</div>

## strUniq

字符串去重

<div class="code-border">

#### <divider-base /> {#base7}

<demoStrUniq />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrUniq.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 需要去重的字符串 | `string` |            |
| `caseSensitive` | 否   | 是否区分大小写 | `boolean` | `true` |

</div>

## strSplitWithUnit

提取数值和单位

<div class="code-border">

#### <divider-base /> {#base8}

<demoStrSplitWithUnit />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrSplitWithUnit.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value`      | 是       | 需要提取的值 | `any` |            |

#### <divider-return /> {#return8}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `数值`   | 提取的数值部分 | `number` |
| `单位`   | 提取的单位部分 | `string` |

</div>

## strCalcWithUnit

带有单位的变量运算

<div class="code-border">

#### <divider-base /> {#base9}

<demoStrCalcWithUnit />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrCalcWithUnit.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str1`          | 是       | 带有单位的变量 | `any` |            |
| `str2`          | 是       | 带有单位的变量 | `any` |            |
| `operator`   | 是       | 运算符 | `string` |            |

::: info 相关信息

支持的运算符：
- `+`: 加法运算
- `-`: 减法运算  
- `*`: 乘法运算
- `/`: 除法运算
- `%`: 取余运算
:::

</div>

## strHideSensitive

使用指定符号对指定的文字进行隐藏，默认使用 `*` 符号

<div class="code-border">

#### <divider-base /> {#base10}

<demoStrHideSensitive />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrHideSensitive.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `text`       | 是       | 文字 | `string \| number` |            |
| `index`      | 是       | 指定的文字索引或索引区间 | `number \| Array<number \| unknown> \| StrHideTextIndex \| Array<StrHideTextIndex>` |            |
| `symbol`     | 否       | 指定的符号 | `string` | `"*"` |

::: info 相关信息

StrHideTextIndex 接口：
- `start`: 文字隐藏的开始位置
- `end`: 文字隐藏的结束位置
:::

</div>

## strHasCNChars

校验中文字符

<div class="code-border">

#### <divider-base /> {#base11}

<demoStrHasCNChars />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrHasCNChars.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value`      | 是       | 需要校验的值 | `any` |            |
| `options`    | 否       | 配置选项 | `StrHasCNCharsOptions` |            |

::: info 相关信息

StrHasCNCharsOptions 配置项：
- `unicode`: 自定义 `unicode`，不会覆盖默认的 `unicode`
- `replaceUnicode`: 自定义 `unicode`，会覆盖默认的 `unicode`
- `all`: 是否全部是中文，默认 `false`
- `removeSpaces`: 是否删除全部空格，默认 `false`
:::

</div>

## strCamelize

转驼峰命名

<div class="code-border">

#### <divider-base /> {#base12}

<demoStrCamelize />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrCamelize.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 需要转换的字符串 | `string` |            |

</div>

## strHyphenate

转连字符命名

<div class="code-border">

#### <divider-base /> {#base13}

<demoStrHyphenate />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrHyphenate.vue

</details>

#### <divider-param /> {#param13}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 需要转换的字符串 | `string` |            |

</div>

## strCamelCase

驼峰命名转换

<div class="code-border">

#### <divider-base /> {#base14}

<demoStrCamelCase />

<details>

<summary>查看代码</summary>

<<< @/utils/string/demoStrCamelCase.vue

</details>

#### <divider-param /> {#param14}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | 需要转换的字符串 | `string` |            |
| `options`    | 否       | 配置选项 | `StrCamelCaseOptions` |            |

::: info 相关信息

StrCamelCaseOptions 配置项：
- `pascalCase`: 第一个字符大写: foo-bar → FooBar, 默认值: false
- `preserveConsecutiveUppercase`: 保留连续大写字符: foo-bar → fooBAR, 默认值: false
- `locale`: 本地化设置
:::

</div>