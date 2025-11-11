<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoTreeDfs from './demoTreeDfs.vue'
import demoTreeDfsRecursive from './demoTreeDfsRecursive.vue'
import demoTreeBfs from './demoTreeBfs.vue'
import demoTreeFilterNodes from './demoTreeFilterNodes.vue'
import demoTreeToFlat from './demoTreeToFlat.vue'
import demoFlatToTree from './demoFlatToTree.vue'
import demoTreeFlat from './demoTreeFlat.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
树结构工具函数
:::

## treeDfs

深度优先遍历（DFS, deep first search）- 迭代实现（使用栈）

<div class="code-border">

#### <divider-base /> {#base1}

<demoTreeDfs />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeDfs.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `tree`       | 是       | 树节点数组 | `TreeNode[]` |            |
| `callback`   | 是       | 遍历回调函数 | `(node: TreeNode) => void` |            |

::: info 相关信息

TreeNode 接口说明：
- `[key: string]: any`: 任意属性
- `children?: TreeNode[]`: 子节点数组

遍历特点：
- 使用栈结构实现迭代遍历
- 深度优先：先访问节点的所有后代节点，再访问兄弟节点
- 遍历顺序：根节点 → 第一个子节点 → 第一个孙节点 → ...
:::

</div>

## treeDfsRecursive

深度优先遍历（DFS, deep first search）- 递归实现

<div class="code-border">

#### <divider-base /> {#base2}

<demoTreeDfsRecursive />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeDfsRecursive.vue

</details>

#### <divider-param /> {#param2}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `tree`       | 是       | 树节点数组 | `TreeNode[]` |            |
| `callback`   | 是       | 遍历回调函数 | `(node: TreeNode) => void` |            |
| `mode`       | 否       | 遍历模式 | `'pre-order' \| 'in-order' \| 'post-order'` | `'pre-order'` |

::: info 相关信息

遍历模式说明：
- `pre-order`（前序遍历）：先访问当前节点，再递归遍历子节点
- `post-order`（后序遍历）：先递归遍历子节点，再访问当前节点  
- `in-order`（中序遍历）：主要用于二叉树，对普通树结构意义有限
:::

</div>

## treeBfs

广度优先遍历（BFS, breadth-first search）- 迭代实现（使用队列）

<div class="code-border">

#### <divider-base /> {#base3}

<demoTreeBfs />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeBfs.vue

</details>

#### <divider-param /> {#param3}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `tree`       | 是       | 树节点数组 | `TreeNode[]` |            |
| `callback`   | 是       | 遍历回调函数 | `(node: TreeNode) => void` |            |

::: info 相关信息

遍历特点：
- 使用队列结构实现迭代遍历
- 广度优先：先访问同一层的所有节点，再访问下一层节点
- 遍历顺序：根节点 → 所有子节点 → 所有孙节点 → ...
:::

</div>

## treeFilterNodes

获取所有符合条件的节点（扁平化结果）

<div class="code-border">

#### <divider-base /> {#base4}

<demoTreeFilterNodes />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeFilterNodes.vue

</details>

#### <divider-param /> {#param4}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `tree`       | 是       | 树节点数组 | `TreeNode[]` |            |
| `filter`     | 是       | 过滤条件函数 | `(node: TreeNode) => boolean` |            |
| `propertyNames` | 否   | 树节点属性名称配置 | `TreeNodePropertyNames` | `{}` |

#### <divider-return /> {#return4}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `符合条件的节点数组` | 扁平化的节点数组 | `TreeNode[]` |

::: info 相关信息

TreeNodePropertyNames 配置项：
- `id?: string`: 节点ID属性名，默认为'id'
- `children?: string`: 子节点属性名，默认为'children'

使用场景：
- 查找特定类型的节点（如所有文件夹、所有文件）
- 根据条件筛选节点（如ID范围、标签包含特定文本）
:::

</div>

## treeToFlat

将树结构数据转换为扁平列表

<div class="code-border">

#### <divider-base /> {#base5}

<demoTreeToFlat />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeToFlat.vue

</details>

#### <divider-param /> {#param5}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `treeData`   | 是       | 树结构数据 | `TreeNode[]` |            |
| `propertyNames` | 否   | 树节点属性名称配置 | `TreeFlatNodePropertyNames` | `{}` |

#### <divider-return /> {#return5}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `扁平节点列表` | 包含父子关系的扁平节点数组 | `TreeFlatNode[]` |

::: info 相关信息

TreeFlatNodePropertyNames 配置项：
- `id?: string`: 节点ID属性名，默认为'id'
- `parentId?: string`: 父节点ID属性名，默认为'pId'
- `children?: string`: 子节点属性名，默认为'children'
- `preserves?: string[]`: 需要保留的其他属性，默认为空数组

转换规则：
- 每个节点都会包含父节点ID（pId）属性
- 根节点的pId为undefined
- 支持自定义需要保留的属性
:::

</div>

## flatToTree

将扁平列表数据转换为树结构（高性能版本，单次遍历）

<div class="code-border">

#### <divider-base /> {#base6}

<demoFlatToTree />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoFlatToTree.vue

</details>

#### <divider-param /> {#param6}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `flatData`   | 是       | 扁平节点列表 | `TreeFlatNode[]` |            |
| `propertyNames` | 否   | 树节点属性名称配置 | `TreeFlatNodePropertyNames` | `{}` |

#### <divider-return /> {#return6}

| **名称** | **说明** | **类型** |
| -------- | -------- | -------- |
| `树结构数据` | 完整的树形结构 | `TreeNode[]` |

::: info 相关信息

转换特点：
- 高性能单次遍历算法
- 自动构建父子关系
- 支持自定义属性映射
- 移除扁平数据中的父节点ID属性

使用场景：
- 从数据库扁平数据重建树形结构
- 前后端数据格式转换
- 树形组件数据准备
:::

</div>

## 综合测试

<demoTreeFlat />

<details>

<summary>查看代码</summary>

<<< @/utils/tree/demoTreeFlat.vue

</details>