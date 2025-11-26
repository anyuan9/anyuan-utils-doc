# 使用 GitHub Actions 将 VitePress 项目部署到 GitHub Pages

## VitePress 简介

VitePress，由 Vite 和 Vue 驱动的静态站点生成器，基于 markdown 文件混搭 Vue 组件构建成 HTML，提供开箱即用的模板，特别适合做组件文档 。

VitePress 目录包含以下内容：

```
docs/                   # 文档根目录
    .vitepress/         # VitePress 专用目录
        dist/           # 打包后产物目录
        theme/
            custom.css  # 自定义的样式文件
            index.js    # 自定义主题
        config.js       # VitePress 配置文件
    public/             # 静态资源
    index.md            # 首页
    README.txt          # 改用 txt（否则 vitepress 会生成对应的 READMD.html  ）
```

## Github Pages 简介

`GitHub Pages` 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。

## 使用 GitHub Actions 自动部署

将 VitePress 项目部署到 GitHub Pages 非常简单，特别是利用 GitHub Actions 可以实现自动化部署。你只需要推送代码到 GitHub，它就会自动构建并部署。

### 第一步：准备 VitePress 项目

1. 确保项目配置正确：

- 在你的 VitePress 项目的根目录下，找到或创建 docs 文件夹。你的文档源文件（.md 文件）应该放在这里。

- 检查 docs/.vitepress/config.js 文件，确保设置了正确的 base 选项。

```javascript
// docs/.vitepress/config.js
export default {
  // 如果你的仓库是 https://<USERNAME>.github.io/<REPO>/，
  // 即部署到个人或组织的项目站点，那么 base 应该设置为 '/<REPO>/'
  base: "/my-vitepress-site/", // 请将 'my-vitepress-site' 替换为你的仓库名
  title: "My VitePress Site"
  // ... 其他配置
};
```

重要：如果你的仓库名是 `<USERNAME>.github.io`（用于个人或组织主页），则 base 应该设置为 '/'。

2. 修改 package.json 的脚本（可选但推荐）： 在项目根目录的 package.json 中，添加构建脚本。

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
  // ... 其他依赖
}
```

3. 测试本地构建： 在推送之前，先在本地测试构建是否成功：

```bash
npm run docs:build
```

### 第二步：在 GitHub 上创建仓库并推送代码

1. 在 GitHub 上创建一个新的公共仓库（如果希望使用免费版 GitHub Pages，仓库必须是公开的），例如名为 my-vitepress-site。

2. 将你的本地代码推送到这个仓库。

### 第三步：创建 GitHub Actions 工作流文件

这是实现自动化的核心。

1. 在你的项目根目录下，创建如下目录和文件：.github/workflows/deploy.yml。

2. 将以下 YAML 配置内容复制到 deploy.yml 文件中：

```yaml
# 示例工作流，用于构建和部署 VitePress 站点到 GitHub Pages
name: Deploy VitePress site to Pages

on:
  # 在推送到 "main" 分支时触发部署
  push:
    branches: [main]
  # 这个选项允许你在 GitHub 的 Actions 标签页手动触发工作流
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 允许一个并发部署
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果使用 lastUpdated，需要此项
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或使用 'npm install' 如果你没有 package-lock.json
      - name: Build with VitePress
        run: npm run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

关键点说明：

- on.push.branches: 确保这里的分支名（例如 main）与你的默认分支名一致。

- run: npm ci： 这比 npm install 更快，并且能确保依赖版本的一致性。如果你没有 package-lock.json 文件，请改用 npm install。

- path: docs/.vitepress/dist： 这是 VitePress 默认的输出目录。如果你的构建输出路径不同，请修改此处。

### 第四步：推送代码并启用 Pages

1. 将包含工作流文件（.github/workflows/deploy.yml）的代码推送到 GitHub 的 main 分支。

2. 推送完成后，前往你的 GitHub 仓库页面。

3. 点击上方的 "Actions" 标签页，你应该会看到一个新的工作流正在运行。等待它完成（出现绿色的对勾）。

4. 工作流成功后，进入仓库的 "Settings" 标签页。

5. 在左侧边栏中，找到 "Pages" 选项。6.在 "Source" 下拉菜单中，选择 "GitHub Actions"。

现在，你的站点已经开始部署了！稍等几分钟，访问 `https://<USERNAME>.github.io/<REPO>/` 即可查看你的 VitePress 站点。
