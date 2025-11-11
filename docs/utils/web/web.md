<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(10)

import demoGetDeviceType from './demoGetDeviceType.vue'
import demoGetBrowserType from './demoGetBrowserType.vue'
import demoGetNetworkState from './demoGetNetworkState.vue'
import demoGetCookies from './demoGetCookies.vue'
import demoGetCsrfToken from './demoGetCsrfToken.vue'
import demoGetPwdRank from './demoGetPwdRank.vue'
import demoGetGeolocationPosition from './demoGetGeolocationPosition.vue'
import demoGetSafeUrl from './demoGetSafeUrl.vue'
import demoUrlQueryParse from './demoUrlQueryParse.vue'
import demoUrlQueryStringify from './demoUrlQueryStringify.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
Web工具函数
:::

## getDeviceType

检测设备类型，判断是移动设备还是电脑设备

<div class="code-border">

#### <divider-base /> {#base1}

<demoGetDeviceType />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetDeviceType.vue

</details>

#### <divider-return /> {#return1}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `设备类型` | 'Mobile' 或 'Desktop' | `DeviceType` |

::: info 相关信息

DeviceType 类型说明：
- `'Mobile'`: 移动设备（Android、iOS等）
- `'Desktop'`: 桌面设备（Windows、Mac等）

注意事项：
- 此方法基于用户代理字符串检测，不严谨
- 建议使用专业的ua-parser-js插件进行更准确的设备检测
:::

</div>

## getBrowserType

获取主流浏览器的型号以及版本

<div class="code-border">

#### <divider-base /> {#base2}

<demoGetBrowserType />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetBrowserType.vue

</details>

#### <divider-return /> {#return2}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `浏览器信息` | 包含名称和版本的对象 | `BrowserType` |

#### BrowserType 接口说明

| **属性** | **说明** | **类型** |
| -------- | -------- | -------- |
| `name` | 浏览器型号 | `string` |
| `version` | 浏览器版本 | `string` |

::: info 相关信息

支持的浏览器类型：
- IE（包括IE11及以下版本）
- Edge
- Firefox
- Chrome
- Safari
- Opera
- 其他浏览器返回 'unknown'

注意事项：
- 此方法基于用户代理字符串检测，不严谨
- 建议使用专业的ua-parser-js插件进行更准确的浏览器检测
:::

</div>

## getNetworkState

获取网络状态和网络连接类型的估计值

<div class="code-border">

#### <divider-base /> {#base3}

<demoGetNetworkState />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetNetworkState.vue

</details>

#### <divider-return /> {#return3}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `网络状态` | 包含在线状态和网络类型的对象 | `NetworkState` |

#### NetworkState 接口说明

| **属性** | **说明** | **类型** |
| -------- | -------- | -------- |
| `online` | 是否在线 | `boolean` |
| `effectiveType` | 网络有效类型 | `NetworkEffectiveType` |

::: info 相关信息

NetworkEffectiveType 类型说明：
- `'slow-2g'`: 缓慢的2G网络连接
- `'2g'`: 2G网络连接
- `'3g'`: 3G网络连接
- `'4g'`: 4G网络连接
- `'unknown'`: 无法确定网络连接状况

依赖条件：
- 需要浏览器支持 Network Information API
- 在某些浏览器中可能无法获取准确的网络类型
:::

</div>

## getCookies

获取cookie，并转换成对象

<div class="code-border">

#### <divider-base /> {#base4}

<demoGetCookies />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetCookies.vue

</details>

#### <divider-return /> {#return4}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `cookie对象` | 包含所有cookie键值对的对象 | `Record<string, string>` |

::: info 相关信息

注意事项：
- 如果cookie中设置了HttpOnly属性，无法通过JavaScript读取
- 只能读取当前域名下的cookie
- 返回的对象已对值进行URL解码处理

使用场景：
- 读取登录状态信息
- 获取用户偏好设置
- 读取会话标识等
:::

</div>

## getCsrfToken

获取CSRF Token

<div class="code-border">

#### <divider-base /> {#base5}

<demoGetCsrfToken />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetCsrfToken.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `headerName` | 否 | token名key | `string` | `'_csrf_header'` |
| `tokenName`  | 否 | token值key | `string` | `'_csrf'` |

#### <divider-return /> {#return5}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `CSRF Token信息` | 包含header和token的对象 | `CsrfToken` |

#### CsrfToken 接口说明

| **属性** | **说明** | **类型** |
| -------- | -------- | -------- |
| `csrfHeader` | token名称 | `string` |
| `csrfToken` | token值 | `string` |

::: info 相关信息

工作方式：
- 从页面的meta标签中读取CSRF Token信息
- 默认查找name为'_csrf_header'和'_csrf'的meta标签
- 支持自定义meta标签名称

使用场景：
- 在AJAX请求中添加CSRF保护
- 防止跨站请求伪造攻击
:::

</div>

## getPwdRank

获取密码的强度等级

<div class="code-border">

#### <divider-base /> {#base6}

<demoGetPwdRank />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetPwdRank.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `szPwd`      | 是 | 密码 | `string` |            |
| `szUser`     | 否 | 用户名 | `string` | `''` |

#### <divider-return /> {#return6}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `密码强度等级` | 0-3的数字，数值越大强度越高 | `number` |

::: info 相关信息

密码强度等级说明：
- **等级0（风险密码）**: 密码长度小于8位，或只包含一类字符，或与用户名相关
- **等级1（弱密码）**: 包含两类字符，且为（数字+小写字母）或（数字+大写字母）
- **等级2（中密码）**: 包含两类字符，且不为上述弱密码组合
- **等级3（强密码）**: 包含三类字符及以上

字符类型分类：
- 小写字母: a-z
- 大写字母: A-Z
- 数字: 0-9
- 特殊字符: 非字母数字字符
:::

</div>

## getGeolocationPosition

获取地理位置信息

<div class="code-border">

#### <divider-base /> {#base7}

<demoGetGeolocationPosition />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetGeolocationPosition.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `options`    | 否 | 定位参数配置 | `GeolocationOptions` | `{}` |

#### GeolocationOptions 接口说明

| **属性** | **说明** | **类型** | **默认值** |
| -------- | -------- | -------- | ---------- |
| `enableHighAccuracy` | 是否启用高精度模式 | `boolean` | `false` |
| `timeout` | 获取位置的最大超时时间（毫秒） | `number` | `10000` |
| `maximumAge` | 位置信息的最大缓存时间（毫秒） | `number` | `0` |

#### <divider-return /> {#return7}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `地理位置信息` | 包含坐标和时间戳的对象 | `Promise<GeolocationPosition>` |

::: info 相关信息

使用要求：
- 需要用户授权地理位置权限
- 需要浏览器支持Geolocation API
- HTTPS环境下更可靠

错误处理：
- 返回Promise，可使用try-catch捕获错误
- 常见错误：权限拒绝、位置不可用、超时等
:::

</div>

## getSafeUrl

根据url获取安全的url地址

<div class="code-border">

#### <divider-base /> {#base8}

<demoGetSafeUrl />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoGetSafeUrl.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url`        | 是 | 超链接地址 | `string` |            |

#### <divider-return /> {#return8}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `安全URL` | 完整的绝对URL地址 | `string` |

::: info 相关信息

处理规则：
- 如果URL已包含有效协议（http://、https://等），直接返回
- 如果URL是相对路径，会基于当前页面origin补全为绝对URL
- 处理hash路由等特殊格式的URL

使用场景：
- 确保链接跳转的安全性
- 处理用户输入的URL
- 防止相对路径导致的跳转问题
:::

</div>

## urlQueryParse

提取url的参数，并返回对象

<div class="code-border">

#### <divider-base /> {#base9}

<demoUrlQueryParse />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoUrlQueryParse.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url`        | 是 | 超链接地址 | `string` |            |

#### <divider-return /> {#return9}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `参数对象` | 所有参数组成的对象 | `object` |

::: info 相关信息

解析能力：
- 支持标准URL参数解析
- 支持带hash的URL参数提取
- 支持hash路由格式的参数解析
- 自动进行URL解码处理

注意事项：
- 只解析查询字符串部分，忽略hash部分的参数
- 对于重复参数名，后出现的值会覆盖先出现的值
:::

</div>

## urlQueryStringify

参数对象转为url字符串

<div class="code-border">

#### <divider-base /> {#base10}

<demoUrlQueryStringify />

<details>

<summary>查看代码</summary>

<<< @/utils/web/demoUrlQueryStringify.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `params`     | 是 | 参数对象 | `Record<string, any>` |            |

#### <divider-return /> {#return10}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `查询字符串` | URL编码的查询参数字符串 | `string` |

::: info 相关信息

处理规则：
- 自动过滤null和undefined值
- 支持数组参数，格式为`key[]=value1&key[]=value2`
- 对所有键和值进行URL编码
- 使用&符号连接多个参数

使用场景：
- 构建AJAX请求的查询参数
- 生成页面跳转的URL
- 序列化表单数据
:::

</div>