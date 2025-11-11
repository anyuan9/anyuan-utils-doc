<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoValidator from './demoValidator.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
表单校验工具函数
:::

## validator

表单校验工具函数，提供多种常用的验证规则。

<div class="code-border">

#### <divider-base /> {#base1}

<demoValidator />

<details>

<summary>查看代码</summary>

<<< @/utils/validator/demoValidator.vue

</details>

#### <divider-param /> {#param1}

| **参数属性** | **必传** | **说明** | **类型** | **默认值** |
| ------------ | -------- | -------- | -------- | ---------- |
| `option`     | 是       | 验证规则配置项 | `FormItemRule` |            |

#### <divider-return /> {#return1}

| **名称** | **说明** |
| -------- | -------- |
| `FormItemRule` | 验证规则对象 |

</div>

## 正则规则列表

以下表格列举了 validator.ts 文件中定义的所有正则验证规则：

| **规则名称** | **含义** | **示例** |
| ------------ | -------- | -------- |
| `number` | 验证数字 | `123`, `-45.67` |
| `integer` | 验证整数 | `123`, `-456` |
| `positiveInteger` | 验证正整数 | `123`, `456` |
| `naturalNum` | 验证自然数 | `0`, `123` |
| `float` | 验证小数或整数 | `123`, `45.67` |
| `floatFixed` | 验证最多2位小数 | `123.45`, `67.8` |
| `nonNegativeFloat` | 验证非负小数或整数 | `123`, `45.67` |
| `letter` | 验证字母 | `abc`, `XYZ` |
| `lowerCaseLetter` | 验证小写字母 | `abc`, `xyz` |
| `upperCaseLetter` | 验证大写字母 | `ABC`, `XYZ` |
| `chinese` | 验证汉字 | `中文`, `测试` |
| `numLetter` | 验证数字、字母 | `abc123`, `XYZ456` |
| `numLetterInitial` | 验证字母开头，数字字母组成 | `a123`, `B456` |
| `numLetterAndCN` | 验证数字、字母、汉字 | `abc123中文`, `测试XYZ456` |
| `numAndCN` | 验证数字、汉字 | `123中文`, `456测试` |
| `numLetterUnderline` | 验证字母、数字、下划线 | `abc_123`, `test_456` |
| `numLetterUnderlineAndCN` | 验证字母、数字、下划线、汉字 | `abc_123中文`, `test_456测试` |
| `numLetterUnderlineInitial` | 验证字母开头，字母数字下划线组成 | `a_123`, `B_456` |
| `letterAndCN` | 验证字母、汉字 | `abc中文`, `XYZ测试` |
| `noSpecialChar` | 验证不包含特殊字符 | `正常文本`, `abc123` |
| `uuid` | 验证UUID格式 | `550e8400-e29b-41d4-a716-446655440000` |
| `personName` | 验证人名格式 | `张三`, `John Smith` |
| `passwordSimple` | 验证简单密码 | `1234`, `567890` |
| `password` | 验证常规密码 | `Abc123!`, `Test456@` |
| `passwordStrict` | 验证严格密码 | `Abc123!@#`, `Test456$%^` |
| `certificate` | 验证证件号码 | `A123456`, `AB987654` |
| `idCard` | 验证身份证号 | `110101199001011234` |
| `passport` | 验证护照号码 | `E12345678`, `G87654321` |
| `mainlandPassHM` | 验证港澳居民来往内地通行证 | `H12345678`, `M87654321` |
| `mainlandPassTW` | 验证台湾居民来往内地通行证 | `T12345678`, `T87654321` |
| `phone` | 验证电话号码或手机号码 | `13800138000`, `010-12345678` |
| `telephone` | 验证电话号码 | `010-12345678`, `021-87654321` |
| `mobilePhone` | 验证手机号码 | `13800138000`, `13987654321` |
| `email` | 验证邮箱地址 | `test@example.com`, `user@domain.cn` |
| `postalCode` | 验证邮政编码 | `100000`, `200000` |
| `qq` | 验证QQ号码 | `123456`, `987654321` |
| `cardNum` | 验证卡号 | `12345678`, `ABC123456789012345` |
| `bankCardNum` | 验证银行卡号 | `6228480402564890018` |
| `enterpriseTaxNumber` | 验证企业税号 | `91110000100012345X` |
| `url` | 验证网址 | `https://example.com`, `http://test.cn` |
| `ipv4` | 验证IPv4地址 | `192.168.1.1`, `127.0.0.1` |
| `ipv6` | 验证IPv6地址 | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| `port` | 验证端口号 | `80`, `8080`, `3306` |
| `mac` | 验证MAC地址 | `00:1B:44:11:3A:B7`, `00-1B-44-11-3A-B7` |
| `base64` | 验证Base64编码 | `aGVsbG8=`, `dGVzdA==` |
| `base64Image` | 验证Base64图片编码 | `data:image/png;base64,iVBORw0KGgo...` |
| `longitude` | 验证经度 | `116.397428`, `-74.005973` |
| `latitude` | 验证纬度 | `39.90923`, `40.712784` |
| `altitude` | 验证海拔高度 | `100`, `-50`, `8848.86` |
| `angle` | 验证角度 | `0`, `90`, `180`, `360` |
| `colorHex` | 验证HEX颜色值 | `#FFFFFF`, `#FF0000`, `#000` |
| `colorRgb` | 验证RGB颜色值 | `rgb(255,0,0)`, `rgb(0,255,0)` |
| `colorRgba` | 验证RGBA颜色值 | `rgba(255,0,0,0.5)`, `rgba(0,255,0,1)` |
| `plateNum` | 验证车牌号 | `京A12345`, `粤B12345` |
| `plateNumLoose` | 宽松验证车牌号 | `京A12345`, `12345` |
| `deviceType` | 验证设备类型 | `PC`, `Mobile`, `Tablet` |
| `deviceCode` | 验证设备编码 | `DEV001`, `DEV123456` |
| `deviceUserName` | 验证设备用户名 | `user01`, `admin` |
| `deviceAccount` | 验证设备账号 | `account01`, `test_user` |

::: info 相关信息

- 所有验证规则都支持自定义错误消息
- 验证规则可以组合使用，满足复杂验证需求
- 支持异步验证和同步验证两种方式
- 提供了严格的身份证和银行卡验证函数

:::
