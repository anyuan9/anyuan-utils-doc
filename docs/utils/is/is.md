<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoIs from './demoIs.vue';
import demoIsBoolean from './demoIsBoolean.vue';
import demoIsNumber from './demoIsNumber.vue';
import demoIsValidNumber from './demoIsValidNumber.vue';
import demoIsInteger from './demoIsInteger.vue';
import demoIsFloat from './demoIsFloat.vue';
import demoIsString from './demoIsString.vue';
import demoIsUndefined from './demoIsUndefined.vue';
import demoIsNull from './demoIsNull.vue';
import demoIsSymbol from './demoIsSymbol.vue';
import demoIsArray from './demoIsArray.vue';
import demoIsTypedArray from './demoIsTypedArray.vue';
import demoIsArrayLength from './demoIsArrayLength.vue';
import demoIsArrayLike from './demoIsArrayLike.vue';
import demoIsDate from './demoIsDate.vue';
import demoIsMap from './demoIsMap.vue';
import demoIsSet from './demoIsSet.vue';
import demoIsRegExp from './demoIsRegExp.vue';
import demoIsObject from './demoIsObject.vue';
import demoIsPlainObject from './demoIsPlainObject.vue';
import demoIsFunction from './demoIsFunction.vue';
import demoIsPromise from './demoIsPromise.vue';
import demoIsPrimitive from './demoIsPrimitive.vue';
import demoIsEmpty from './demoIsEmpty.vue';
import demoIsObjectEmpty from './demoIsObjectEmpty.vue';
import demoIsJsonString from './demoIsJsonString.vue';
import demoIsBlob from './demoIsBlob.vue';
import demoIsBase64 from './demoIsBase64.vue';
import demoIsElement from './demoIsElement.vue';
import demoIsWindow from './demoIsWindow.vue';
import demoIsBrowser from './demoIsBrowser.vue';
import demoIsClient from './demoIsClient.vue';
import demoIsServer from './demoIsServer.vue';
import demoIsValidDate from './demoIsValidDate.vue';
import demoIsToday from './demoIsToday.vue';
import demoIsLeapYear from './demoIsLeapYear.vue';
import demoIsEqualObject from './demoIsEqualObject.vue';
import demoIsEqualArray from './demoIsEqualArray.vue';
import demoIsEqual from './demoIsEqual.vue';
import demoIsElementInViewport from './demoIsElementInViewport.vue';
import demoIsElementFocused from './demoIsElementFocused.vue';
import demoIsElementOrDescendantFocused from './demoIsElementOrDescendantFocused.vue';
import demoIsInChina from './demoIsInChina.vue';
</script>

::: tip 支持任意 `JavaScript` 环境或框架
类型判断工具函数
:::

## is

判断某值是某种类型

<div class="code-border">

#### <divider-base /> {#base1}

<demoIs />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIs.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明**                         | **类型** | **默认值** |
| ------------ | -------- | -------------------------------- | -------- | ---------- |
| `val`        | 是       | 需要判断的值                     | `any`    |            |
| `type`       | 是       | 需要判断值的类型，注意首字母大写 | `string` |            |

::: info 相关信息

支持判断的类型包括：

- `String` - 字符串
- `Number` - 数字
- `Boolean` - 布尔值
- `Undefined` - 未定义
- `Null` - 空值
- `Symbol` - 符号
- `Object` - 对象
- `Array` - 数组
- `Function` - 函数
- `AsyncFunction` - 异步函数
- `Set` - 集合
- `Map` - 映射
- `Date` - 日期
- `RegExp` - 正则表达式
- `Error` - 错误
- `Arguments` - 参数对象
- `Arraybuffer` - 数组缓冲区
- `File` - 文件
- `Blob` - 二进制大对象
- `Promise` - Promise对象

:::

#### <divider-return /> {#return1}

| **名称**  | **说明**                                    |
| --------- | ------------------------------------------- |
| `boolean` | true（该值是该类型）、false（该值非该类型） |

</div>

## isBoolean

判断是否是 `Boolean` 类型

<div class="code-border">

#### <divider-base /> {#base2}

<demoIsBoolean />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsBoolean.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return2}

| **名称**  | **说明**                                        |
| --------- | ----------------------------------------------- |
| `boolean` | true（是Boolean类型）、false（不是Boolean类型） |

</div>

## isNumber

判断是否是 `number` 类型

<div class="code-border">

#### <divider-base /> {#base3}

<demoIsNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsNumber.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return3}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是Number类型）、false（不是Number类型） |

</div>

## isValidNumber

判断是否为有效数字（数字，且不是NaN也不是无穷大）

<div class="code-border">

#### <divider-base /> {#base4}

<demoIsValidNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsValidNumber.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return4}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（是有效数字）、false（不是有效数字） |

</div>

## isInteger

判断是否是整数类型

<div class="code-border">

#### <divider-base /> {#base5}

<demoIsInteger />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsInteger.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return5}

| **名称**  | **说明**                          |
| --------- | --------------------------------- |
| `boolean` | true（是整数）、false（不是整数） |

</div>

## isFloat

判断是否是浮点数类型

<div class="code-border">

#### <divider-base /> {#base6}

<demoIsFloat />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsFloat.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return6}

| **名称**  | **说明**                              |
| --------- | ------------------------------------- |
| `boolean` | true（是浮点数）、false（不是浮点数） |

</div>

## isString

判断是否是 `string` 类型

<div class="code-border">

#### <divider-base /> {#base7}

<demoIsString />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsString.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return7}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是String类型）、false（不是String类型） |

</div>

## isUndefined

判断是否是 `undefined` 类型

<div class="code-border">

#### <divider-base /> {#base8}

<demoIsUndefined />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsUndefined.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return8}

| **名称**  | **说明**                                            |
| --------- | --------------------------------------------------- |
| `boolean` | true（是Undefined类型）、false（不是Undefined类型） |

</div>

## isNull

判断是否是 `null` 类型

<div class="code-border">

#### <divider-base /> {#base9}

<demoIsNull />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsNull.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return9}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（是Null类型）、false（不是Null类型） |

</div>

## isSymbol

判断是否是 `symbol` 类型

<div class="code-border">

#### <divider-base /> {#base10}

<demoIsSymbol />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsSymbol.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return10}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是Symbol类型）、false（不是Symbol类型） |

</div>

## isArray

判断是否是 `array` 类型

<div class="code-border">

#### <divider-base /> {#base11}

<demoIsArray />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsArray.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return11}

| **名称**  | **说明**                                    |
| --------- | ------------------------------------------- |
| `boolean` | true（是Array类型）、false（不是Array类型） |

</div>

## isTypedArray

判断是否是 `typed array` 类型

<div class="code-border">

#### <divider-base /> {#base12}

<demoIsTypedArray />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsTypedArray.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return12}

| **名称**  | **说明**                                              |
| --------- | ----------------------------------------------------- |
| `boolean` | true（是TypedArray类型）、false（不是TypedArray类型） |

</div>

## isArrayLength

判断是否是有效的数组长度

<div class="code-border">

#### <divider-base /> {#base13}

<demoIsArrayLength />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsArrayLength.vue

</details>

#### <divider-param /> {#param13}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return13}

| **名称**  | **说明**                                              |
| --------- | ----------------------------------------------------- |
| `boolean` | true（是有效的数组长度）、false（不是有效的数组长度） |

</div>

## isArrayLike

判断是否是类数组对象

<div class="code-border">

#### <divider-base /> {#base14}

<demoIsArrayLike />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsArrayLike.vue

</details>

#### <divider-param /> {#param14}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return14}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是类数组对象）、false（不是类数组对象） |

</div>

## isDate

判断是否是 `date` 类型

<div class="code-border">

#### <divider-base /> {#base15}

<demoIsDate />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsDate.vue

</details>

#### <divider-param /> {#param15}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return15}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（是Date类型）、false（不是Date类型） |

</div>

## isMap

判断是否是 `map` 类型

<div class="code-border">

#### <divider-base /> {#base16}

<demoIsMap />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsMap.vue

</details>

#### <divider-param /> {#param16}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return16}

| **名称**  | **说明**                                |
| --------- | --------------------------------------- |
| `boolean` | true（是Map类型）、false（不是Map类型） |

</div>

## isSet

判断是否是 `set` 类型

<div class="code-border">

#### <divider-base /> {#base17}

<demoIsSet />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsSet.vue

</details>

#### <divider-param /> {#param17}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return17}

| **名称**  | **说明**                                |
| --------- | --------------------------------------- |
| `boolean` | true（是Set类型）、false（不是Set类型） |

</div>

## isRegExp

判断是否是 `regexp` 类型

<div class="code-border">

#### <divider-base /> {#base18}

<demoIsRegExp />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsRegExp.vue

</details>

#### <divider-param /> {#param18}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return18}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是RegExp类型）、false（不是RegExp类型） |

</div>

## isObject

判断是否是 `object` 类型

<div class="code-border">

#### <divider-base /> {#base19}

<demoIsObject />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsObject.vue

</details>

#### <divider-param /> {#param19}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return19}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是Object类型）、false（不是Object类型） |

</div>

## isPlainObject

判断是否是纯对象

<div class="code-border">

#### <divider-base /> {#base20}

<demoIsPlainObject />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsPlainObject.vue

</details>

#### <divider-param /> {#param20}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return20}

| **名称**  | **说明**                              |
| --------- | ------------------------------------- |
| `boolean` | true（是纯对象）、false（不是纯对象） |

</div>

## isFunction

判断是否是 `function` 类型

<div class="code-border">

#### <divider-base /> {#base21}

<demoIsFunction />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsFunction.vue

</details>

#### <divider-param /> {#param21}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return21}

| **名称**  | **说明**                                          |
| --------- | ------------------------------------------------- |
| `boolean` | true（是Function类型）、false（不是Function类型） |

</div>

## isPromise

判断是否是 `promise` 类型

<div class="code-border">

#### <divider-base /> {#base22}

<demoIsPromise />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsPromise.vue

</details>

#### <divider-param /> {#param22}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return22}

| **名称**  | **说明**                                        |
| --------- | ----------------------------------------------- |
| `boolean` | true（是Promise类型）、false（不是Promise类型） |

</div>

## isPrimitive

判断是否是原始类型

<div class="code-border">

#### <divider-base /> {#base23}

<demoIsPrimitive />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsPrimitive.vue

</details>

#### <divider-param /> {#param23}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return23}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（是原始类型）、false（不是原始类型） |

</div>

## isEmpty

判断值是否为空

<div class="code-border">

#### <divider-base /> {#base24}

<demoIsEmpty />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsEmpty.vue

</details>

#### <divider-param /> {#param24}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return24}

| **名称**  | **说明**                      |
| --------- | ----------------------------- |
| `boolean` | true（为空）、false（不为空） |

</div>

## isObjectEmpty

判断对象是否为空

<div class="code-border">

#### <divider-base /> {#base25}

<demoIsObjectEmpty />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsObjectEmpty.vue

</details>

#### <divider-param /> {#param25}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return25}

| **名称**  | **说明**                              |
| --------- | ------------------------------------- |
| `boolean` | true（对象为空）、false（对象不为空） |

</div>

## isJsonString

判断是否是有效的JSON字符串

<div class="code-border">

#### <divider-base /> {#base26}

<demoIsJsonString />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsJsonString.vue

</details>

#### <divider-param /> {#param26}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return26}

| **名称**  | **说明**                                                  |
| --------- | --------------------------------------------------------- |
| `boolean` | true（是有效的JSON字符串）、false（不是有效的JSON字符串） |

</div>

## isBlob

判断是否是 `blob` 类型

<div class="code-border">

#### <divider-base /> {#base27}

<demoIsBlob />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsBlob.vue

</details>

#### <divider-param /> {#param27}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return27}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（是Blob类型）、false（不是Blob类型） |

</div>

## isBase64

判断是否是有效的Base64字符串

<div class="code-border">

#### <divider-base /> {#base28}

<demoIsBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsBase64.vue

</details>

#### <divider-param /> {#param28}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return28}

| **名称**  | **说明**                                                      |
| --------- | ------------------------------------------------------------- |
| `boolean` | true（是有效的Base64字符串）、false（不是有效的Base64字符串） |

</div>

## isElement

判断是否是DOM元素

<div class="code-border">

#### <divider-base /> {#base29}

<demoIsElement />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsElement.vue

</details>

#### <divider-param /> {#param29}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return29}

| **名称**  | **说明**                                |
| --------- | --------------------------------------- |
| `boolean` | true（是DOM元素）、false（不是DOM元素） |

</div>

## isWindow

判断是否是window对象

<div class="code-border">

#### <divider-base /> {#base30}

<demoIsWindow />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsWindow.vue

</details>

#### <divider-param /> {#param30}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return30}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是window对象）、false（不是window对象） |

</div>

## isBrowser

判断是否是浏览器环境

<div class="code-border">

#### <divider-base /> {#base31}

<demoIsBrowser />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsBrowser.vue

</details>

#### <divider-param /> {#param31}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return31}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是浏览器环境）、false（不是浏览器环境） |

</div>

## isClient

判断是否是客户端环境

<div class="code-border">

#### <divider-base /> {#base32}

<demoIsClient />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsClient.vue

</details>

#### <divider-param /> {#param32}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return32}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是客户端环境）、false（不是客户端环境） |

</div>

## isServer

判断是否是服务端环境

<div class="code-border">

#### <divider-base /> {#base33}

<demoIsServer />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsServer.vue

</details>

#### <divider-param /> {#param33}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return33}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是服务端环境）、false（不是服务端环境） |

</div>

## isValidDate

判断是否是有效的日期

<div class="code-border">

#### <divider-base /> {#base34}

<demoIsValidDate />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsValidDate.vue

</details>

#### <divider-param /> {#param34}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return34}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（是有效的日期）、false（不是有效的日期） |

</div>

## isToday

判断日期是否是今天

<div class="code-border">

#### <divider-base /> {#base35}

<demoIsToday />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsToday.vue

</details>

#### <divider-param /> {#param35}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return35}

| **名称**  | **说明**                          |
| --------- | --------------------------------- |
| `boolean` | true（是今天）、false（不是今天） |

</div>

## isLeapYear

判断是否是闰年

<div class="code-border">

#### <divider-base /> {#base36}

<demoIsLeapYear />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsLeapYear.vue

</details>

#### <divider-param /> {#param36}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return36}

| **名称**  | **说明**                          |
| --------- | --------------------------------- |
| `boolean` | true（是闰年）、false（不是闰年） |

</div>

## isEqualObject

判断两个对象是否相等

<div class="code-border">

#### <divider-base /> {#base37}

<demoIsEqualObject />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsEqualObject.vue

</details>

#### <divider-param /> {#param37}

| **参数属性** | **必传** | **说明**   | **类型** | **默认值** |
| ------------ | -------- | ---------- | -------- | ---------- |
| `obj1`       | 是       | 第一个对象 | `any`    |            |
| `obj2`       | 是       | 第二个对象 | `any`    |            |

#### <divider-return /> {#return37}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（两个对象相等）、false（两个对象不相等） |

</div>

## isEqualArray

判断两个数组是否相等

<div class="code-border">

#### <divider-base /> {#base38}

<demoIsEqualArray />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsEqualArray.vue

</details>

#### <divider-param /> {#param38}

| **参数属性** | **必传** | **说明**   | **类型** | **默认值** |
| ------------ | -------- | ---------- | -------- | ---------- |
| `arr1`       | 是       | 第一个数组 | `any`    |            |
| `arr2`       | 是       | 第二个数组 | `any`    |            |

#### <divider-return /> {#return38}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（两个数组相等）、false（两个数组不相等） |

</div>

## isEqual

判断两个值是否相等

<div class="code-border">

#### <divider-base /> {#base39}

<demoIsEqual />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsEqual.vue

</details>

#### <divider-param /> {#param39}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `val1`       | 是       | 第一个值 | `any`    |            |
| `val2`       | 是       | 第二个值 | `any`    |            |

#### <divider-return /> {#return39}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（两个值相等）、false（两个值不相等） |

</div>

## isElementInViewport

判断元素是否在视口中

<div class="code-border">

#### <divider-base /> {#base40}

<demoIsElementInViewport />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsElementInViewport.vue

</details>

#### <divider-param /> {#param40}

| **参数属性** | **必传** | **说明** | **类型**      | **默认值** |
| ------------ | -------- | -------- | ------------- | ---------- |
| `element`    | 是       | DOM元素  | `HTMLElement` |            |

#### <divider-return /> {#return40}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（元素在视口中）、false（元素不在视口中） |

</div>

## isElementFocused

判断元素是否获得焦点

<div class="code-border">

#### <divider-base /> {#base41}

<demoIsElementFocused />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsElementFocused.vue

</details>

#### <divider-param /> {#param41}

| **参数属性** | **必传** | **说明** | **类型**      | **默认值** |
| ------------ | -------- | -------- | ------------- | ---------- |
| `element`    | 是       | DOM元素  | `HTMLElement` |            |

#### <divider-return /> {#return41}

| **名称**  | **说明**                                      |
| --------- | --------------------------------------------- |
| `boolean` | true（元素获得焦点）、false（元素未获得焦点） |

</div>

## isElementOrDescendantFocused

判断元素或其子元素是否获得焦点

<div class="code-border">

#### <divider-base /> {#base42}

<demoIsElementOrDescendantFocused />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsElementOrDescendantFocused.vue

</details>

#### <divider-param /> {#param42}

| **参数属性** | **必传** | **说明** | **类型**      | **默认值** |
| ------------ | -------- | -------- | ------------- | ---------- |
| `element`    | 是       | DOM元素  | `HTMLElement` |            |

#### <divider-return /> {#return42}

| **名称**  | **说明**                                                            |
| --------- | ------------------------------------------------------------------- |
| `boolean` | true（元素或其子元素获得焦点）、false（元素及其子元素均未获得焦点） |

</div>

## isInChina

判断坐标是否在中国境内（粗略判断）

<div class="code-border">

#### <divider-base /> {#base43}

<demoIsInChina />

<details>

<summary>查看代码</summary>

<<< @/utils/is/demoIsInChina.vue

</details>

#### <divider-param /> {#param43}

| **参数属性** | **必传** | **说明**     | **类型** | **默认值** |
| ------------ | -------- | ------------ | -------- | ---------- |
| `val`        | 是       | 需要判断的值 | `any`    |            |

#### <divider-return /> {#return43}

| **名称**  | **说明**                                  |
| --------- | ----------------------------------------- |
| `boolean` | true（在中国境内）、false（不在中国境内） |

</div>
