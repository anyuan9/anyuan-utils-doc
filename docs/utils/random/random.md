<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoRandomBoolean from './demoRandomBoolean.vue'
import demoRandomNumber from './demoRandomNumber.vue'
import demoRandomInteger from './demoRandomInteger.vue'
import demoRandomString from './demoRandomString.vue'
import demoRandomDate from './demoRandomDate.vue'
import demoRandomArrayElement from './demoRandomArrayElement.vue'
import demoRandomColor from './demoRandomColor.vue'
import demoRandomGradient from './demoRandomGradient.vue'
import demoRandomIP from './demoRandomIP.vue'
import demoRandomMAC from './demoRandomMAC.vue'
import demoRandomUUID from './demoRandomUUID.vue'
import demoRandomTelePhone from './demoRandomTelePhone.vue'
import demoRandomMobilePhone from './demoRandomMobilePhone.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
随机工具函数
:::

## randomBoolean

生成随机布尔值

<div class="code-border">

#### <divider-base /> {#base1}

<demoRandomBoolean />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomBoolean.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `rate`       | 否       | 返回 true 的概率 | `number` | `0.5`      |

</div>

## randomNumber

生成随机数字（含小数）

<div class="code-border">

#### <divider-base /> {#base2}

<demoRandomNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomNumber.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `min`        | 否       | 最小值（包含） | `number` | `0`        |
| `max`        | 否       | 最大值（不包含） | `number` | `1`        |
| `decimals`   | 否       | 小数位数 | `number` | `2`        |

</div>

## randomInteger

生成随机整数

<div class="code-border">

#### <divider-base /> {#base3}

<demoRandomInteger />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomInteger.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `min`        | 否       | 最小值（包含） | `number` | `0`        |
| `max`        | 否       | 最大值（不包含） | `number` | `1`        |

</div>

## randomString

生成随机字符串

<div class="code-border">

#### <divider-base /> {#base4}

<demoRandomString />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomString.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `length`     | 否       | 字符串长度 | `number` | `8`        |
| `chars`      | 否       | 可选的字符集 | `string` | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789` |

</div>

## randomDate

生成随机日期

<div class="code-border">

#### <divider-base /> {#base5}

<demoRandomDate />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomDate.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `start`      | 否       | 开始日期 | `Date`   | `new Date(0)` |
| `end`        | 否       | 结束日期 | `Date`   | `new Date()` |

</div>

## randomArrayElement

从数组中随机选择元素

<div class="code-border">

#### <divider-base /> {#base6}

<demoRandomArrayElement />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomArrayElement.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 源数组 | `any[]`  |            |

</div>

## randomColor

生成随机颜色值

<div class="code-border">

#### <divider-base /> {#base7}

<demoRandomColor />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomColor.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `mode`       | 否       | 颜色格式 | `'rgb' \| 'rgba' \| 'hsl' \| 'hex'` | `'hex'` |

</div>

## randomGradient

随机生成渐变色

<div class="code-border">

#### <divider-base /> {#base8}

<demoRandomGradient />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomGradient.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `options`    | 否       | 配置项 | `GradientOptions` | `{}` |

::: info 相关信息

GradientOptions 配置项：

- `baseHue`: 基础色相（0-360度），默认为随机色相
- `hueOffset`: 色相偏移度数，默认为30度
- `saturation`: 饱和度百分比（50-100%），默认为70%
- `lightness`: 亮度百分比（40-70%），默认为60%
- `angle`: 渐变角度（0-360度），默认为135度
- `randomizeHue`: 是否随机生成色相，默认为false
- `randomizeSaturation`: 是否随机生成饱和度，默认为false
- `randomizeLightness`: 是否随机生成亮度，默认为false
- `randomizeAngle`: 是否随机生成渐变角度，默认为false

:::

</div>

## randomIP

生成随机IP地址（IPv4）

<div class="code-border">

#### <divider-base /> {#base9}

<demoRandomIP />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomIP.vue

</details>

#### <divider-return /> {#return9}

随机生成的IPv4地址，格式为 `x.x.x.x`

</div>

## randomMAC

生成随机MAC地址

<div class="code-border">

#### <divider-base /> {#base10}

<demoRandomMAC />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomMAC.vue

</details>

#### <divider-return /> {#return10}

随机生成的MAC地址，格式为 `xx:xx:xx:xx:xx:xx`

</div>

## randomUUID

生成随机UUID（版本4）

<div class="code-border">

#### <divider-base /> {#base11}

<demoRandomUUID />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomUUID.vue

</details>

#### <divider-return /> {#return11}

随机生成的UUID，格式为 `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`

</div>

## randomTelePhone

生成随机的中国大陆电话号码

<div class="code-border">

#### <divider-base /> {#base12}

<demoRandomTelePhone />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomTelePhone.vue

</details>

#### <divider-return /> {#return12}

随机生成的电话号码，格式为 `区号-电话号码`

</div>

## randomMobilePhone

生成随机的中国大陆手机号码

<div class="code-border">

#### <divider-base /> {#base13}

<demoRandomMobilePhone />

<details>

<summary>查看代码</summary>

<<< @/utils/random/demoRandomMobilePhone.vue

</details>

#### <divider-return /> {#return13}

随机生成的11位手机号码

</div>