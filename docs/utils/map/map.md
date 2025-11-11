<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import demoBd09ToGcj02 from './demoBd09ToGcj02.vue'
import demoGcj02ToBd09 from './demoGcj02ToBd09.vue'
import demoWgs84ToGcj02 from './demoWgs84ToGcj02.vue'
import demoGcj02ToWgs84 from './demoGcj02ToWgs84.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
坐标系转换工具函数
:::

## bd09ToGcj02

百度坐标系转火星坐标系

<div class="code-border">

#### <divider-base /> {#base1}

<demoBd09ToGcj02 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoBd09ToGcj02.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng` | 是 | 经度 | `number` |  |
| `lat` | 是 | 纬度 | `number` |  |

#### <divider-return /> {#return1}

| **名称** | **说明** |
| -------- | -------- |
| `Array<number>` | 经、纬度组成的数组 |

</div>

## gcj02ToBd09

火星坐标系转百度坐标系

<div class="code-border">

#### <divider-base /> {#base2}

<demoGcj02ToBd09 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoGcj02ToBd09.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng` | 是 | 经度 | `number` |  |
| `lat` | 是 | 纬度 | `number` |  |

#### <divider-return /> {#return2}

| **名称** | **说明** |
| -------- | -------- |
| `Array<number>` | 经、纬度组成的数组 |

</div>

## wgs84ToGcj02

WGS84坐标系转火星坐标系

<div class="code-border">

#### <divider-base /> {#base3}

<demoWgs84ToGcj02 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoWgs84ToGcj02.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng` | 是 | 经度 | `number` |  |
| `lat` | 是 | 纬度 | `number` |  |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `Array<number>` | 经、纬度组成的数组 |

::: info 相关信息
对于中国境外的坐标，此函数会直接返回原始坐标而不进行转换
:::

</div>

## gcj02ToWgs84

火星坐标系转WGS84坐标系

<div class="code-border">

#### <divider-base /> {#base4}

<demoGcj02ToWgs84 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoGcj02ToWgs84.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng` | 是 | 经度 | `number` |  |
| `lat` | 是 | 纬度 | `number` |  |

#### <divider-return /> {#return4}

| **名称** | **说明** |
| -------- | -------- |
| `Array<number>` | 经、纬度组成的数组 |

</div>