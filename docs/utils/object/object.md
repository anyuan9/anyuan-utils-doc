<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(11)

import demoHasOwnProp from './demoHasOwnProp.vue'
import demoClone from './demoClone.vue'
import demoCloneDeep from './demoCloneDeep.vue'
import demoObjectDelProperty from './demoObjectDelProperty.vue'
import demoObjectFlat from './demoObjectFlat.vue'
import demoObjectPick from './demoObjectPick.vue'
import demoObjectChain from './demoObjectChain.vue'
import demoObjectMerge from './demoObjectMerge.vue'
import demoObjectClean from './demoObjectClean.vue'
import demoJSONStringify from './demoJSONStringify.vue'
import demoJSONParse from './demoJSONParse.vue'
import demoObjectToFormData from './demoObjectToFormData.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
对象工具函数
:::

## hasOwnProp

判断对象自身属性中是否具有指定的属性

<div class="code-border">

#### <divider-base /> {#base1}

<demoHasOwnProp />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoHasOwnProp.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 要判断的对象 | `any` |            |
| `key`        | 是       | 指定的属性 | `PropertyKey` |            |

</div>

## clone

浅拷贝/深拷贝对象

<div class="code-border">

#### <divider-base /> {#base2}

<demoClone />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoClone.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 需要拷贝的值 | `any` |            |
| `deep`       | 否       | 是否深拷贝 | `boolean` | `false` |

</div>

## cloneDeep

深拷贝对象

<div class="code-border">

#### <divider-base /> {#base3}

<demoCloneDeep />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoCloneDeep.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val`        | 是       | 需要拷贝的值 | `any` |            |

</div>

## objectDelProperty

从对象中删除指定的属性

<div class="code-border">

#### <divider-base /> {#base4}

<demoObjectDelProperty />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectDelProperty.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 需要删除属性的对象 | `Record<string, any>` |            |
| `props`      | 是       | 要删除的属性 | `string \| string[]` |            |

</div>

## objectFlat

对象属性的扁平化

<div class="code-border">

#### <divider-base /> {#base5}

<demoObjectFlat />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectFlat.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 否       | 需要扁平化的对象 | `Record<string, any>` | `{}` |
| `preKey`     | 否       | 前缀 | `string` | `""` |
| `res`        | 否       | 结果对象 | `Record<string, any>` | `{}` |

</div>

## objectPick

按照给定props从给定对象中择取成员

<div class="code-border">

#### <divider-base /> {#base6}

<demoObjectPick />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectPick.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 源对象 | `Record<string, any>` |            |
| `props`      | 是       | 要提取的属性的数组 | `Array<string \| Record<string, string>>` |            |

</div>

## objectChain

链式调用 - 安全地访问嵌套对象属性

<div class="code-border">

#### <divider-base /> {#base7}

<demoObjectChain />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectChain.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 要访问的目标对象 | `any` |            |
| `...props`   | 是       | 属性路径 | `string[]` |            |

</div>

## objectMerge

对象合并

<div class="code-border">

#### <divider-base /> {#base8}

<demoObjectMerge />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectMerge.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `target1`    | 是       | 目标对象1 | `Record<string, any>` |            |
| `target2`    | 是       | 目标对象2 | `Record<string, any>` |            |
| `options`    | 否       | 合并选项 | `MergeOptions` |            |

::: info 相关信息

MergeOptions 配置项：

- `deep`: 是否深度合并
- `coverObject`: 是否覆盖对象
- `coverArray`: 是否覆盖数组
- `returnCopy`: 是否返回拷贝
  :::

</div>

## objectClean

清理对象空值

<div class="code-border">

#### <divider-base /> {#base9}

<demoObjectClean />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectClean.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 需要清理的对象 | `any` |            |
| `options`    | 否       | 清理选项 | `CleanOptions` |            |

::: info 相关信息

CleanOptions 配置项：

- `includeKeys`: 白名单字段
- `excludeKeys`: 黑名单字段
- `stripKeysInObjects`: 指定需要从某些对象字段中移除的子字段
- `excludeEmptyObjects`: 清理空对象
- `excludeEmptyArrays`: 清理空数组
- `excludeWhitespaceStrings`: 清理空白字符串
- `customFilter`: 自定义字段过滤函数
- `maxDepth`: 最大递归深度
- `allowRootIfEmpty`: 是否允许顶层返回undefined
  :::

</div>

## JSONStringify

JSON序列化

<div class="code-border">

#### <divider-base /> {#base10}

<demoJSONStringify />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoJSONStringify.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 需要序列化的对象 | `any` |            |
| `encode`     | 否       | 是否URL编码 | `boolean` | `false` |

</div>

## JSONParse

JSON解析

<div class="code-border">

#### <divider-base /> {#base11}

<demoJSONParse />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoJSONParse.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str`        | 是       | JSON字符串 | `string` |            |

</div>

## objectToFormData

FormData格式化

<div class="code-border">

#### <divider-base /> {#base12}

<demoObjectToFormData />

<details>

<summary>查看代码</summary>

<<< @/utils/object/demoObjectToFormData.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `obj`        | 是       | 需要格式化的对象 | `any` |            |
| `options`    | 否       | 格式化选项 | `FormDataOptions` |            |

::: info 相关信息

FormDataOptions 配置项：

- `fileKey`: 文件字段键名
- `handleFile`: 自定义处理文件的函数
- `filter`: 需要过滤掉的值
  :::

</div>