<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoDateFormat from './demoDateFormat.vue'
import demoGetTimezoneInfo from './demoGetTimezoneInfo.vue'
import demoGetPassTime from './demoGetPassTime.vue'
import demoGetRemainTime from './demoGetRemainTime.vue'
import demoGetDiffTime from './demoGetDiffTime.vue'
import demoGetWeekday from './demoGetWeekday.vue'
import demoGetMonthDays from './demoGetMonthDays.vue'
import demoGetMonthFirstDate from './demoGetMonthFirstDate.vue'
import demoGetMonthLastDate from './demoGetMonthLastDate.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
日期工具函数
:::

## dateFormat

获取格式化后的日期

如果输入非日期，则返回空字符串。

<div class="code-border">

#### <divider-base /> {#base1}

<demoDateFormat />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoDateFormat.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明**                                   | **类型**                                                 | **默认值**            |
| ------------ | -------- | ------------------------------------------ | -------------------------------------------------------- | --------------------- |
| `val`        | 是       | 日期，可以是 Date 对象、时间戳或日期字符串 | `any`                                                    |                       |
| `format`     | 否       | 日期格式(与moment.js类似)                  | `string`                                                 | `YYYY/MM/DD HH:mm:ss` |
| `options`    | 否       | 配置项                                     | `{ locales: string; }，locales表示本地语言，例如'zh-CN'` |                       |

::: info 相关信息

format 日期格式，支持以下占位符：

- YYYY: 4位年份
- YY: 2位年份
- MM: 2位月份（01-12）
- M: 月份（1-12）
- DD: 2位日期（01-31）
- D: 日期（1-31）
- HH: 2位小时（00-23）
- H: 小时（0-23）
- hh: 2位12小时制小时（01-12）
- h: 12小时制小时（1-12）
- mm: 2位分钟（00-59）
- m: 分钟（0-59）
- ss: 2位秒数（00-59）
- s: 秒数（0-59）
- SSS: 3位毫秒（000-999）
- A: 上午/下午（AM/PM）
- a: 上午/下午（am/pm）
- tz: 时区信息，例如：+08:00、-05:00
  :::

</div>

## getTimezoneInfo

获取时区信息

<div class="code-border">

#### <divider-base /> {#base2}

<demoGetTimezoneInfo />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetTimezoneInfo.vue

</details>

#### <divider-return /> {#return2}

| **名称** | **说明**                                         |
| -------- | ------------------------------------------------ |
| `name`   | 时区名称，例如："Africa/Abidjan", "Africa/Accra" |
| `offset` | 时区偏移量（分钟），例如：-480, 360              |
| `gmt`    | 时区信息，例如："GMT+08:00", "GMT+05:30"         |
| `hasDST` | 是否支持夏令时（判断标准：如果当前时间距离12月31日的差值小于当前时间距离1月1日的差值，则为夏令时） |

</div>

## getPassTime

格式化开始时间距当前时间的已过时间，例如'1年前', '2个月前', '3天前', '4小时前', '5分钟前', '6秒前', '刚刚'

<div class="code-border">

#### <divider-base /> {#base3}

<demoGetPassTime />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetPassTime.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `startTime`  | 是       | 开始时间，可以是 Date 对象、时间戳或日期字符串     | `any`    |            |

</div>

## getRemainTime

格式化当前时间距结束时间的剩余时间，例如'还剩1年', '还剩2个月', '还剩3天', '还剩4小时', '还剩5分钟', '还剩6秒', '即将到期'

<div class="code-border">

#### <divider-base /> {#base4}

<demoGetRemainTime />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetRemainTime.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `endTime`    | 是       | 结束时间，可以是 Date 对象、时间戳或日期字符串     | `any`    |            |

</div>

## getDiffTime

计算两个时间相差的天数

<div class="code-border">

#### <divider-base /> {#base5}

<demoGetDiffTime />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetDiffTime.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `startTime`  | 是       | 开始时间，可以是 Date 对象、时间戳或日期字符串 | `any`    |            |
| `endTime`    | 否       | 结束时间，默认为当前时间 | `any`    | `new Date()` |
| `unit`       | 否       | 单位，支持：milliseconds、seconds、minutes、hours、days、auto | `string` |            |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `DiffTimeBreakdown` | 时间差对象，包含 days、hours、minutes、seconds、milliseconds 属性 |

</div>

## getWeekday

获取当前是星期几

<div class="code-border">

#### <divider-base /> {#base6}

<demoGetWeekday />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetWeekday.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 日期，可以是 Date 对象、时间戳或日期字符串 | `any`    |            |
| `prefix`     | 否       | 自定义前缀 | `string` | `星期`     |

</div>

## getMonthDays

获取指定日期月份的总天数

<div class="code-border">

#### <divider-base /> {#base7}

<demoGetMonthDays />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetMonthDays.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 日期，可以是 Date 对象、时间戳或日期字符串 | `any`    |            |

</div>

## getMonthFirstDate

获取某年某月的第一天

<div class="code-border">

#### <divider-base /> {#base8}

<demoGetMonthFirstDate />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetMonthFirstDate.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 日期，可以是 Date 对象、时间戳或日期字符串 | `any`    |            |

</div>

## getMonthLastDate

获取某年某月的最后一天

<div class="code-border">

#### <divider-base /> {#base9}

<demoGetMonthLastDate />

<details>

<summary>查看代码</summary>

<<< @/utils/date/demoGetMonthLastDate.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 日期，可以是 Date 对象、时间戳或日期字符串 | `any`    |            |

</div>