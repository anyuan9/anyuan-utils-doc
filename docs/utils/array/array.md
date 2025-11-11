<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(19)

import demoToArray from './demoToArray.vue'
import demoArrayFrom from './demoArrayFrom.vue'
import demoArrayFlat from './demoArrayFlat.vue'
import demoArraySort from './demoArraySort.vue'
import demoArrayMerge from './demoArrayMerge.vue'
import demoArrayPartition from './demoArrayPartition.vue'
import demoArrayIndexOf from './demoArrayIndexOf.vue'
import demoArrayCompact from './demoArrayCompact.vue'
import demoArrayUniq from './demoArrayUniq.vue'
import demoArrayUniqBy from './demoArrayUniqBy.vue'
import demoArrayClosest from './demoArrayClosest.vue'
import demoArrayShuffle from './demoArrayShuffle.vue'
import demoArrayContainsAll from './demoArrayContainsAll.vue'
import demoArrayIntersection from './demoArrayIntersection.vue'
import demoArrayUnion from './demoArrayUnion.vue'
import demoArrayDifference from './demoArrayDifference.vue'
import demoArrayXor from './demoArrayXor.vue'
import demoArrayElementSwap from './demoArrayElementSwap.vue'
import demoArrayElementMoveUp from './demoArrayElementMoveUp.vue'
import demoArrayElementMoveDown from './demoArrayElementMoveDown.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
数组工具函数
:::

## toArray

将输入值转换为数组

<div class="code-border">

#### <divider-base /> {#base1}

<demoToArray />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoToArray.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `value`      | 是       | 输入值 | `T \| T[]` |            |

#### <divider-return /> {#return1}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 转换后的数组 |

</div>

## arrayFrom

生成长度为 num 的数组

<div class="code-border">

#### <divider-base /> {#base2}

<demoArrayFrom />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayFrom.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `length`     | 是       | 数组长度 | `number` |            |
| `initializer`| 否       | 初始化函数或初始化值 | `T \| ((item: any, index: number) => T)` |            |

#### <divider-return /> {#return2}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 生成的数组 |

</div>

## arrayFlat

数组扁平化

<div class="code-border">

#### <divider-base /> {#base3}

<demoArrayFlat />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayFlat.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待处理的数组 | `Nullable<Arrayable<T \| Array<T>>>` |            |
| `depth`      | 否       | 扁平化的深度 | `number` | `1`        |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 扁平化的数组 |

</div>

## arraySort

对数组进行排序，不改变原数组

<div class="code-border">

#### <divider-base /> {#base4}

<demoArraySort />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArraySort.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 要排序的数组 | `T[]` | `[]`       |
| `compareFn`  | 否       | 排序函数（asc升序排序，desc降序排序，自定义排序） | `((a: T, b: T) => number) \| "asc" \| "desc"` | `"asc"`     |

#### <divider-return /> {#return4}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 排序后的新数组 |

</div>

## arrayMerge

将多个数组或类数组对象合并成一个数组

<div class="code-border">

#### <divider-base /> {#base5}

<demoArrayMerge />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayMerge.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `args`       | 是       | 多个数组 | `T[]` |            |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 合并的一个数组 |

</div>

## arrayPartition

数组分组函数，可以将数组中的元素依据不同标准分组

<div class="code-border">

#### <divider-base /> {#base6}

<demoArrayPartition />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayPartition.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待分组的数组 | `T[]` |            |
| `filters`    | 是       | 过滤函数数组 | `Array<(item: T, index: number, array: T[]) => boolean>` |            |

#### <divider-return /> {#return6}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 分组后的二维数组 |

</div>

## arrayIndexOf

查找数组元素的索引，如果不存在则返回 -1

<div class="code-border">

#### <divider-base /> {#base7}

<demoArrayIndexOf />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayIndexOf.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 数组 | `T[]` |            |
| `compare`    | 是       | 比较函数，自定义比对函数、'min'， 'max'、数组元素等 | `((prevIndex: number, current: T, index: number, arr: T[]) => boolean) \| T \| "min" \| "max"` |            |

#### <divider-return /> {#return7}

| **名称** | **说明** |
| -------- | -------- |
| `number` | 元素索引，如果不存在则返回 -1 |

</div>

## arrayCompact

去除数组中的无效/无用值（0, false, '', NaN, ... 等）

<div class="code-border">

#### <divider-base /> {#base8}

<demoArrayCompact />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayCompact.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待处理的数组 | `T[]` |            |

#### <divider-return /> {#return8}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 处理后的数组 |

</div>

## arrayUniq

数组元素去重

<div class="code-border">

#### <divider-base /> {#base9}

<demoArrayUniq />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayUniq.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待去重的数组 | `T[]` | `[]`       |

#### <divider-return /> {#return9}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 去重后的数组 |

</div>

## arrayUniqBy

数组元素根据自定义条件去重

<div class="code-border">

#### <divider-base /> {#base10}

<demoArrayUniqBy />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayUniqBy.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待去重的数组 | `T[]` |            |
| `equalFn`    | 是       | 判断元素是否在结果数组中出现 | `(currentItem: T, accumulatedItem: T) => boolean` |            |

#### <divider-return /> {#return10}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 去重后的数组 |

</div>

## arrayClosest

获取数组中最接近的元素

<div class="code-border">

#### <divider-base /> {#base11}

<demoArrayClosest />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayClosest.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 数值数组 | `any[]` |            |
| `num`        | 是       | 目标数值 | `number` |            |

#### <divider-return /> {#return11}

| **名称** | **说明** |
| -------- | -------- |
| `number` | 最接近的数值 |

</div>

## arrayShuffle

数组元素重新排序(打乱数组)。`Fisher-Yates`（也称为`Knuth`）洗牌算法

<div class="code-border">

#### <divider-base /> {#base12}

<demoArrayShuffle />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayShuffle.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 待打乱的数组 | `any[]` |            |

#### <divider-return /> {#return12}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 打乱后的数组 |

</div>

## arrayContainsAll

判断一个数组中是否包含了另一个由基本数据类型组成的数组中的全部元素

<div class="code-border">

#### <divider-base /> {#base13}

<demoArrayContainsAll />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayContainsAll.vue

</details>

#### <divider-param /> {#param13}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `parentArray`| 是       | 母体数组 | `T[]` |            |
| `childArray` | 是       | 子体数组 | `T[]` |            |
| `compareFn`  | 否       | 比较函数 | `(a: T, b: T) => boolean` | `(a, b) => a === b` |

#### <divider-return /> {#return13}

| **名称** | **说明** |
| -------- | -------- |
| `boolean` | 母体是否包含子体全部元素 |

</div>

## arrayIntersection

两个数组的交集，即所有数组都共同包含的元素

<div class="code-border">

#### <divider-base /> {#base14}

<demoArrayIntersection />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayIntersection.vue

</details>

#### <divider-param /> {#param14}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `arr1`       | 是       | 第一个数组 | `T[]` | `[]`       |
| `arr2`       | 是       | 第二个数组 | `T[]` | `[]`       |

#### <divider-return /> {#return14}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 交集数组 |

</div>

## arrayUnion

两个数组的并集，即在给定数组内出现的所有元素

<div class="code-border">

#### <divider-base /> {#base15}

<demoArrayUnion />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayUnion.vue

</details>

#### <divider-param /> {#param15}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `arr1`       | 是       | 第一个数组 | `T[]` | `[]`       |
| `arr2`       | 是       | 第二个数组 | `T[]` | `[]`       |

#### <divider-return /> {#return15}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 并集数组 |

</div>

## arrayDifference

两个数组的差集，即数组arr1有，arr2所没有的

<div class="code-border">

#### <divider-base /> {#base16}

<demoArrayDifference />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayDifference.vue

</details>

#### <divider-param /> {#param16}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `arr1`       | 是       | 第一个数组 | `T[]` | `[]`       |
| `arr2`       | 是       | 第二个数组 | `T[]` | `[]`       |

#### <divider-return /> {#return16}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 差集数组 |

</div>

## arrayXor

两个数组的补集，即两个数组各自没有的集合

<div class="code-border">

#### <divider-base /> {#base17}

<demoArrayXor />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayXor.vue

</details>

#### <divider-param /> {#param17}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `arr1`       | 是       | 第一个数组 | `T[]` | `[]`       |
| `arr2`       | 是       | 第二个数组 | `T[]` | `[]`       |

#### <divider-return /> {#return17}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 补集数组 |

</div>

## arrayElementSwap

交换数组中两个位置的元素

<div class="code-border">

#### <divider-base /> {#base18}

<demoArrayElementSwap />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayElementSwap.vue

</details>

#### <divider-param /> {#param18}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 要操作的数组 | `T[]` |            |
| `index1`     | 是       | 第一个位置的索引 | `number` |            |
| `index2`     | 是       | 第二个位置的索引 | `number` |            |

#### <divider-return /> {#return18}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 交换后的数组（原地修改，返回原数组引用） |

</div>

## arrayElementMoveUp

指定位置的数组元素向上移动一位

<div class="code-border">

#### <divider-base /> {#base19}

<demoArrayElementMoveUp />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayElementMoveUp.vue

</details>

#### <divider-param /> {#param19}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 要操作的数组 | `T[]` |            |
| `index`      | 是       | 数组元素下标 | `number` |            |
| `loop`       | 否       | 是否循环套环（第一个元素上移到最后一个位置） | `boolean` | `false`    |

#### <divider-return /> {#return19}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 移动后的数组 |

</div>

## arrayElementMoveDown

指定位置的数组元素向下移动一位

<div class="code-border">

#### <divider-base /> {#base20}

<demoArrayElementMoveDown />

<details>

<summary>查看代码</summary>

<<< @/utils/array/demoArrayElementMoveDown.vue

</details>

#### <divider-param /> {#param20}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `array`      | 是       | 要操作的数组 | `T[]` |            |
| `index`      | 是       | 数组元素下标 | `number` |            |
| `loop`       | 否       | 是否循环套环（最后一个元素下移到第一个位置） | `boolean` | `false`    |

#### <divider-return /> {#return20}

| **名称** | **说明** |
| -------- | -------- |
| `Array` | 移动后的数组 |

</div>