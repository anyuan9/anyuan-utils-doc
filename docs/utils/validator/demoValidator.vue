<script setup lang="ts">
import { ref, reactive } from "vue";
// import type { FormInstance, FormRules } from "element-plus";
// import { ElMessage } from "element-plus";
import type { FormInst, FormItemInst, FormItemRule, FormRules } from "naive-ui";
import { validator } from "@anyuan/utils";

const treeData = [
  {
    value: "1",
    label: "一级 1",
    children: [
      {
        value: "1-1",
        label: "二级 1-1"
      }
    ]
  },
  {
    value: "2",
    label: "一级 2"
  }
];

const selectOptions = [
  { label: "选项1", value: "1" },
  { label: "选项2", value: "2" },
  { label: "选项3", value: "3" }
];

const formRef = ref<FormInst | null>(null);

const formData = reactive({
  // 必填项
  requiredString: "test",
  requiredNumber: 1234,
  requiredArray: ["1", "2"],
  requiredDate: "2025-01-01 10:12:24",
  selectRequired: "1",
  treeSelectRequired: "1",
  treeObjectRequired: {
    values: ["1", "2"]
  },

  // 数字验证
  number: "007",
  integer: "123",
  positiveInteger: "123",
  naturalNum: "0",
  float: "1.234",
  floatFixed: "1.23",
  nonNegativeFloat: "0.12",
  numRange: "10",
  numLength: "1234",
  divisible: "5",

  // 字符格式验证
  letter: "HelloWorld",
  lowerCaseLetter: "helloworld",
  upperCaseLetter: "HELLOWORLD",
  chinese: "你好世界",
  numLetter: "Hello123",
  numLetterInitial: "Hello123",
  numLetterAndCN: "Hello123你好",
  numAndCN: "123你好",
  numLetterUnderline: "abc_123",
  numLetterUnderlineAndCN: "abc_123你好",
  numLetterUnderlineInitial: "abc_123",
  letterAndCN: "abc你好",
  noSpecialChar: "Hello123你好",
  uuid: "550e8400-e29b-41d4-a716-446655440000",
  length: "12345",

  // 个人信息验证
  personName: "张三·李四 王五",
  passwordSimple: "1234",
  password: "Hello123",
  passwordStrict: "Hello123@_",
  certificate: "12345678",
  idCard: "110105196708120012",
  idCardStrict: "522530199208180048",
  passport: "E12345678",
  mainlandPassHM: "H1234567890",
  mainlandPassTW: "A1234567",
  phone: "02712345678",
  telephone: "4001231234",
  mobilePhone: "13800138000",
  postalCode: "100010",
  email: "user@example.com",
  qq: "12345678",

  // 网络相关验证
  url: "https://www.example.com",
  ipv4: "127.0.0.1",
  ipv6: "FC00:0000:130F:0000:0000:09C0:876A:130B",
  port: "8080",
  mac: "FF:FF:FF:FF:FF:FF",
  base64: "SGVsbG8=",
  base64Image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAAAf0lEQVQ4EdVS2w2AIAykxilcw+VcgmncyTVqj1A8Mf0zQU3IPdrKQUiJP1XdWRO30gYJnMgfRC1GrnEKgn8g1nUbFnBxxXx2E8gF9hu3hhWrGUbERT8tIofXCnID81vTTwTy28r9OSI/PBYN4GofP/TB918T7dyeBnaLfE8yDk9CPmLfzF8pZQAAAABJRU5ErkJggg==",

  // 金融验证
  cardNum: "AD12345678",
  bankCardNum: "4278967800240078",
  bankCardNumStrict: "6259987688888888",
  enterpriseTaxNumber: "123456789012345678",

  // 文件类型验证
  fileType: "test.jpg",
  image: "test.png",
  audio: "test.aac",
  video: "test.mp4",
  word: "test.doc",
  excel: "test.xls",
  ppt: "test.ppt",
  pdf: "test.pdf",
  txt: "test.txt",
  markdown: "test.md",
  archive: "test.zip",

  // 地理位置验证
  longitude: "120.123456",
  latitude: "30.123456",
  altitude: "13310.123456",
  angle: "45°",

  // 颜色值验证
  colorHex: "#ff0000",
  colorRgb: "rgb(255,255,255)",
  colorRgba: "rgba(255,255,255,0.5)",

  // 日期时间验证
  dateValid: "2025-01-01 08:00:00",
  datetime: "2049-01-01 08:00:00",
  datetimePast: "2020-01-01 08:00:00",
  datetimeRange: ["2049-01-01 08:00:00", "2049-01-10 09:00:00"],
  datetimeRangePast: ["2020-01-01 08:00:00", "2020-01-10 09:00:00"],
  dateISO: "2018-03-15T08:00:00Z",

  // 设备相关验证
  deviceType: "Abc123456789",
  deviceCode: "Abc123456789",
  deviceUserName: "abc123456789",
  deviceAccount: "abc12345678",

  // 车牌号码验证
  plateNum: "京A12345",
  plateNumLoose: "粤B?123"
});

const formRules: FormRules = {
  // 必填项验证
  requiredString: [
    validator.requiredValidator({
      message: "请输入字符串",
      trigger: "blur",
      type: "string"
    })
  ],
  requiredNumber: [
    validator.requiredValidator({
      message: "请输入数字",
      trigger: "blur",
      type: "number"
    })
  ],
  requiredArray: [
    validator.requiredValidator({
      message: "请选择",
      trigger: "change",
      type: "array"
    })
  ],
  requiredDate: [
    validator.requiredValidator({
      message: "请选择日期时间",
      trigger: "change",
      type: "string"
    })
  ],
  selectRequired: [validator.selectValidator({ message: "请选择选项" })],
  treeSelectRequired: [
    validator.treeSelectValidator({ message: "请选择树节点" })
  ],
  treeObjectRequired: [
    validator.treeObjectValidator({ message: "请选择树对象" })
  ],

  // 数字验证
  number: [validator.number()],
  integer: [validator.integer()],
  positiveInteger: [validator.positiveInteger()],
  naturalNum: [validator.naturalNum()],
  float: [validator.float()],
  floatFixed: [validator.floatFixed(2)],
  nonNegativeFloat: [validator.nonNegativeFloat()],
  numRange: [validator.numRange(1, 100)],
  numLength: [validator.numLength(3, 5)],
  divisible: [validator.divisible(5)],

  // 字符格式验证
  letter: [validator.letter()],
  lowerCaseLetter: [validator.lowerCaseLetter()],
  upperCaseLetter: [validator.upperCaseLetter()],
  chinese: [validator.chinese()],
  numLetter: [validator.numLetter()],
  numLetterInitial: [validator.numLetterInitial()],
  numLetterAndCN: [validator.numLetterAndCN()],
  numAndCN: [validator.numAndCN()],
  numLetterUnderline: [validator.numLetterUnderline()],
  numLetterUnderlineAndCN: [validator.numLetterUnderlineAndCN()],
  numLetterUnderlineInitial: [validator.numLetterUnderlineInitial()],
  letterAndCN: [validator.letterAndCN()],
  noSpecialChar: [validator.noSpecialChar()],
  uuid: [validator.uuid()],
  length: [validator.length(3, 10)],

  // 个人信息验证
  personName: [validator.personName()],
  passwordSimple: [validator.passwordSimple()],
  password: [validator.password()],
  passwordStrict: [validator.passwordStrict()],
  certificate: [validator.certificate()],
  idCard: [validator.idCard()],
  idCardStrict: [validator.idCardStrict()],
  passport: [validator.passport()],
  mainlandPassHM: [validator.mainlandPassHM()],
  mainlandPassTW: [validator.mainlandPassTW()],
  phone: [validator.phone()],
  telephone: [validator.telephone()],
  email: [validator.email()],
  postalCode: [validator.postalCode()],
  qq: [validator.qq()],

  // 网络相关验证
  url: [validator.url()],
  ipv4: [validator.ipv4()],
  ipv6: [validator.ipv6()],
  port: [validator.port()],
  mac: [validator.mac()],
  base64: [validator.base64()],
  base64Image: [validator.base64Image()],

  // 金融验证
  cardNum: [validator.cardNum()],
  bankCardNum: [validator.bankCardNum()],
  bankCardNumStrict: [validator.bankCardNumStrict()],
  enterpriseTaxNumber: [validator.enterpriseTaxNumber()],

  // 文件类型验证
  fileType: [validator.file("jpg,png")],
  image: [validator.image()],
  audio: [validator.audio()],
  video: [validator.video()],
  word: [validator.word()],
  excel: [validator.excel()],
  ppt: [validator.ppt()],
  pdf: [validator.pdf()],
  txt: [validator.txt()],
  markdown: [validator.markdown()],
  archive: [validator.archive()],

  // 地理位置验证
  longitude: [validator.longitude()],
  latitude: [validator.latitude()],
  altitude: [validator.altitude()],
  angle: [validator.angle()],

  // 颜色值验证
  colorHex: [validator.colorHex()],
  colorRgb: [validator.colorRgb()],
  colorRgba: [validator.colorRgba()],

  // 日期时间验证
  dateValid: [validator.dateValid("date")],
  datetime: [validator.datetime("datetime")],
  datetimePast: [validator.datetimePast("datetime")],
  datetimeRange: [validator.datetimeRange()],
  datetimeRangePast: [validator.datetimeRangePast()],
  dateISO: [validator.dateISO()],

  // 设备相关验证
  deviceType: [validator.deviceType()],
  deviceCode: [validator.deviceCode()],
  deviceUserName: [validator.deviceUserName()],
  deviceAccount: [validator.deviceAccount()],

  // 车牌号码验证
  plateNum: [validator.plateNum()],
  plateNumLoose: [validator.plateNumLoose()]
} as FormRules;

const handleSubmit = async () => {
  if (!formRef.value) return;

  try {
    await formRef.value.validate();
    console.log("表单校验通过！");
  } catch (error) {
    alert("表单校验失败，请检查输入");
  }
};

const handleReset = () => {
  formRef.value?.restoreValidation();
  // formRef.value?.resetFields();
};
</script>

<template>
  <div class="validator-test">
    <h1>表单校验测试页面</h1>

    <n-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-position="top"
      label-width="120px"
    >
      <h2>必填项验证</h2>
      <div class="form-grid-wrap">
        <!-- 必填项验证 -->
        <n-form-item label="字符串必填" prop="requiredString">
          <n-input
            v-model="formData.requiredString"
            placeholder="请输入字符串"
          />
        </n-form-item>

        <n-form-item label="数字必填" prop="requiredNumber">
          <n-input
            v-model.number="formData.requiredNumber"
            placeholder="请输入数字"
          />
          <!-- <n-input-number v-model="formData.requiredNumber" :min="0" /> -->
        </n-form-item>

        <n-form-item label="数组必填" prop="requiredArray">
          <n-select
            v-model="formData.requiredArray"
            :options="selectOptions"
            multiple
            placeholder="请选择"
          >
          </n-select>
        </n-form-item>

        <n-form-item label="日期必填" prop="requiredDate">
          <n-date-picker
            v-model="formData.requiredDate"
            type="datetime"
            placeholder="选择日期时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </n-form-item>

        <n-form-item label="选择器必填" prop="selectRequired">
          <n-select
            v-model="formData.selectRequired"
            :options="selectOptions"
            placeholder="请选择"
          >
          </n-select>
        </n-form-item>

        <n-form-item label="树选择必填" prop="treeSelectRequired">
          <n-tree-select
            v-model="formData.treeSelectRequired"
            :data="treeData"
            placeholder="请选择"
          />
        </n-form-item>

        <n-form-item label="树对象选择" prop="treeObjectRequired">
          <!-- <n-input
            v-model="formData.treeObjectRequired"
            placeholder="树对象选择验证"
            disabled
          /> -->
          <span style="margin-left: 10px; color: #666"
            >此验证需要特殊组件支持</span
          >
        </n-form-item>
      </div>

      <h2>数字验证</h2>
      <div class="form-grid-wrap">
        <!-- 数字验证 -->
        <n-form-item label="纯数字" prop="number">
          <template #label>
            <span>纯数字</span>
            <span class="introduction">请输入纯数字，例如'000', '007'等</span>
          </template>
          <n-input v-model="formData.number" placeholder="请输入数字" />
        </n-form-item>

        <n-form-item label="整数" prop="integer">
          <template #label>
            <span>整数</span>
            <span class="introduction">请输入整数，例如'0', '123'等</span>
          </template>
          <n-input v-model="formData.integer" placeholder="请输入整数" />
        </n-form-item>

        <n-form-item label="正整数" prop="positiveInteger">
          <template #label>
            <span>正整数</span>
            <span class="introduction">请输入正整数，例如'1', '234'等</span>
          </template>
          <n-input
            v-model="formData.positiveInteger"
            placeholder="请输入正整数"
          />
        </n-form-item>

        <n-form-item label="自然数" prop="naturalNum">
          <template #label>
            <span>自然数</span>
            <span class="introduction">请输入自然数，例如'0', '123'等</span>
          </template>
          <n-input v-model="formData.naturalNum" placeholder="请输入自然数" />
        </n-form-item>

        <n-form-item label="浮点数" prop="float">
          <template #label>
            <span>浮点数</span>
            <span class="introduction">请输入浮点数，例如'1.0', '3.14'等</span>
          </template>
          <n-input v-model="formData.float" placeholder="请输入浮点数" />
        </n-form-item>

        <n-form-item label="浮点数(2位小数)" prop="floatFixed">
          <template #label>
            <span>浮点数(2位小数)</span>
            <span class="introduction"
              >请输入最多2位小数的数字，例如'1.0', '3.14'等</span
            >
          </template>
          <n-input
            v-model="formData.floatFixed"
            placeholder="请输入最多2位小数的数字"
          />
        </n-form-item>

        <n-form-item label="非负浮点数" prop="nonNegativeFloat">
          <template #label>
            <span>非负浮点数</span>
            <span class="introduction"
              >请输入非负浮点数，例如'0.0', '3.14'等</span
            >
          </template>
          <n-input
            v-model="formData.nonNegativeFloat"
            placeholder="请输入非负浮点数"
          />
        </n-form-item>

        <n-form-item label="数字范围(1-100)" prop="numRange">
          <template #label>
            <span>数字范围(1-100)</span>
            <span class="introduction">请输入1到100之间的数字</span>
          </template>
          <n-input
            v-model="formData.numRange"
            placeholder="请输入1-100之间的数字"
          />
        </n-form-item>

        <n-form-item label="数字长度(3-5位)" prop="numLength">
          <template #label>
            <span>数字长度(3-5位)</span>
            <span class="introduction">请输入3到5位的数字</span>
          </template>
          <n-input v-model="formData.numLength" placeholder="请输入3-5位数字" />
        </n-form-item>

        <n-form-item label="整除验证(能被5整除)" prop="divisible">
          <template #label>
            <span>整除验证(能被5整除)</span>
            <span class="introduction">请输入能被5整除的数字</span>
          </template>
          <n-input
            v-model="formData.divisible"
            placeholder="请输入能被5整除的数字"
          />
        </n-form-item>
      </div>

      <h2>字符格式验证</h2>
      <div class="form-grid-wrap">
        <!-- 字符格式验证 -->
        <n-form-item label="字母" prop="letter">
          <template #label>
            <span>字母</span>
            <span class="introduction">字母，例如 'HelloWorld', 'hello'</span>
          </template>
          <n-input v-model="formData.letter" placeholder="请输入字母" />
        </n-form-item>

        <n-form-item label="小写字母" prop="lowerCaseLetter">
          <template #label>
            <span>小写字母</span>
            <span class="introduction">小写字母，例如 'hello', 'world'</span>
          </template>
          <n-input
            v-model="formData.lowerCaseLetter"
            placeholder="请输入小写字母"
          />
        </n-form-item>

        <n-form-item label="大写字母" prop="upperCaseLetter">
          <template #label>
            <span>大写字母</span>
            <span class="introduction">大写字母，例如 'HELLO', 'WORLD'</span>
          </template>
          <n-input
            v-model="formData.upperCaseLetter"
            placeholder="请输入大写字母"
          />
        </n-form-item>

        <n-form-item label="汉字" prop="chinese">
          <template #label>
            <span>汉字</span>
            <span class="introduction">汉字，例如 '你好', '世界'</span>
          </template>
          <n-input v-model="formData.chinese" placeholder="请输入汉字" />
        </n-form-item>

        <n-form-item label="数字字母" prop="numLetter">
          <template #label>
            <span>数字字母</span>
            <span class="introduction">数字和字母组合</span>
          </template>
          <n-input
            v-model="formData.numLetter"
            placeholder="请输入数字、字母"
          />
        </n-form-item>

        <n-form-item label="字母开头数字字母" prop="numLetterInitial">
          <template #label>
            <span>字母开头数字字母</span>
            <span class="introduction"
              >以字母开头，由数字和字母组成的字符串</span
            >
          </template>
          <n-input
            v-model="formData.numLetterInitial"
            placeholder="字母开头，由数字、字母组成"
          />
        </n-form-item>

        <n-form-item label="数字字母汉字" prop="numLetterAndCN">
          <template #label>
            <span>数字字母汉字</span>
            <span class="introduction">数字、字母和汉字的组合</span>
          </template>
          <n-input
            v-model="formData.numLetterAndCN"
            placeholder="请输入数字、字母、汉字"
          />
        </n-form-item>

        <n-form-item label="数字汉字" prop="numAndCN">
          <template #label>
            <span>数字汉字</span>
            <span class="introduction">数字和汉字的组合</span>
          </template>
          <n-input v-model="formData.numAndCN" placeholder="请输入数字、汉字" />
        </n-form-item>

        <n-form-item label="字母数字下划线" prop="numLetterUnderline">
          <template #label>
            <span>字母数字下划线</span>
            <span class="introduction">字母、数字和下划线的组合</span>
          </template>
          <n-input
            v-model="formData.numLetterUnderline"
            placeholder="请输入字母、数字、下划线"
          />
        </n-form-item>

        <n-form-item label="字母数字下划线汉字" prop="numLetterUnderlineAndCN">
          <template #label>
            <span>字母数字下划线汉字</span>
            <span class="introduction">字母、数字、下划线和汉字的组合</span>
          </template>
          <n-input
            v-model="formData.numLetterUnderlineAndCN"
            placeholder="请输入字母、数字、下划线、汉字"
          />
        </n-form-item>

        <n-form-item
          label="字母开头数字下划线"
          prop="numLetterUnderlineInitial"
        >
          <template #label>
            <span>字母开头数字下划线</span>
            <span class="introduction"
              >以字母开头，由数字和下划线组成的字符串</span
            >
          </template>
          <n-input
            v-model="formData.numLetterUnderlineInitial"
            placeholder="字母开头，由字母、数字、下划线组成"
          />
        </n-form-item>

        <n-form-item label="字母汉字" prop="letterAndCN">
          <template #label>
            <span>字母汉字</span>
            <span class="introduction">字母和汉字的组合</span>
          </template>
          <n-input
            v-model="formData.letterAndCN"
            placeholder="请输入字母、汉字"
          />
        </n-form-item>

        <n-form-item label="无特殊字符" prop="noSpecialChar">
          <template #label>
            <span>无特殊字符</span>
            <span class="introduction"
              >不包含~!@#$%^&*()_+-=[]{};':"`\|,.<>/?！￥……（）——【】‘’；：”“。，、？等特殊字符的字符串</span
            >
          </template>
          <n-input
            v-model="formData.noSpecialChar"
            placeholder="不能包含特殊字符"
          />
        </n-form-item>

        <n-form-item label="UUID" prop="uuid">
          <template #label>
            <span>UUID</span>
            <span class="introduction"
              >32位大写英文字母、数字和连接符组成的UUID</span
            >
          </template>
          <n-input v-model="formData.uuid" placeholder="请输入UUID" />
        </n-form-item>

        <n-form-item label="字符长度(3-10)" prop="length">
          <template #label>
            <span>字符长度(3-10)</span>
            <span class="introduction">3到10位的字符</span>
          </template>
          <n-input v-model="formData.length" placeholder="请输入3-10个字符" />
        </n-form-item>
      </div>

      <h2>个人信息验证</h2>
      <div class="form-grid-wrap">
        <!-- 个人信息验证 -->
        <n-form-item label="姓名" prop="personName">
          <template #label>
            <span>姓名</span>
            <span class="introduction"
              >1~128位字符，由数字、英文字母、汉字、间隔号（·）和空格等组成</span
            >
          </template>
          <n-input
            v-model="formData.personName"
            placeholder="请输入1~128位字符，由数字、英文字母、汉字、间隔号（·）和空格等组成"
          />
        </n-form-item>

        <n-form-item label="简单密码" prop="passwordSimple">
          <template #label>
            <span>简单密码</span>
            <span class="introduction">4~8位数字</span>
          </template>
          <n-input
            v-model="formData.passwordSimple"
            type="password"
            placeholder="4~8位数字"
          />
        </n-form-item>

        <n-form-item label="密码" prop="password">
          <template #label>
            <span>密码</span>
            <span class="introduction"
              >8~16位字符，至少由大写字母、小写字母、数字、特殊字符任意两种组成</span
            >
          </template>
          <n-input
            v-model="formData.password"
            type="password"
            placeholder="8~16位字符，至少由大写字母、小写字母、数字、特殊字符任意两种组成"
          />
        </n-form-item>

        <n-form-item label="严格密码" prop="passwordStrict">
          <template #label>
            <span>严格密码</span>
            <span class="introduction"
              >8~16位字符，包含大写字母、小写字母、数字、特殊符等4种字符</span
            >
          </template>
          <n-input
            v-model="formData.passwordStrict"
            type="password"
            placeholder="至少8位，包含大写字母、小写字母、数字、特殊符等4种字符"
          />
        </n-form-item>

        <n-form-item label="证件号码" prop="certificate">
          <template #label>
            <span>证件号码</span>
            <span class="introduction">0~20位字符，由数字、英文字母组成</span>
          </template>
          <n-input
            v-model="formData.certificate"
            placeholder="0~20位字符，由数字、英文字母组成"
          />
        </n-form-item>

        <n-form-item label="身份证" prop="idCard">
          <template #label>
            <span>身份证</span>
            <span class="introduction">15位或18位身份证号</span>
          </template>
          <n-input
            v-model="formData.idCard"
            placeholder="请输入15位身份证号或18位身份证号"
          />
        </n-form-item>

        <n-form-item label="严格身份证" prop="idCardStrict">
          <template #label>
            <span>严格身份证</span>
            <span class="introduction">正确的15位或18位身份证号</span>
          </template>
          <n-input
            v-model="formData.idCardStrict"
            placeholder="请输入严格的身份证验证"
          />
        </n-form-item>

        <n-form-item label="护照" prop="passport">
          <template #label>
            <span>护照</span>
            <span class="introduction"
              >1位英文字母(E,G,D,S,P) + 8位阿拉伯数字</span
            >
          </template>
          <n-input v-model="formData.passport" placeholder="请输入护照" />
        </n-form-item>

        <n-form-item label="港澳通行证" prop="mainlandPassHM">
          <template #label>
            <span>港澳通行证</span>
            <span class="introduction"
              >旧版格式(2015:以前)：H,M +
              10位数字;新版格式(2016年以后):11位纯数字</span
            >
          </template>
          <n-input
            v-model="formData.mainlandPassHM"
            placeholder="港澳居民来往内地通行证"
          />
        </n-form-item>

        <n-form-item label="台湾通行证" prop="mainlandPassTW">
          <template #label>
            <span>台湾通行证</span>
            <span class="introduction"
              >旧版格式(2015:以前)：8位数字;新版格式(2015年以后):1位字母 +
              7位数字</span
            >
          </template>
          <n-input
            v-model="formData.mainlandPassTW"
            placeholder="台湾居民来往内地通行证"
          />
        </n-form-item>

        <n-form-item label="电话号码" prop="phone">
          <template #label>
            <span>电话号码</span>
            <span class="introduction">手机号或电话号码</span>
          </template>
          <n-input v-model="formData.phone" placeholder="请输入手机号" />
        </n-form-item>

        <n-form-item label="固定电话" prop="telephone">
          <template #label>
            <span>固定电话</span>
            <span class="introduction">中国大陆的固定电话/400号码</span>
          </template>
          <n-input v-model="formData.telephone" placeholder="请输入固定电话" />
        </n-form-item>

        <n-form-item label="手机号码" prop="mobilePhone">
          <template #label>
            <span>手机号</span>
            <span class="introduction">中国大陆的手机号码</span>
          </template>
          <n-input
            v-model="formData.mobilePhone"
            placeholder="请输入手机号码"
          />
        </n-form-item>

        <n-form-item label="邮箱" prop="email">
          <n-input v-model="formData.email" placeholder="请输入邮箱地址" />
        </n-form-item>

        <n-form-item label="邮政编码" prop="postalCode">
          <template #label>
            <span>邮政编码</span>
            <span class="introduction">6位数字</span>
          </template>
          <n-input v-model="formData.postalCode" placeholder="请输入邮政编码" />
        </n-form-item>

        <n-form-item label="QQ号" prop="qq">
          <n-input v-model="formData.qq" placeholder="请输入QQ号" />
        </n-form-item>
      </div>

      <h2>网络相关验证</h2>
      <div class="form-grid-wrap">
        <!-- 网络相关验证 -->
        <n-form-item label="URL" prop="url">
          <n-input v-model="formData.url" placeholder="请输入URL地址" />
        </n-form-item>
        <n-form-item label="IPv4" prop="ipv4">
          <template #label>
            <span>IPv4</span>
            <span class="introduction">例如 127.0.0.1</span>
          </template>
          <n-input v-model="formData.ipv4" placeholder="请输入IPv4地址" />
        </n-form-item>

        <n-form-item label="IPv6" prop="ipv6">
          <template #label>
            <span>IPv6</span>
            <span class="introduction"
              >例如 2001:0db8:85a3:0000:0000:8a2e:0370:7334</span
            >
          </template>
          <n-input v-model="formData.ipv6" placeholder="请输入IPv6地址" />
        </n-form-item>

        <n-form-item label="端口号" prop="port">
          <template #label>
            <span>端口号</span>
            <span class="introduction">0~65535</span>
          </template>
          <n-input
            v-model="formData.port"
            placeholder="请输入端口号(0-65535)"
          />
        </n-form-item>

        <n-form-item label="mac地址" prop="mac">
          <template #label>
            <span>mac地址</span>
            <span class="introduction">例如 01:23:45:67:89:ab</span>
          </template>
          <n-input v-model="formData.mac" placeholder="请输入mac地址" />
        </n-form-item>

        <n-form-item label="Base64" prop="base64">
          <template #label>
            <span>Base64</span>
            <span class="introduction">例如 SGVsbG8gV29ybGQ= </span>
          </template>
          <n-input v-model="formData.base64" placeholder="请输入Base64编码" />
        </n-form-item>

        <n-form-item label="Base64Image" prop="base64Image">
          <n-input
            v-model="formData.base64Image"
            placeholder="请输入Base64Image编码"
          />
        </n-form-item>
      </div>

      <h2>金融验证</h2>
      <div class="form-grid-wrap">
        <!-- 金融验证 -->
        <n-form-item label="卡号" prop="cardNum">
          <template #label>
            <span>卡号</span>
            <span class="introduction">8~18个字符，数字、大写字母的组合</span>
          </template>
          <n-input v-model="formData.cardNum" placeholder="请输入卡号" />
        </n-form-item>

        <n-form-item label="银行卡号" prop="bankCardNum">
          <template #label>
            <span>银行卡号</span>
            <span class="introduction">15位到19位的数字</span>
          </template>
          <n-input
            v-model="formData.bankCardNum"
            placeholder="请输入银行卡号"
          />
        </n-form-item>

        <n-form-item label="严格银行卡" prop="bankCardNumStrict">
          <n-input
            v-model="formData.bankCardNumStrict"
            placeholder="请输入银行卡号(严格)"
          />
        </n-form-item>

        <n-form-item label="企业税号" prop="enterpriseTaxNumber">
          <template #label>
            <span>企业税号</span>
            <span class="introduction">15位/18位/20位的数字/字母组合</span>
          </template>
          <n-input
            v-model="formData.enterpriseTaxNumber"
            placeholder="请输入企业税号"
          />
        </n-form-item>
      </div>

      <h2>文件类型验证</h2>
      <div class="form-grid-wrap">
        <!-- 文件类型验证 -->
        <n-form-item label="文件类型" prop="fileType">
          <n-input
            v-model="formData.fileType"
            placeholder="请输入文件类型，如: jpg,png"
          />
        </n-form-item>

        <n-form-item label="图片文件" prop="image">
          <n-input v-model="formData.image" placeholder="图片文件验证" />
        </n-form-item>

        <n-form-item label="音频文件" prop="audio">
          <n-input v-model="formData.audio" placeholder="音频文件验证" />
        </n-form-item>

        <n-form-item label="视频文件" prop="video">
          <n-input v-model="formData.video" placeholder="视频文件验证" />
        </n-form-item>

        <n-form-item label="Word文档" prop="word">
          <n-input v-model="formData.word" placeholder="Word文档验证" />
        </n-form-item>

        <n-form-item label="Excel表格" prop="excel">
          <n-input v-model="formData.excel" placeholder="Excel表格验证" />
        </n-form-item>

        <n-form-item label="PPT文件" prop="ppt">
          <n-input v-model="formData.ppt" placeholder="PPT文件验证" />
        </n-form-item>

        <n-form-item label="PDF文件" prop="pdf">
          <n-input v-model="formData.pdf" placeholder="PDF文件验证" />
        </n-form-item>

        <n-form-item label="文本文件" prop="txt">
          <n-input v-model="formData.txt" placeholder="文本文件验证" />
        </n-form-item>

        <n-form-item label="Markdown文件" prop="markdown">
          <n-input v-model="formData.markdown" placeholder="Markdown文件验证" />
        </n-form-item>

        <n-form-item label="压缩文件" prop="archive">
          <n-input v-model="formData.archive" placeholder="压缩文件验证" />
        </n-form-item>
      </div>

      <h2>地理位置验证</h2>
      <div class="form-grid-wrap">
        <!-- 地理位置验证 -->
        <n-form-item label="经度" prop="longitude">
          <n-input
            v-model="formData.longitude"
            placeholder="请输入经度(-180~180)"
          />
        </n-form-item>

        <n-form-item label="纬度" prop="latitude">
          <n-input
            v-model="formData.latitude"
            placeholder="请输入纬度(-90~90)"
          />
        </n-form-item>

        <n-form-item label="海拔高度" prop="altitude">
          <n-input v-model="formData.altitude" placeholder="请输入海拔高度" />
        </n-form-item>

        <n-form-item label="角度" prop="angle">
          <n-input v-model="formData.angle" placeholder="请输入角度(0~360)" />
        </n-form-item>
      </div>

      <h2>颜色值验证</h2>
      <div class="form-grid-wrap">
        <!-- 颜色值验证 -->
        <n-form-item label="HEX颜色" prop="colorHex">
          <n-input v-model="formData.colorHex" placeholder="#FF0000" />
        </n-form-item>

        <n-form-item label="RGB颜色" prop="colorRgb">
          <n-input v-model="formData.colorRgb" placeholder="rgb(255,0,0)" />
        </n-form-item>

        <n-form-item label="RGBA颜色" prop="colorRgba">
          <n-input
            v-model="formData.colorRgba"
            placeholder="rgba(255,0,0,0.5)"
          />
        </n-form-item>
      </div>

      <h2>日期时间验证</h2>
      <div class="form-grid-wrap">
        <!-- 日期时间验证 -->
        <n-form-item label="日期有效性" prop="dateValid">
          <n-date-picker
            v-model="formData.dateValid"
            type="date"
            placeholder="选择有效日期"
            value-format="YYYY-MM-DD"
          />
        </n-form-item>

        <n-form-item label="日期时间" prop="datetime">
          <n-date-picker
            v-model="formData.datetime"
            type="datetime"
            placeholder="选择日期时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </n-form-item>

        <n-form-item label="过去日期时间" prop="datetimePast">
          <n-date-picker
            v-model="formData.datetimePast"
            type="datetime"
            placeholder="选择过去的日期时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </n-form-item>

        <n-form-item label="时间范围" prop="datetimeRange">
          <n-date-picker
            v-model="formData.datetimeRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </n-form-item>

        <n-form-item label="过去时间范围" prop="datetimeRangePast">
          <n-date-picker
            v-model="formData.datetimeRangePast"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </n-form-item>

        <n-form-item label="ISO日期" prop="dateISO">
          <n-input v-model="formData.dateISO" placeholder="YYYY-MM-DD" />
        </n-form-item>
      </div>

      <h2>设备相关验证</h2>
      <div class="form-grid-wrap">
        <!-- 设备相关验证 -->
        <n-form-item label="设备类型" prop="deviceType">
          <template #label>
            <span>设备类型</span>
            <span class="introduction"
              >只能用字母、数字、汉字、小数点、下划线、连接符、括号</span
            >
          </template>
          <n-input
            v-model="formData.deviceType"
            placeholder="只能用字母、数字、汉字、小数点、下划线、连接符、括号"
          />
        </n-form-item>

        <n-form-item label="设备编码" prop="deviceCode">
          <template #label>
            <span>设备编码</span>
            <span class="introduction"
              >只能用字母、数字、汉字、小数点、下划线、连接符、括号</span
            >
          </template>
          <n-input
            v-model="formData.deviceCode"
            placeholder="只能用字母、数字、汉字、小数点、下划线、连接符"
          />
        </n-form-item>

        <n-form-item label="设备用户名" prop="deviceUserName">
          <template #label>
            <span>设备用户名</span>
            <span class="introduction"
              >只能用字母、数字、汉字、小数点、下划线、连接符</span
            >
          </template>
          <n-input
            v-model="formData.deviceUserName"
            placeholder="只能用字母、数字、汉字、小数点、下划线、连接符"
          />
        </n-form-item>

        <n-form-item label="设备账号" prop="deviceAccount">
          <template #label>
            <span>设备账号</span>
            <span class="introduction"
              >只能用字母、数字、汉字、小数点、下划线、连接符</span
            >
          </template>
          <n-input
            v-model="formData.deviceAccount"
            placeholder="1-32位字符，只能用字母、数字和除冒号、反斜杠、双引号之外的特殊字符"
          />
        </n-form-item>
      </div>

      <n-button type="primary" @click="handleSubmit">提交测试</n-button>
      <n-button @click="handleReset">重置</n-button>
    </n-form>
  </div>
</template>

<style scoped>
.form-grid-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
}

.introduction {
  margin-left: 8px;
  font-weight: 400;
  color: #7d7d7d;
}
</style>
