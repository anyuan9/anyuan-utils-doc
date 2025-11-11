<script setup>
import describe from './describe.vue'
import tags from './tags.vue'
</script>

<ClientOnly>
  <describe />
  <wordCloud/>
</ClientOnly>

<!-- ## 🏷️ 标签

<tags :className="'type-it1'" :values="['支持Vue3']" />
<tags :className="'type-it2'" :tagNameList="['浏览器']" :values="['支持任意运行在浏览器的JS语言']" :speed="100" />
<tags :className="'type-it3'" :tagNameList="['Node']" :values="['支持NodeJs']" /> -->

### 📦 安装

::: code-group

```bash [pnpm]
pnpm add @anyuan/utils
```

```bash [yarn]
yarn add @anyuan/utils
```

```bash [npm]
npm install @anyuan/utils
```

:::

### 📡 `CDN`


:::

### 📚 示例


### 🤔 常见问题、反馈

问题：如果自己项目中的函数与此工具的函数名称冲突怎么办？  
答：这种问题很常见，可以使用 `ES6` 提供的 `as` 关键字来为导入的函数重命名，如下：

```ts
import { clone as _clone } from "@anyuan/utils";
_clone();
```

### 🔔 温馨提示

本站大部分图片使用`Github`静态资源。如遇加载空白或加载图片失败时，刷新几次即可
