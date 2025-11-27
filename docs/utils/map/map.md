<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(4)

import demoWgs84ToGcj02 from './demoWgs84ToGcj02.vue'
import demoGcj02ToWgs84 from './demoGcj02ToWgs84.vue'
import demoGcj02ToBd09 from './demoGcj02ToBd09.vue'
import demoBd09ToGcj02 from './demoBd09ToGcj02.vue'
import demoWgs84ToBd09 from './demoWgs84ToBd09.vue'
import demoBd09ToWgs84 from './demoBd09ToWgs84.vue'
import demoWgs84ToWebMercator from './demoWgs84ToWebMercator.vue'
import demoWebMercatorToWgs84 from './demoWebMercatorToWgs84.vue'
import demoTransformCoord from './demoTransformCoord.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
坐标系转换工具函数

1. WGS84（EPSG:4326）：国际标准坐标系，GPS获取的原始坐标，真实、未经加密的全球定位坐标
2. GCJ02（火星坐标系）：在WGS-84基础上非线性加密，国内主流地图使用的“标准”地图坐标系，如高德、腾讯、谷歌中国地图
3. BD09（百度坐标系）：在GCJ02基础上再次加密，百度地图特有的坐标系
4. Web Mercator（EPSG:3857/EPSG:900913）：Web地图常用的投影坐标系
   :::

## wgs84ToGcj02

WGS84(EPSG:4326)坐标系 转 GCJ02(火星坐标系)

<div class="code-border">

#### <divider-base /> {#base1}

<demoWgs84ToGcj02 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoWgs84ToGcj02.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明**  | **类型** | **默认值** |
| ------------ | -------- | --------- | -------- | ---------- |
| `lng`        | 是       | WGS84经度 | `number` |            |
| `lat`        | 是       | WGS84纬度 | `number` |            |

#### <divider-return /> {#return1}

| **名称**        | **说明**                       |
| --------------- | ------------------------------ |
| `Array<number>` | GCJ02坐标经度、纬度 [lng, lat] |

::: info 相关信息
对于中国境外的坐标，此函数会直接返回原始坐标而不进行转换
:::

</div>

## gcj02ToWgs84

GCJ02(火星坐标系) 转 WGS84(EPSG:4326)坐标系

<div class="code-border">

#### <divider-base /> {#base2}

<demoGcj02ToWgs84 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoGcj02ToWgs84.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明**  | **类型** | **默认值** |
| ------------ | -------- | --------- | -------- | ---------- |
| `lng`        | 是       | GCJ02经度 | `number` |            |
| `lat`        | 是       | GCJ02纬度 | `number` |            |

#### <divider-return /> {#return2}

| **名称**        | **说明**                       |
| --------------- | ------------------------------ |
| `Array<number>` | WGS84坐标经度、纬度 [lng, lat] |

</div>

## gcj02ToBd09

GCJ02(火星坐标系)转BD09(百度坐标系)

<div class="code-border">

#### <divider-base /> {#base3}

<demoGcj02ToBd09 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoGcj02ToBd09.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明**  | **类型** | **默认值** |
| ------------ | -------- | --------- | -------- | ---------- |
| `lng`        | 是       | GCJ02经度 | `number` |            |
| `lat`        | 是       | GCJ02纬度 | `number` |            |

#### <divider-return /> {#return3}

| **名称**        | **说明**                      |
| --------------- | ----------------------------- |
| `Array<number>` | BD09坐标经度、纬度 [lng, lat] |

</div>

## bd09ToGcj02

BD09(百度坐标系)转GCJ02(火星坐标系)

<div class="code-border">

#### <divider-base /> {#base4}

<demoBd09ToGcj02 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoBd09ToGcj02.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng`        | 是       | BD09经度 | `number` |            |
| `lat`        | 是       | BD09纬度 | `number` |            |

#### <divider-return /> {#return4}

| **名称**        | **说明**                       |
| --------------- | ------------------------------ |
| `Array<number>` | GCJ02坐标经度、纬度 [lng, lat] |

</div>

## wgs84ToBd09

WGS84(EPSG:4326)坐标系 转 BD09(百度坐标系)

<div class="code-border">

#### <divider-base /> {#base5}

<demoWgs84ToBd09 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoWgs84ToBd09.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明**  | **类型** | **默认值** |
| ------------ | -------- | --------- | -------- | ---------- |
| `lng`        | 是       | WGS84经度 | `number` |            |
| `lat`        | 是       | WGS84纬度 | `number` |            |

#### <divider-return /> {#return5}

| **名称**        | **说明**                      |
| --------------- | ----------------------------- |
| `Array<number>` | BD09坐标经度、纬度 [lng, lat] |

</div>

## bd09ToWgs84

BD09(百度坐标系) 转 WGS84(EPSG:4326)坐标系

<div class="code-border">

#### <divider-base /> {#base6}

<demoBd09ToWgs84 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoBd09ToWgs84.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `lng`        | 是       | BD09经度 | `number` |            |
| `lat`        | 是       | BD09纬度 | `number` |            |

#### <divider-return /> {#return6}

| **名称**        | **说明**                       |
| --------------- | ------------------------------ |
| `Array<number>` | WGS84坐标经度、纬度 [lng, lat] |

</div>

## wgs84ToWebMercator

WGS84(EPSG:4326)坐标系 转 WebMercator(EPSG:3857)坐标系

<div class="code-border">

#### <divider-base /> {#base7}

<demoWgs84ToWebMercator />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoWgs84ToWebMercator.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明**  | **类型** | **默认值** |
| ------------ | -------- | --------- | -------- | ---------- |
| `lng`        | 是       | WGS84经度 | `number` |            |
| `lat`        | 是       | WGS84纬度 | `number` |            |

#### <divider-return /> {#return7}

| **名称**        | **说明**                             |
| --------------- | ------------------------------------ |
| `Array<number>` | WebMercator坐标经度、纬度 [lng, lat] |

</div>

## webMercatorToWgs84

WebMercator(EPSG:3857)坐标系 转 WGS84(EPSG:4326)坐标系

<div class="code-border">

#### <divider-base /> {#base8}

<demoWebMercatorToWgs84 />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoWebMercatorToWgs84.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明**        | **类型** | **默认值** |
| ------------ | -------- | --------------- | -------- | ---------- |
| `lng`        | 是       | WebMercator经度 | `number` |            |
| `lat`        | 是       | WebMercator纬度 | `number` |            |

#### <divider-return /> {#return8}

| **名称**        | **说明**                       |
| --------------- | ------------------------------ |
| `Array<number>` | WGS84坐标经度、纬度 [lng, lat] |

</div>

## transformCoord

坐标转换

<div class="code-border">

#### <divider-base /> {#base9}

<demoTransformCoord />

<details>

<summary>查看代码</summary>

<<< @/utils/map/demoTransformCoord.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明**                                            | **类型**           | **默认值** |
| ------------ | -------- | --------------------------------------------------- | ------------------ | ---------- |
| `lng`        | 是       | 经度                                                | `number`           |            |
| `lat`        | 是       | 纬度                                                | `number`           |            |
| `from`       | 是       | 来源坐标系, 可选值: WGS84, GCJ02, BD09, WebMercator | `CoordinateSystem` |            |
| `to`         | 是       | 目标坐标系, 可选值: WGS84, GCJ02, BD09, WebMercator | `CoordinateSystem` |            |

#### <divider-return /> {#return9}

| **名称**        | **说明**                            |
| --------------- | ----------------------------------- |
| `Array<number>` | 目标坐标系坐标经度、纬度 [lng, lat] |

</div>
