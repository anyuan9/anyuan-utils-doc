# github Two-factor authentication (2FA) is required for your GitHub account

这个提示意味着你的 GitHub 账户**必须启用双因素认证（2FA）**才能继续登录或进行代码贡献。自 2023 年起，GitHub 已强制要求所有活跃贡献者开启此功能以增强安全性。如果不启用，你的账户操作将受到限制（无法推送代码、无法登录等）。

以下是解决该问题的详细步骤，你可以选择**手机 APP 验证**（推荐，最稳定）或**浏览器插件验证**。

### 方法一：使用手机身份验证器 APP（推荐）

这是最常用且安全的方式，即使没有手机信号也能生成验证码。

#### 第 1 步：下载验证器 APP

在你的手机应用商店搜索并下载以下任意一款应用：

- **Google Authenticator** (谷歌身份验证器)
- **Microsoft Authenticator** (微软身份验证器)
- **Authy**

#### 第 2 步：在 GitHub 上开始设置

1. 登录 GitHub 网页版（如果卡在验证页面，通常页面上会有 "Set up 2FA" 或 "Configure 2FA" 的按钮，点击它）。
2. 如果已成功登录，点击右上角头像 -> **Settings** (设置)。
3. 在左侧边栏点击 **Password and authentication** (密码和认证)。
4. 在 "Two-factor authentication" 部分，点击 **Enable two-factor authentication** 按钮。

#### 第 3 步：绑定手机

1. 选择 **Set up using an app** (使用应用设置)。
2. 页面上会出现一个**二维码**。
3. 打开手机上下载的验证器 APP，点击"+"号或“扫描条形码”，扫描网页上的二维码。
4. 扫描成功后，手机 APP 上会显示一个 **6 位动态验证码**（每 30 秒变化一次）。
5. 将这 6 位数字填入 GitHub 网页上的 "Authentication code" 输入框中。
6. 点击 **Verify** (验证)。

#### 第 4 步：保存恢复代码（非常重要！）

验证通过后，GitHub 会显示一组 **Recovery Codes** (恢复代码)。

- **务必**点击 **Download** 下载保存，或者复制打印出来。
- **作用**：如果你手机丢失或无法使用验证器 APP，这些代码是你找回账户的唯一方式。
- 保存好后，点击 **I have saved my recovery codes** 完成设置。

```
4233e-f98fd
e6c39-d7993
f4c00-858fe
bc6a5-49dd3
40567-1cbd5
89949-b0cd4
7d5b9-66a1b
89a45-6ae67
ea5b7-faf33
348db-d6267
4d41e-b2243
440e7-fff92
dec32-1e3f1
74112-d979e
f1a22-1e893
13cdb-931d9
```

---

### 方法二：使用浏览器插件（适合仅在电脑端操作）

如果你不想用手机，可以在电脑浏览器上安装扩展程序。

1. **安装插件**：
   - **Chrome/Edge 浏览器**：在扩展商店搜索 "Authenticator" 或 "2FA Client"。
     - 推荐插件：[Authenticator: 2FA Client](https://microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/gcbhgkpnfkmjdpnkjkbmkmkpfjjjbjkp) (Edge) 或类似高评分插件。
   - 安装后，浏览器工具栏会出现一个小图标。
2. **GitHub 设置**：
   - 同样进入 GitHub 的 **Settings** -> **Password and authentication** -> **Enable two-factor authentication**。
   - 选择 **Set up using an app**。
3. **扫码/手动输入**：
   - 点击浏览器插件图标，选择“扫描”或“手动输入密钥”。
   - 如果是手动输入，点击 GitHub 页面上的 "enter this text code manually" 链接，复制密钥填入插件。
4. **验证**：
   - 插件生成 6 位验证码，填入 GitHub 页面完成验证。
   - **同样记得保存恢复代码！**

---

### 常见问题与注意事项

#### 1. 命令行 Git 操作怎么办？

开启 2FA 后，你在终端（Terminal/Git Bash）使用 `git push` 或 `git pull` 时，**不能再使用原来的账户密码**。

- **解决方案**：你需要生成一个 **Personal Access Token (PAT)** 来代替密码。
  1. 进入 GitHub **Settings** -> **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**。
  2. 点击 **Generate new token (classic)**。
  3. 勾选需要的权限（通常勾选 `repo` 即可）。
  4. 生成后，**复制这串长字符**。
  5. 在命令行输入密码时，**粘贴这串 Token** 而不是你的登录密码。

#### 2. 为什么必须现在做？

GitHub 规定，如果在指定期限内（通常是收到邮件后的 45 天内）未启用 2FA，账户将被限制：

- 无法推送代码。
- 无法创建 Issue 或 Pull Request。
- 严重时无法登录。

#### 3. 如果手机丢了怎么办？

这就是为什么第 4 步的 **恢复代码 (Recovery Codes)** 至关重要。使用其中一个恢复代码登录，然后重新设置 2FA。如果你既丢了手机又没保存恢复代码，账户将很难找回，需要联系 GitHub 支持并提供大量所有权证明。

建议立即按照**方法一**操作，整个过程通常只需 2-3 分钟。
