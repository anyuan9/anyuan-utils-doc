<script setup lang="ts">
import { ref } from "vue";
import { Events } from "@anyuan/utils";

// 创建Events实例
const eventBus = new Events();

// 用于存储测试结果的响应式数据
const eventResults = ref<
  Array<{ label: string; operation: string; result: any }>
>([]);

// 测试用的回调函数
const testCallback1 = (data?: any) => {
  const result = `回调1被调用${data ? `，数据: ${JSON.stringify(data)}` : ""}`;
  eventResults.value.push({
    label: "回调执行",
    operation: `testCallback1${data ? `(${JSON.stringify(data)})` : "()"}`,
    result
  });
  return result;
};

const testCallback2 = (data?: any) => {
  const result = `回调2被调用${data ? `，数据: ${JSON.stringify(data)}` : ""}`;
  eventResults.value.push({
    label: "回调执行",
    operation: `testCallback2${data ? `(${JSON.stringify(data)})` : "()"}`,
    result
  });
  return result;
};

const testCallback3 = (data?: any) => {
  const result = `回调3被调用${data ? `，数据: ${JSON.stringify(data)}` : ""}`;
  eventResults.value.push({
    label: "回调执行",
    operation: `testCallback3${data ? `(${JSON.stringify(data)})` : "()"}`,
    result
  });
  return result;
};

// $on 测试用例
const testOn = () => {
  eventResults.value = [];
  eventResults.value.push({
    label: "$on - 注册单个事件",
    operation: 'eventBus.$on("testEvent", testCallback1)',
    result: "事件注册成功"
  });
  eventBus.$on("testEvent", testCallback1);

  eventResults.value.push({
    label: "$on - 注册多个事件",
    operation: 'eventBus.$on(["event1", "event2"], testCallback2)',
    result: "多个事件注册成功"
  });
  eventBus.$on(["event1", "event2"], testCallback2);
};

// $once 测试用例
const testOnce = () => {
  eventResults.value = [];
  eventResults.value.push({
    label: "$once - 注册一次性事件",
    operation: 'eventBus.$once("onceEvent", testCallback3)',
    result: "一次性事件注册成功"
  });
  eventBus.$once("onceEvent", testCallback3);
};

// $emit 测试用例
const testEmit = () => {
  eventResults.value = [];
  const result1 = eventBus.$emit("testEvent", { message: "Hello World" });
  eventResults.value.push({
    label: "$emit - 触发事件(有监听)",
    operation: 'eventBus.$emit("testEvent", { message: "Hello World" })',
    result: result1
  });

  const result2 = eventBus.$emit("nonexistentEvent");
  eventResults.value.push({
    label: "$emit - 触发事件(无监听)",
    operation: 'eventBus.$emit("nonexistentEvent")',
    result: result2
  });

  // 触发一次性事件
  const result3 = eventBus.$emit("onceEvent", { data: "一次性数据" });
  eventResults.value.push({
    label: "$emit - 触发一次性事件",
    operation: 'eventBus.$emit("onceEvent", { data: "一次性数据" })',
    result: result3
  });

  // 再次触发一次性事件（应该不存在了）
  const result4 = eventBus.$emit("onceEvent");
  eventResults.value.push({
    label: "$emit - 再次触发一次性事件",
    operation: 'eventBus.$emit("onceEvent")',
    result: result4
  });

  // 触发多个事件
  eventBus.$emit("event1", { type: "event1" });
  eventBus.$emit("event2", { type: "event2" });
};

// $off 测试用例
const testOff = () => {
  eventResults.value = [];

  // 移除特定回调
  eventResults.value.push({
    label: "$off - 移除特定回调",
    operation: 'eventBus.$off("testEvent", testCallback1)',
    result: "回调移除成功"
  });
  eventBus.$off("testEvent", testCallback1);

  // 触发事件验证移除结果
  const result = eventBus.$emit("testEvent");
  eventResults.value.push({
    label: "$off - 验证移除结果",
    operation: 'eventBus.$emit("testEvent")',
    result: result
  });
};

// $off 所有事件测试用例
const testOffAll = () => {
  eventResults.value = [];

  // 注册一些测试事件
  eventBus.$on("cleanupEvent1", testCallback1);
  eventBus.$on("cleanupEvent2", testCallback2);

  eventResults.value.push({
    label: "$off - 移除所有事件",
    operation: "eventBus.$off()",
    result: "所有事件清除成功"
  });
  eventBus.$off();

  // 验证所有事件都被清除
  const result1 = eventBus.$emit("cleanupEvent1");
  const result2 = eventBus.$emit("cleanupEvent2");
  const result3 = eventBus.$emit("event1");
  const result4 = eventBus.$emit("event2");

  eventResults.value.push({
    label: "$off - 验证cleanupEvent1",
    operation: 'eventBus.$emit("cleanupEvent1")',
    result: result1
  });
  eventResults.value.push({
    label: "$off - 验证cleanupEvent2",
    operation: 'eventBus.$emit("cleanupEvent2")',
    result: result2
  });
  eventResults.value.push({
    label: "$off - 验证event1",
    operation: 'eventBus.$emit("event1")',
    result: result3
  });
  eventResults.value.push({
    label: "$off - 验证event2",
    operation: 'eventBus.$emit("event2")',
    result: result4
  });
};

// 复杂场景测试
const testComplexScenario = () => {
  eventResults.value = [];

  // 重新设置事件总线
  const newEventBus = new Events();

  // 测试多个回调函数
  const callbackA = () =>
    eventResults.value.push({
      label: "复杂场景",
      operation: "callbackA()",
      result: "回调A执行"
    });
  const callbackB = (data: any) =>
    eventResults.value.push({
      label: "复杂场景",
      operation: `callbackB(${JSON.stringify(data)})`,
      result: "回调B执行"
    });

  newEventBus.$on("complexEvent", callbackA);
  newEventBus.$on("complexEvent", callbackB);

  eventResults.value.push({
    label: "复杂场景 - 注册多个回调",
    operation: "注册2个回调到complexEvent",
    result: "注册成功"
  });

  // 触发事件
  newEventBus.$emit("complexEvent", { value: 42 });

  // 移除一个回调
  newEventBus.$off("complexEvent", callbackA);
  eventResults.value.push({
    label: "复杂场景 - 移除一个回调",
    operation: "移除callbackA",
    result: "移除成功"
  });

  // 再次触发
  newEventBus.$emit("complexEvent", { value: 100 });

  // 移除所有
  newEventBus.$off();
  eventResults.value.push({
    label: "复杂场景 - 清除所有",
    operation: "清除所有事件",
    result: "清除成功"
  });
};
</script>

<template>
  <naive-theme>
    <div style="margin-bottom: 20px">
      <n-button @click="testOn" style="margin-right: 10px">测试 $on</n-button>
      <n-button @click="testOnce" style="margin-right: 10px"
        >测试 $once</n-button
      >
      <n-button @click="testEmit" style="margin-right: 10px"
        >测试 $emit</n-button
      >
      <n-button @click="testOff" style="margin-right: 10px">测试 $off</n-button>
      <n-button @click="testOffAll" style="margin-right: 10px">
        测试 $off 所有
      </n-button>
      <n-button @click="testComplexScenario">测试复杂场景</n-button>
    </div>

    <div
      v-for="(item, index) in eventResults"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2"> </span>
      </div>
      <div>
        {{ item.operation }}
        <n-gradient-text type="info">
          //
          {{
            typeof item.result === "boolean"
              ? item.result
              : JSON.stringify(item.result)
          }}
        </n-gradient-text>
      </div>
    </div>
  </naive-theme>
</template>
