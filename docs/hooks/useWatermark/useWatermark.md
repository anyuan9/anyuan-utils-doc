<script setup>
import demoWhole from './demoWhole.vue'
import demoPart from './demoPart.vue'
import demoWrap from './demoWrap.vue'
import demoImage from './demoImage.vue'
import demoForever from './demoForever.vue'
</script>

# useWatermark

::: tip 适用于 `Vue3`、`Nuxt3`、`HTML`
给元素加水印，自适应容器
:::

### 示例

#### 整页水印

<demoWhole />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demoWhole.vue

</details>

#### 局部水印

不论整页水印还是局部水印，它们都拥有上面类型声明中的 [WatermarkOptions](useWatermark#类型声明) 水印样式属性。

<demoPart />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demoPart.vue

</details>

#### 多行水印

某程序员：好家伙，当水印中包含额外的信息，如版权声明、公司名称、日期、时间戳或其他标识时，这不就信手拈来了嘛 🤏  
多行水印：虽然我提供额外的信息和保护，但注意不要过度使用哦，以免干扰到主要内容，降低了可读性，影响到用户体验 🥺

<demoWrap />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demoWrap.vue

</details>

#### 图片水印

图片水印：文字水印还是太单一了，瞧我不轻松拿捏你 😝  
文字水印：啊，对对对。尽管你花里胡哨，加载失败时，不还是得靠我 😎

<demoImage />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demoImage.vue

</details>

#### 永久水印

通过浏览器提供的 [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver) 实现无法删除的永久水印。当然也不是绝对无法删除，但是能很大程度防止删除。如果想要删除，只能通过特殊的禁用`JavaScript`等方法来实现。

<demoForever />

<details>

<summary>查看代码</summary>

<<< @/hooks/useWatermark/demoForever.vue

</details>

### 最简代码

添加水印

```vue
<script setup lang="ts">
import { useWatermark } from "@anyuan/utils";
const { setWatermark, clearWatermark } = useWatermark();
setWatermark("我是水印");
</script>
```

### API

#### 参数

```ts
//  在此处配置参数
const { setWatermark, clearWatermark } = useWatermark(appendEl);
```

<div class="code-no-border">

| **参数属性** | 必传 | **说明**                     | **类型**           |
| ------------ | ---- | ---------------------------- | ------------------ |
| `appendEl`   | 否   | 要添加水印的主体，默认`body` | `Ref<HTMLElement>` |

</div>

#### 返回值、方法

<div class="code-no-border">

| **返回值、方法** | **说明**                                                                     | **类型**                                                          |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `setWatermark`   | 根据自定义配置项添加水印，具体看下面的 [详解](useWatermark#setwatermark详解) | `(str: string, options?: WatermarkOptions ｜ undefined) => void ` |
| `clearWatermark` | 销毁水印                                                                     | `() => void`                                                      |

##### `setWatermark`详解

它接收两个参数，如下

| **参数**  | **说明**                                                     | **类型**           |
| --------- | ------------------------------------------------------------ | ------------------ |
| `str`     | 水印值                                                       | `string`           |
| `options` | 水印样式属性，具体看下面的 [类型声明](useWatermark#类型声明) | `WatermarkOptions` |

</div>

#### 类型声明

<<< ./types.ts
