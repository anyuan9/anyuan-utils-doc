<script setup>
import { useAddNumInOutlineLabel } from '../../.vitepress/utils/createElement.ts'
useAddNumInOutlineLabel(6)

import demoNumber from './demoNumber.vue'
import demoInteger from './demoInteger.vue'
import demoPositiveInteger from './demoPositiveInteger.vue'
import demoNaturalNum from './demoNaturalNum.vue'
import demoFloat from './demoFloat.vue'
import demoFloatFixed from './demoFloatFixed.vue'
import demoNonNegativeFloat from './demoNonNegativeFloat.vue'
import demoLetter from './demoLetter.vue'
import demoLowerCaseLetter from './demoLowerCaseLetter.vue'
import demoUpperCaseLetter from './demoUpperCaseLetter.vue'
import demoChinese from './demoChinese.vue'
import demoNumLetter from './demoNumLetter.vue'
import demoNumLetterInitial from './demoNumLetterInitial.vue'
import demoNumLetterAndCN from './demoNumLetterAndCN.vue'
import demoNumAndCN from './demoNumAndCN.vue'
import demoNumLetterUnderline from './demoNumLetterUnderline.vue'
import demoNumLetterUnderlineAndCN from './demoNumLetterUnderlineAndCN.vue'
import demoNumLetterUnderlineInitial from './demoNumLetterUnderlineInitial.vue'
import demoLetterAndCN from './demoLetterAndCN.vue'
import demoNoSpecialChar from './demoNoSpecialChar.vue'
import demoSpace from './demoSpace.vue'
import demoUuid from './demoUuid.vue'
import demoPersonName from './demoPersonName.vue'
import demoPasswordSimple from './demoPasswordSimple.vue'
import demoPassword from './demoPassword.vue'
import demoPasswordStrict from './demoPasswordStrict.vue'
import demoCertificate from './demoCertificate.vue'
import demoIdCard from './demoIdCard.vue'
import demoPassport from './demoPassport.vue'
import demoMainlandPassHM from './demoMainlandPassHM.vue'
import demoMainlandPassTW from './demoMainlandPassTW.vue'
import demoPhone from './demoPhone.vue'
import demoTelephone from './demoTelephone.vue'
import demoMobilePhone from './demoMobilePhone.vue'
import demoEmail from './demoEmail.vue'
import demoPostalCode from './demoPostalCode.vue'
import demoQq from './demoQq.vue'
import demoCardNum from './demoCardNum.vue'
import demoBankCardNum from './demoBankCardNum.vue'
import demoEnterpriseTaxNumber from './demoEnterpriseTaxNumber.vue'
import demoUrl from './demoUrl.vue'
import demoIpv4 from './demoIpv4.vue'
import demoIpv6 from './demoIpv6.vue'
import demoPort from './demoPort.vue'
import demoMac from './demoMac.vue'
import demoBase64 from './demoBase64.vue'
import demoBase64Image from './demoBase64Image.vue'
import demoImage from './demoImage.vue'
import demoAudio from './demoAudio.vue'
import demoVideo from './demoVideo.vue'
import demoWord from './demoWord.vue'
import demoExcel from './demoExcel.vue'
import demoPpt from './demoPpt.vue'
import demoPdf from './demoPdf.vue'
import demoTxt from './demoTxt.vue'
import demoMarkdown from './demoMarkdown.vue'
import demoArchive from './demoArchive.vue'
import demoLongitude from './demoLongitude.vue'
import demoLatitude from './demoLatitude.vue'
import demoAltitude from './demoAltitude.vue'
import demoAngle from './demoAngle.vue'
import demoColorHex from './demoColorHex.vue'
import demoColorRgb from './demoColorRgb.vue'
import demoColorRgba from './demoColorRgba.vue'
import demoDateISO from './demoDateISO.vue'
import demoDeviceType from './demoDeviceType.vue'
import demoDeviceCode from './demoDeviceCode.vue'
import demoDeviceUserName from './demoDeviceUserName.vue'
import demoDeviceAccount from './demoDeviceAccount.vue'
import demoImei from './demoImei.vue'
import demoPlateNum from './demoPlateNum.vue'
import demoPlateNumStrict from './demoPlateNumStrict.vue'
import demoPlateNumLoose from './demoPlateNumLoose.vue'
</script>

::: tip 支持任意 `JavaScript` 环境或框架
正则表达式工具函数，提供多种常用的验证规则。
:::

## 数字验证

### number

纯数字，但是注意：包括'000', '007'等，不包括'12a3', ' 123', '12.3'等

<div class="code-border">

<demoNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumber.vue

</details>

</div>

### integer

整数，例如：'-1', '0', '1'

<div class="code-border">

<demoInteger />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoInteger.vue

</details>

</div>

### positiveInteger

正整数，例如：'1', '2', '3'

<div class="code-border">

<demoPositiveInteger />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPositiveInteger.vue

</details>

</div>

### naturalNum

自然数（0或正整数），例如：'0', '1', '2', '3'

<div class="code-border">

<demoNaturalNum />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNaturalNum.vue

</details>

</div>

### float

浮点数(小数或整数)，例如：'-0.12', '0', '0.123'

<div class="code-border">

<demoFloat />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoFloat.vue

</details>

</div>

### floatFixed

浮点数(小数或整数)，且最多2位小数，例如：'-0.1', '0', '0.12'

<div class="code-border">

<demoFloatFixed />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoFloatFixed.vue

</details>

</div>

### nonNegativeFloat

非负浮点数(0或正浮点数)，例如：'0', '0.12', '0.123'

<div class="code-border">

<demoNonNegativeFloat />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNonNegativeFloat.vue

</details>

</div>

## 字符格式验证

### letter

字母(大小写字母)，例如 'HelloWorld'

<div class="code-border">

<demoLetter />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoLetter.vue

</details>

</div>

### lowerCaseLetter

小写字母，例如 'helloWorld'

<div class="code-border">

<demoLowerCaseLetter />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoLowerCaseLetter.vue

</details>

</div>

### upperCaseLetter

大写字母，例如 'HELLOWORLD'

<div class="code-border">

<demoUpperCaseLetter />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoUpperCaseLetter.vue

</details>

</div>

### chinese

常用汉字，例如：'你好世界'

<div class="code-border">

<demoChinese />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoChinese.vue

</details>

</div>

### numLetter

数字、字母的组合，例如 'Hello123', '123Hello'

<div class="code-border">

<demoNumLetter />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetter.vue

</details>

</div>

### numLetterInitial

数字、字母的组合，且以英文字母开头，例如 'Hello123'

<div class="code-border">

<demoNumLetterInitial />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetterInitial.vue

</details>

</div>

### numLetterAndCN

数字、字母、汉字的组合，例如 'Hello123你好'

<div class="code-border">

<demoNumLetterAndCN />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetterAndCN.vue

</details>

</div>

### numAndCN

数字、汉字的组合，例如 '123你好'

<div class="code-border">

<demoNumAndCN />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumAndCN.vue

</details>

</div>

### numLetterUnderline

数字、英文字母、下划线的组合，例如 'abc_123'

<div class="code-border">

<demoNumLetterUnderline />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetterUnderline.vue

</details>

</div>

### numLetterUnderlineAndCN

数字、字母、下划线、汉字的组合，例如 'abc_123你好'

<div class="code-border">

<demoNumLetterUnderlineAndCN />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetterUnderlineAndCN.vue

</details>

</div>

### numLetterUnderlineInitial

数字、字母、下划线的组合，并且字母开头，例如 'abc_123'

<div class="code-border">

<demoNumLetterUnderlineInitial />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNumLetterUnderlineInitial.vue

</details>

</div>

### letterAndCN

字母、汉字的组合，例如 'abc你好'

<div class="code-border">

<demoLetterAndCN />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoLetterAndCN.vue

</details>

</div>

### noSpecialChar

不包含特殊字符，例如用于姓名

<div class="code-border">

<demoNoSpecialChar />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoNoSpecialChar.vue

</details>

</div>

### space

是否有空格，例如：'Hello World'

<div class="code-border">

<demoSpace />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoSpace.vue

</details>

</div>

### uuid

UUID 32位大写英文字母、数字、连接符。例如：'550e8400-e29b-41d4-a716-446655440000'

<div class="code-border">

<demoUuid />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoUuid.vue

</details>

</div>

## 个人信息

### personName

姓名（中英文），1~128位字符，由数字、英文字母、汉字、间隔号（·）和空格等组成

<div class="code-border">

<demoPersonName />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPersonName.vue

</details>

</div>

### passwordSimple

密码为4-8位数字

<div class="code-border">

<demoPasswordSimple />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPasswordSimple.vue

</details>

</div>

### password

密码为8-16位字符，至少由大写字母、小写字母、数字、特殊字符任意两种组成。

<div class="code-border">

<demoPassword />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPassword.vue

</details>

</div>

### passwordStrict

密码至少8位字符，包含大写字母、小写字母、数字、特殊符等4种字符

<div class="code-border">

<demoPasswordStrict />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPasswordStrict.vue

</details>

</div>

### certificate

证件号码，0~20位字符，由数字、英文字母组成

<div class="code-border">

<demoCertificate />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoCertificate.vue

</details>

</div>

### idCard

身份证号，15位身份证号或18位身份证号，例如：522530199208180048

<div class="code-border">

<demoIdCard />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoIdCard.vue

</details>

</div>

### passport

中国大陆护照，1位英文字母 + 8位阿拉伯数字

<div class="code-border">

<demoPassport />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPassport.vue

</details>

</div>

### mainlandPassHM

港澳居民来往内地通行证

<div class="code-border">

<demoMainlandPassHM />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoMainlandPassHM.vue

</details>

</div>

### mainlandPassTW

台湾居民来往大陆通行证

<div class="code-border">

<demoMainlandPassTW />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoMainlandPassTW.vue

</details>

</div>

### phone

电话号码 (手机号或电话号码)

<div class="code-border">

<demoPhone />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPhone.vue

</details>

</div>

### telephone

中国大陆固定电话号码（包括客服电话）

<div class="code-border">

<demoTelephone />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoTelephone.vue

</details>

</div>

### mobilePhone

中国大陆手机号码，例如：13800138000

<div class="code-border">

<demoMobilePhone />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoMobilePhone.vue

</details>

</div>

### email

email邮箱，符合RFC 5322标准的邮箱验证

<div class="code-border">

<demoEmail />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoEmail.vue

</details>

</div>

### postalCode

中国大陆邮政编码(邮编)，例如：100010

<div class="code-border">

<demoPostalCode />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPostalCode.vue

</details>

</div>

### qq

QQ号

<div class="code-border">

<demoQq />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoQq.vue

</details>

</div>

## 金融

### cardNum

卡号，8~18个字符，数字、大写字母的组合

<div class="code-border">

<demoCardNum />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoCardNum.vue

</details>

</div>

### bankCardNum

银行卡号简单校验，15位到19位的数字

<div class="code-border">

<demoBankCardNum />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoBankCardNum.vue

</details>

</div>

### enterpriseTaxNumber

企业税号，15位纳税人识别号（2015.10.1前）、18位或20位的数字/字母组合的统一社会信用代码

<div class="code-border">

<demoEnterpriseTaxNumber />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoEnterpriseTaxNumber.vue

</details>

</div>

## 网络

### url

url地址

<div class="code-border">

<demoUrl />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoUrl.vue

</details>

</div>

### ipv4

IPV4地址，例如 127.0.0.1

<div class="code-border">

<demoIpv4 />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoIpv4.vue

</details>

</div>

### ipv6

IPV6地址，8组16进制数，每组1-4个字符。例如 FC00:0000:130F:0000:0000:09C0:876A:130B，缩写 FC00:0:130F:0:0:9C0:876A:130B

<div class="code-border">

<demoIpv6 />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoIpv6.vue

</details>

</div>

### port

端口号，必须为数字且应在1~65535之间，例如8080

<div class="code-border">

<demoPort />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPort.vue

</details>

</div>

### mac

mac地址，例如 FF:FF:FF:FF:FF:FF

<div class="code-border">

<demoMac />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoMac.vue

</details>

</div>

### base64

base64编码，例如：'SGVsbG8='

<div class="code-border">

<demoBase64 />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoBase64.vue

</details>

</div>

### base64Image

base64编码图片（包含头部信息）

<div class="code-border">

<demoBase64Image />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoBase64Image.vue

</details>

</div>

## 文件

### image

图片文件，文件名以.png、.jpeg, .gif...等结尾，例如 .png, photo.png

<div class="code-border">

<demoImage />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoImage.vue

</details>

</div>

### audio

音频文件，文件名以.mp3, .wav, .aac...等结尾，例如 .mp3, song.mp3, song.wav, song.aac

<div class="code-border">

<demoAudio />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoAudio.vue

</details>

</div>

### video

视频文件，文件名以.mp4, .avi, .mov...等结尾，例如.mp4, movie.mp4

<div class="code-border">

<demoVideo />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoVideo.vue

</details>

</div>

### word

word文档，文件名以.doc, .docx, .docm...等结尾

<div class="code-border">

<demoWord />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoWord.vue

</details>

</div>

### excel

excel文档，文件名以.xls, .xlsx, .xlsm...等结尾

<div class="code-border">

<demoExcel />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoExcel.vue

</details>

</div>

### ppt

ppt文档，文件名以.ppt, .pptx, .pptm...等结尾

<div class="code-border">

<demoPpt />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPpt.vue

</details>

</div>

### pdf

PDF文件，文件名以.pdf结尾，例如.pdf, test.pdf

<div class="code-border">

<demoPdf />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPdf.vue

</details>

</div>

### txt

txt文件，文件名以.txt结尾，例如.txt, test.txt

<div class="code-border">

<demoTxt />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoTxt.vue

</details>

</div>

### markdown

markdown文件，文件名以.md, .markdown, .mdown...等结尾

<div class="code-border">

<demoMarkdown />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoMarkdown.vue

</details>

</div>

### archive

压缩文件，例如 .zip, test.zip, .tar.gz, test.tar.gz

<div class="code-border">

<demoArchive />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoArchive.vue

</details>

</div>

## 地理位置

### longitude

经度，经度的取值范围-180~180，最多保留15位小数点，例如：120.123456

<div class="code-border">

<demoLongitude />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoLongitude.vue

</details>

</div>

### latitude

纬度，纬度的取值范围-90~90，最多保留15位小数点，例如：30.123456

<div class="code-border">

<demoLatitude />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoLatitude.vue

</details>

</div>

### altitude

海拔高度，海拔范围约在-10000米到+10000米之间，最多保留6位小数点

<div class="code-border">

<demoAltitude />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoAltitude.vue

</details>

</div>

### angle

角度验证

<div class="code-border">

<demoAngle />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoAngle.vue

</details>

</div>

## 颜色值

### colorHex

hex颜色值，例如：'#ff0000'

<div class="code-border">

<demoColorHex />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoColorHex.vue

</details>

</div>

### colorRgb

rgb颜色值，例如：'rgb(255,0,0)'

<div class="code-border">

<demoColorRgb />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoColorRgb.vue

</details>

</div>

### colorRgba

rgba颜色值，例如：'rgba(255,0,0,0.5)'

<div class="code-border">

<demoColorRgba />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoColorRgba.vue

</details>

</div>

## 日期时间

### dateISO

ISO类型的日期格式，例如：'2018-03-15T08:00:00Z', '2018-03-15'

<div class="code-border">

<demoDateISO />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoDateISO.vue

</details>

</div>

## 设备

### deviceType

设备型号：只能用字母、数字、汉字、小数点、下划线、连接符、括号

<div class="code-border">

<demoDeviceType />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoDeviceType.vue

</details>

</div>

### deviceCode

设备编码：只能用字母、数字、汉字、小数点、下划线、连接符

<div class="code-border">

<demoDeviceCode />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoDeviceCode.vue

</details>

</div>

### deviceUserName

设备登录用户名：只能用字母、数字、汉字、小数点、下划线、连接符

<div class="code-border">

<demoDeviceUserName />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoDeviceUserName.vue

</details>

</div>

### deviceAccount

设备账号：1-32位字符，只能用字母、数字和除:\"之外的特殊字符

<div class="code-border">

<demoDeviceAccount />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoDeviceAccount.vue

</details>

</div>

### imei

手机序列号，例如 123456789012345

<div class="code-border">

<demoImei />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoImei.vue

</details>

</div>

## 车辆

### plateNum

常规车牌号（不支持通配符）

<div class="code-border">

<demoPlateNum />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPlateNum.vue

</details>

</div>

### plateNumStrict

车牌号，支持武警、大使馆、民航等车牌

<div class="code-border">

<demoPlateNumStrict />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPlateNumStrict.vue

</details>

</div>

### plateNumLoose

车牌号（支持通配符），例如：京A\*、粤B?123

<div class="code-border">

<demoPlateNumLoose />

<details>

<summary>查看代码</summary>

<<< @/utils/regExp/demoPlateNumLoose.vue

</details>

</div>

## 正则规则列表

以下表格列举了 regExp.ts 文件中定义的所有正则验证规则：

| **规则名称**                | **含义**                                     | **示例**                                  |
| --------------------------- | -------------------------------------------- | ----------------------------------------- |
| `number`                    | 纯数字验证                                   | `123`, `000`                              |
| `integer`                   | 整数验证                                     | `-1`, `0`, `1`                            |
| `positiveInteger`           | 正整数验证                                   | `1`, `2`, `3`                             |
| `naturalNum`                | 自然数验证（0或正整数）                      | `0`, `1`, `2`                             |
| `float`                     | 浮点数验证（小数或整数）                     | `-0.12`, `0`, `0.123`                     |
| `floatFixed`                | 最多2位小数的浮点数                          | `-0.1`, `0`, `0.12`                       |
| `nonNegativeFloat`          | 非负浮点数验证                               | `0`, `0.12`, `0.123`                      |
| `letter`                    | 字母验证（大小写）                           | `HelloWorld`                              |
| `lowerCaseLetter`           | 小写字母验证                                 | `helloworld`                              |
| `upperCaseLetter`           | 大写字母验证                                 | `HELLOWORLD`                              |
| `chinese`                   | 常用汉字验证                                 | `你好世界`                                |
| `numLetter`                 | 数字、字母组合验证                           | `Hello123`, `123Hello`                    |
| `numLetterInitial`          | 字母开头的数字字母组合                       | `Hello123`                                |
| `numLetterAndCN`            | 数字、字母、汉字组合                         | `Hello123你好`                            |
| `numAndCN`                  | 数字、汉字组合                               | `123你好`                                 |
| `numLetterUnderline`        | 数字、字母、下划线组合                       | `abc_123`                                 |
| `numLetterUnderlineAndCN`   | 数字、字母、下划线、汉字组合                 | `abc_123你好`                             |
| `numLetterUnderlineInitial` | 字母开头的数字字母下划线组合                 | `abc_123`                                 |
| `letterAndCN`               | 字母、汉字组合                               | `abc你好`                                 |
| `noSpecialChar`             | 不包含特殊字符验证                           | `正常文本`                                |
| `space`                     | 空格验证                                     | `Hello World`                             |
| `uuid`                      | UUID格式验证                                 | `550e8400-e29b-41d4-a716-446655440000`    |
| `personName`                | 姓名验证（中英文）                           | `张三`, `John Smith`                      |
| `passwordSimple`            | 简单密码验证（4-8位数字）                    | `1234`, `567890`                          |
| `password`                  | 常规密码验证（8-16位字符，至少两种字符类型） | `Abc123!`                                 |
| `passwordStrict`            | 严格密码验证（至少8位，包含4种字符类型）     | `Abc123!@#`                               |
| `certificate`               | 证件号码验证                                 | `A123456`                                 |
| `idCard`                    | 身份证号验证                                 | `110101199001011234`                      |
| `passport`                  | 护照号码验证                                 | `E12345678`                               |
| `mainlandPassHM`            | 港澳居民来往内地通行证验证                   | `H12345678`, `M87654321`                  |
| `mainlandPassTW`            | 台湾居民来往内地通行证验证                   | `T12345678`                               |
| `phone`                     | 电话号码验证（手机号或固话）                 | `13800138000`, `010-12345678`             |
| `telephone`                 | 固定电话号码验证                             | `010-12345678`                            |
| `mobilePhone`               | 手机号码验证                                 | `13800138000`                             |
| `email`                     | 邮箱地址验证                                 | `test@example.com`                        |
| `postalCode`                | 邮政编码验证                                 | `100000`                                  |
| `qq`                        | QQ号码验证                                   | `123456`                                  |
| `cardNum`                   | 卡号验证                                     | `12345678`                                |
| `bankCardNum`               | 银行卡号验证                                 | `6228480402564890018`                     |
| `enterpriseTaxNumber`       | 企业税号验证                                 | `91110000100012345X`                      |
| `url`                       | URL地址验证                                  | `https://example.com`                     |
| `ipv4`                      | IPv4地址验证                                 | `192.168.1.1`                             |
| `ipv6`                      | IPv6地址验证                                 | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| `port`                      | 端口号验证                                   | `8080`                                    |
| `mac`                       | MAC地址验证                                  | `FF:FF:FF:FF:FF:FF`                       |
| `base64`                    | Base64编码验证                               | `SGVsbG8=`                                |
| `base64Image`               | Base64图片编码验证                           | `data:image/png;base64,iVBORw0KGgo...`    |
| `image`                     | 图片文件格式验证                             | `.png`, `.jpg`                            |
| `audio`                     | 音频文件格式验证                             | `.mp3`, `.wav`                            |
| `video`                     | 视频文件格式验证                             | `.mp4`, `.avi`                            |
| `word`                      | Word文档格式验证                             | `.doc`, `.docx`                           |
| `excel`                     | Excel文档格式验证                            | `.xls`, `.xlsx`                           |
| `ppt`                       | PowerPoint文档格式验证                       | `.ppt`, `.pptx`                           |
| `pdf`                       | PDF文档格式验证                              | `.pdf`                                    |
| `txt`                       | 文本文件格式验证                             | `.txt`                                    |
| `markdown`                  | Markdown文件格式验证                         | `.md`, `.markdown`                        |
| `markdownStrict`            | 严格Markdown文件格式验证                     | `.md`, `.mdown`                           |
| `archive`                   | 压缩文件格式验证                             | `.zip`, `.rar`                            |
| `longitude`                 | 经度验证                                     | `120.123456`                              |
| `latitude`                  | 纬度验证                                     | `30.123456`                               |
| `altitude`                  | 海拔高度验证                                 | `100`, `-50`                              |
| `angle`                     | 角度验证                                     | `45°`, `3.14rad`                          |
| `colorHex`                  | HEX颜色值验证                                | `#FFFFFF`, `#FF0000`                      |
| `colorRgb`                  | RGB颜色值验证                                | `rgb(255,0,0)`                            |
| `colorRgba`                 | RGBA颜色值验证                               | `rgba(255,0,0,0.5)`                       |
| `dateISO`                   | ISO日期格式验证                              | `2018-03-15T08:00:00Z`                    |
| `deviceType`                | 设备型号验证                                 | `iPhone 14 Pro`                           |
| `deviceCode`                | 设备编码验证                                 | `DEV001`                                  |
| `deviceUserName`            | 设备用户名验证                               | `user01`                                  |
| `deviceAccount`             | 设备账号验证                                 | `admin@123`                               |
| `imei`                      | 手机序列号验证                               | `123456789012345`                         |
| `plateNum`                  | 常规车牌号验证                               | `京A12345`                                |
| `plateNumStrict`            | 严格车牌号验证（支持特殊车牌）               | `WJ·A0010`, `粤Z·F023港`                  |
| `plateNumLoose`             | 宽松车牌号验证（支持通配符）                 | `京A*`, `粤B?123`                         |

::: info 相关信息

- 所有正则规则都支持直接使用，例如：`regExp.email.test('test@example.com')`
- 正则规则涵盖了数字、字符、个人信息、金融、网络、文件、地理位置、颜色值、日期时间、设备、车辆等多个领域
- 部分规则支持严格和宽松两种验证模式

:::
