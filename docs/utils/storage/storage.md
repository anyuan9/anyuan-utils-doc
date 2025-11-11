<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(2)

import demoStorage from './demoStorage.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
存储工具函数
:::

## getLocalStorage

操作本地 `localStorage`

<div class="code-border">

#### <divider-base /> {#base1}

```typescript
// 使用示例
const localStorage = getLocalStorage();

// 设置存储项
localStorage.setItem('name', 'admin');
localStorage.setItem('userInfo', { name: 'John', age: 30 });
localStorage.setItem('numbers', [1, 2, 3, 4, 5]);

// 获取存储项
const name = localStorage.getItem('name'); // 'admin'
const userInfo = localStorage.getItem('userInfo'); // { name: 'John', age: 30 }
const numbers = localStorage.getItem('numbers'); // [1, 2, 3, 4, 5]

// 删除存储项
localStorage.removeItem('name');

// 清空所有存储项
localStorage.clear();
```

#### <divider-return /> {#return1}

返回 `localStorageProxy` 实例，包含以下方法：

| **名称**                            | **说明**                      |
| ----------------------------------- | ----------------------------- |
| `setItem<T>(key: string, value: T)` | 储存对应键名的 `Storage` 对象 |
| `getItem(key: string)`              | 获取对应键名的 `Storage` 对象 |
| `removeItem(key: string)`           | 删除对应键名的 `Storage` 对象 |
| `clear()`                           | 删除此域的所有 `Storage` 对象 |

</div>

## getSessionStorage

操作本地 `sessionStorage`

<div class="code-border">

#### <divider-base /> {#base2}

```typescript
// 使用示例
const sessionStorage = getSessionStorage();

// 设置存储项
sessionStorage.setItem('sessionToken', 'abc123xyz');
sessionStorage.setItem('tempData', { id: 1, status: 'pending' });
sessionStorage.setItem('cartItems', ['item1', 'item2', 'item3']);

// 获取存储项
const token = sessionStorage.getItem('sessionToken'); // 'abc123xyz'
const tempData = sessionStorage.getItem('tempData'); // { id: 1, status: 'pending' }
const cartItems = sessionStorage.getItem('cartItems'); // ['item1', 'item2', 'item3']

// 删除存储项
sessionStorage.removeItem('sessionToken');

// 清空所有存储项
sessionStorage.clear();
```

#### <divider-return /> {#return2}

返回 `sessionStorageProxy` 实例，包含以下方法：

| **名称**                            | **说明**                      |
| ----------------------------------- | ----------------------------- |
| `setItem<T>(key: string, value: T)` | 储存对应键名的 `Storage` 对象 |
| `getItem(key: string)`              | 获取对应键名的 `Storage` 对象 |
| `removeItem(key: string)`           | 删除对应键名的 `Storage` 对象 |
| `clear()`                           | 删除此域的所有 `Storage` 对象 |

</div>

#### <divider-base /> {#base3}

<demoStorage />

<details>

<summary>查看代码</summary>

<<< @/utils/storage/demoStorage.vue

</details>

::: info 特性说明

存储工具函数的特点：

1. 自动序列化：所有存储的值都会自动进行 JSON.stringify 序列化
2. 自动反序列化：获取值时自动进行 JSON.parse 反序列化
3. 类型安全：支持 TypeScript 类型提示
4. 错误处理：内置错误捕获，避免程序崩溃
5. 支持复杂数据类型：可以存储对象、数组等复杂数据类型
6. localStorage 与 sessionStorage 的区别：

| **特性** | **localStorage**       | **sessionStorage**         |
| -------- | ---------------------- | -------------------------- |
| 生命周期 | 永久存储，除非手动删除 | 会话级别，关闭标签页后清除 |
| 数据共享 | 同源的所有标签页共享   | 仅当前标签页可用           |
| 存储大小 | 通常 5MB 左右          | 通常 5MB 左右              |
| 适用场景 | 长期保存的用户偏好设置 | 临时会话数据、表单数据     |

:::
