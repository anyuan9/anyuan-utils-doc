<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoGetSvgInfo from './demoGetSvgInfo.vue'
import demoFileDownloadByUrl from './demoFileDownloadByUrl.vue'
import demoFileDownloadByBase64 from './demoFileDownloadByBase64.vue'
import demoFileDownloadByData from './demoFileDownloadByData.vue'
import demoFileDownloadByBlob from './demoFileDownloadByBlob.vue'
import demoImageDownload from './demoImageDownload.vue'
import demoBase64ToBlob from './demoBase64ToBlob.vue'
import demoBlobToBase64 from './demoBlobToBase64.vue'
import demoBase64ToFile from './demoBase64ToFile.vue'
import demoFileToBase64 from './demoFileToBase64.vue'
import demoBase64ToBlobToFile from './demoBase64ToBlobToFile.vue'
import demoFileToBlobToBase64 from './demoFileToBlobToBase64.vue'
import demoBase64ToStr from './demoBase64ToStr.vue'
import demoStrToBase64 from './demoStrToBase64.vue'
import demoImageToBase64 from './demoImageToBase64.vue'
import demoImageLoad from './demoImageLoad.vue'
import demoImageToGrayScale from './demoImageToGrayScale.vue'
import demoImageAddText from './demoImageAddText.vue'
import demoImageCompress from './demoImageCompress.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
文件工具函数
:::

## getSvgInfo

解析传入的SVG字符串并提取其关键信息

<div class="code-border">

#### <divider-base /> {#base1}

<demoGetSvgInfo />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoGetSvgInfo.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `svgStr` | 是 | 包含SVG内容的字符串，格式为标准的`SVG XML` | `string` | |

#### <divider-return /> {#return1}

| **名称** | **说明** |
| -------- | -------- |
| `width` | SVG的宽度，基于`viewBox`属性的第三个值 |
| `height` | SVG的高度，基于`viewBox`属性的第四个值 |
| `body` | SVG中所有`<path>`元素的`outerHTML`连接而成的字符串 |

</div>

## fileDownloadByUrl

下载在线文件

<div class="code-border">

#### <divider-base /> {#base2}

<demoFileDownloadByUrl />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileDownloadByUrl.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 需要下载的 `url` | `string` | |
| `filename` | 是 | 文件名 | `string` | |
| `mime` | 否 | 类型 | `string` | |

#### <divider-return /> {#return2}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 下载结果 |

</div>

## fileDownloadByBase64

基于 `base64` 下载图片

<div class="code-border">

#### <divider-base /> {#base3}

<demoFileDownloadByBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileDownloadByBase64.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `buf` | 是 | `base64` | `string` | |
| `filename` | 是 | 文件名 | `string` | |
| `mime` | 否 | 类型 | `string` | |

#### <divider-return /> {#return3}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 下载结果 |

</div>

## fileDownloadByData

Blob文件流方式导出，适用于小文件下载，大文件容易导致页面卡死

<div class="code-border">

#### <divider-base /> {#base4}

<demoFileDownloadByData />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileDownloadByData.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `res` | 是 | 接口返回的数据，例如{data:Blob文件流} | `any` | |
| `filename` | 否 | 导出的文件名 | `string` | |

#### <divider-return /> {#return4}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 下载结果 |

</div>

## fileDownloadByBlob

根据后台接口文件流下载

<div class="code-border">

#### <divider-base /> {#base5}

<demoFileDownloadByBlob />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileDownloadByBlob.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `blob` | 是 | 导出的Blob文件流 | `Blob` | |
| `filename` | 是 | 文件名 | `string` | |

#### <divider-return /> {#return5}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 下载结果 |

</div>

## imageDownload

图片下载

<div class="code-border">

#### <divider-base /> {#base6}

<demoImageDownload />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageDownload.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `src` | 是 | 图片地址 | `string` | |
| `filename` | 否 | 文件名 | `string` | `"default"` |

#### <divider-return /> {#return6}

| **名称** | **说明** |
| -------- | -------- |
| `void` | 无返回值 |

</div>

## base64ToBlob

base64转Blob

<div class="code-border">

#### <divider-base /> {#base7}

<demoBase64ToBlob />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoBase64ToBlob.vue

</details>

#### <divider-param /> {#param7}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `base64Buf` | 是 | base64字符串 | `string` | |

#### <divider-return /> {#return7}

| **名称** | **说明** |
| -------- | -------- |
| `Blob` | 转换后的Blob对象 |

</div>

## blobToBase64

Blob转base64

<div class="code-border">

#### <divider-base /> {#base8}

<demoBlobToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoBlobToBase64.vue

</details>

#### <divider-param /> {#param8}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `blob` | 是 | Blob对象 | `Blob` | |
| `widthPrefix` | 否 | 是否包含前缀 | `boolean` | `true` |

#### <divider-return /> {#return8}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 转换后的base64字符串 |

</div>

## base64ToFile

base64转文件

<div class="code-border">

#### <divider-base /> {#base9}

<demoBase64ToFile />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoBase64ToFile.vue

</details>

#### <divider-param /> {#param9}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `base64Buf` | 是 | base64字符串 | `string` | |
| `filename` | 是 | 文件名 | `string` | |
| `mime` | 否 | MIME类型 | `string` | |

#### <divider-return /> {#return9}

| **名称** | **说明** |
| -------- | -------- |
| `File` | 转换后的File对象 |

</div>

## fileToBase64

文件转base64

<div class="code-border">

#### <divider-base /> {#base10}

<demoFileToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileToBase64.vue

</details>

#### <divider-param /> {#param10}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `file` | 是 | 文件对象 | `File` | |
| `widthPrefix` | 否 | 是否包含前缀 | `boolean` | `true` |

#### <divider-return /> {#return10}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 转换后的base64字符串 |

</div>

## base64ToBlobToFile

base64转Blob转文件

<div class="code-border">

#### <divider-base /> {#base11}

<demoBase64ToBlobToFile />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoBase64ToBlobToFile.vue

</details>

#### <divider-param /> {#param11}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `base64Buf` | 是 | base64字符串 | `string` | |
| `filename` | 是 | 文件名 | `string` | |
| `mime` | 否 | MIME类型 | `string` | |

#### <divider-return /> {#return11}

| **名称** | **说明** |
| -------- | -------- |
| `File` | 转换后的File对象 |

</div>

## fileToBlobToBase64

文件转Blob转base64

<div class="code-border">

#### <divider-base /> {#base12}

<demoFileToBlobToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoFileToBlobToBase64.vue

</details>

#### <divider-param /> {#param12}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `file` | 是 | 文件对象 | `File` | |

#### <divider-return /> {#return12}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<String>` | 转换后的base64字符串 |

</div>

## base64ToStr

base64解码为字符串

<div class="code-border">

#### <divider-base /> {#base13}

<demoBase64ToStr />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoBase64ToStr.vue

</details>

#### <divider-param /> {#param13}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `base64Buf` | 是 | base64字符串 | `string` | |

#### <divider-return /> {#return13}

| **名称** | **说明** |
| -------- | -------- |
| `string` | 解码后的字符串 |

</div>

## strToBase64

字符串编码为base64

<div class="code-border">

#### <divider-base /> {#base14}

<demoStrToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoStrToBase64.vue

</details>

#### <divider-param /> {#param14}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `str` | 是 | 要编码的字符串 | `string` | |
| `widthPrefix` | 否 | 是否包含前缀 | `boolean` | `true` |

#### <divider-return /> {#return14}

| **名称** | **说明** |
| -------- | -------- |
| `string` | 编码后的base64字符串 |

</div>

## imageToBase64

图片转base64

<div class="code-border">

#### <divider-base /> {#base15}

<demoImageToBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageToBase64.vue

</details>

#### <divider-param /> {#param15}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 图片地址 | `string` | |

#### <divider-return /> {#return15}

| **名称** | **说明** |
| -------- | -------- |
| `string` | 转换后的base64字符串 |

</div>

## imageLoad

加载图片

<div class="code-border">

#### <divider-base /> {#base16}

<demoImageLoad />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageLoad.vue

</details>

#### <divider-param /> {#param16}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 图片地址 | `string` | |

#### <divider-return /> {#return16}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<HTMLImageElement>` | 加载完成的图片元素 |

</div>

## imageToGrayScale

图片灰度化

<div class="code-border">

#### <divider-base /> {#base17}

<demoImageToGrayScale />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageToGrayScale.vue

</details>

#### <divider-param /> {#param17}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 图片地址 | `string` | |
| `options` | 否 | 灰度化配置选项 | `GrayScaleOptions` | |

#### <divider-return /> {#return17}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 灰度化后的图片base64 |

</div>

## imageAddText

图片添加文字

<div class="code-border">

#### <divider-base /> {#base18}

<demoImageAddText />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageAddText.vue

</details>

#### <divider-param /> {#param18}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 图片地址 | `string` | |
| `options` | 是 | 文字叠加配置选项 | `TextOverlayOptions` | |

#### <divider-return /> {#return18}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 添加文字后的图片base64 |

</div>

## imageCompress

图片压缩

<div class="code-border">

#### <divider-base /> {#base19}

<demoImageCompress />

<details>

<summary>查看代码</summary>

<<< @/utils/file/demoImageCompress.vue

</details>

#### <divider-param /> {#param19}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `url` | 是 | 图片地址 | `string` | |
| `options` | 否 | 压缩配置选项 | `ImageCompressConfig` | |

#### <divider-return /> {#return19}

| **名称** | **说明** |
| -------- | -------- |
| `Promise<string>` | 压缩后的图片base64 |

</div>