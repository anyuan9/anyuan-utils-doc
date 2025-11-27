# 发布 npm 包

## 第一步: 初始化为 npm 包

首先进入要发布的项目的根目录(个人选择的文件夹里面)，运行 npm init 命令，然后依次按照提示输入包名、版本、描述、github 地址、license 等相应的自定义属性

```
npm init
```

执行完成后，生成的 package.json 文件内容，此时可以自行修改 package.json 文件，例如：

```
{
  "name": "my-npm-package",
  "version": "1.0.0",
  "description": "My custom npm package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm",
    "package"
  ],
}
```

下面着重说一下 package.json 中的内容

- name: 包名，后续在 npm 中搜索全靠它，跟项目名字没有关系
- version：版本号，每发布一次 npm 包就要增加一个版本，每个版本不能重复。
- description：描述
- main: 本包向外暴露的文件，很重要，一定要和你打包出来的文件名一模一样
- private: true/false 是否为私有。一般为 false 否则只有自己能使用
- keywords: npm 检索的关键字
- author: 作者
- license: ISC
- ...

然后完成代码开发，并执行 npm run build 命令，将代码打包成 npm 包。

```
npm run build
```

## 第二步: 注册一个 npm 账号

在 [npm 官网](https://www.npmjs.com/) 点击右上角的 "Sign up" 按钮，填写相关信息，完成注册。

注意：需要邮箱验证激活。

## 第三步: 登录 npm 账号

```

npm login

Press ENTER to open in the browser...

```

然后在浏览器输入用户名、密码、邮箱验证码等

可以通过以下命令检查当前登录的用户：

```

npm whoami

```

## 第四步: 发布 npm 包

```

npm publish

```

发布成功后，在浏览器输入 npmjs.com，搜索自己的包名，就可以看到自己发布的包了。

## 第五步: 使用自己的包

```

npm install 包名 --save

```

在需要使用的地方，引入自己的包

```

import xx from '包名'
const xx = require('包名')

```

## 其他操作

### 查看发布的包

```

npm search 包名

```

### 更新版本号

1. 使用 npm version 命令（推荐）

```

# 1.更新补丁版本号，修复 bug，向后兼容的改动，例如：1.0.0 -> 1.0.1

npm version patch

# 2.更新小版本号，增加新功能，但向后兼容，例如：1.0.0 -> 1.1.0

npm version minor

# 3.更新大版本号，有破坏性变更，例如：1.0.0 -> 2.0.0

npm version major

# 4.更新指定的版本号

npm version 版本号

```

运行此命令后，npm 会自动将新的版本号写入 package.json 和 package-lock.json 文件中，并生成一个版本变更的 commit，然后执行 npm publish 发布新的版本。

2. 手动修改 package.json

直接打开 package.json 文件，修改 version 字段，版本号要大于之前的版本号。然后运行 npm install 来更新 package-lock.json。

### 删除发布的包

```

# 删除指定的版本，但之后无法发布相同版本的包

npm unpublish 包名@版本号

# 在发布 72 小时内，删除整个包，慎用！

npm unpublish 包名 --force

```
