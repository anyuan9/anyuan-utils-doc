::: tip 支持任意 `JavaScript` 环境或框架

仅用于 Vue3 组件注册

:::

## withInstall

向组件中添加 `install` 方法，使其既可以使用 `app.component` 注册又可以使用 `app.use` 安装，且无需考虑 `TypeScript` 类型

<div class="code-border">

#### <divider-base /> {#base1}

```
import { withInstall } from "@anyuan/utils";
import reComponent from "./src";

/** 注册组件 */
export const ReComponent = withInstall(reComponent);

export default ReComponent;
```

#### <divider-return /> {#return1}

| **名称** | **说明** | **类型** |

| -------- | -------- | -------- |

| `main` | 被注册的组件 |  |

::: info 相关信息

每个使用 withInstall 的组件都应该有个唯一 name，以便兼容各种场景。如果要在全局中使用，组件名需传 name 值

:::

</div>
