<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoColor from './demoColor.vue'
import demoHexToRgba from './demoHexToRgba.vue'
import demoRgbaToHex from './demoRgbaToHex.vue'
import demoDarken from './demoDarken.vue'
import demoLighten from './demoLighten.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
颜色工具函数
:::

## Color

颜色类，解析颜色字符串为十六进制颜色(hex)、rgb颜色(rgb)、rgba颜色(rgba)

<div class="code-border">

#### <divider-base /> {#base1}

<demoColor />

<details>

<summary>查看代码</summary>

<<< @/utils/color/demoColor.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `color`      | 是       | 颜色字符串，支持HEX、RGB、RGBA格式 | `string` |            |

#### <divider-return /> {#return1}

| **名称** | **说明** |
| -------- | -------- |
| `colorObj` | 颜色对象，包含r、g、b、a属性 |
| `hex` | 十六进制颜色值 |
| `rgb` | RGB颜色值 |
| `rgba` | RGBA颜色值 |

</div>

## hexToRgba

`hex` 转 `rgba`

<div class="code-border">

#### <divider-base /> {#base2}

<demoHexToRgba />

<details>

<summary>查看代码</summary>

<<< @/utils/color/demoHexToRgba.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value`      | 是       | `hex` 颜色字符串，格式为: #ffffff 或 #ffffff80 (带透明度) | `string` |            |

#### <divider-return /> {#return2}

| **名称** | **说明** |
| -------- | -------- |
| `r` | 红色值 (0-255) |
| `g` | 绿色值 (0-255) |
| `b` | 蓝色值 (0-255) |
| `a` | 透明度 (0-1) |

</div>

## rgbaToHex

`rgba` 转 `hex`

<div class="code-border">

#### <divider-base /> {#base3}

<demoRgbaToHex />

<details>

<summary>查看代码</summary>

<<< @/utils/color/demoRgbaToHex.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `rgba`       | 是       | 红(R)，也可以是对象格式: {r: 255, g: 62, b: 218} 或 数组格式: [255, 62, 218] 或字符串格式: 'rgb(255, 62, 218)' | `any` |            |
| `gVal`       | 否       | 绿(G) | `number` |            |
| `bVal`       | 否       | 蓝(B) | `number` |            |
| `aVal`       | 否       | 透明度 | `number` |            |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `hex` | 十六进制颜色值 |

</div>

## darken

颜色值加深

<div class="code-border">

#### <divider-base /> {#base4}

<demoDarken />

<details>

<summary>查看代码</summary>

<<< @/utils/color/demoDarken.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `color`      | 是       | `hex` 格式颜色字符串 | `string` |            |
| `level`      | 是       | 色值度 | `number` |            |

#### <divider-return /> {#return4}

| **名称** | **说明** |
| -------- | -------- |
| `hex` | 加深后的颜色值，`hex` 格式 |

</div>

## lighten

颜色值变浅

<div class="code-border">

#### <divider-base /> {#base5}

<demoLighten />

<details>

<summary>查看代码</summary>

<<< @/utils/color/demoLighten.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `color`      | 是       | `hex` 格式颜色字符串 | `string` |            |
| `level`      | 是       | 色值度 | `number` |            |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `hex` | 变浅后的颜色值，`hex` 格式 |

</div>