<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLocalStorage, getSessionStorage } from "@anyuan/utils";

// 获取存储实例
const localStorage = getLocalStorage();
const sessionStorage = getSessionStorage();

// setItem 测试数据
const setItemRes = ref<
  Array<{
    label: string;
    storageType: string;
    key: string;
    value: any;
    result?: string;
  }>
>([]);

// getItem 测试数据
const getItemRes = ref<
  Array<{
    label: string;
    storageType: string;
    key: string;
    result?: any;
  }>
>([]);

// removeItem 测试数据
const removeItemRes = ref<
  Array<{
    label: string;
    storageType: string;
    key: string;
    result?: string;
  }>
>([]);

// clear 测试数据
const clearRes = ref<
  Array<{
    label: string;
    storageType: string;
    result?: string;
  }>
>([]);

// 初始化测试数据
onMounted(() => {
  initializeTestData();
});

const initializeTestData = () => {
  // 先清理可能存在的测试数据
  localStorage.removeItem("test_string");
  localStorage.removeItem("test_number");
  localStorage.removeItem("test_object");
  localStorage.removeItem("test_array");
  localStorage.removeItem("test_boolean");
  localStorage.removeItem("test_null");
  localStorage.removeItem("test_nonexistent");

  sessionStorage.removeItem("test_string");
  sessionStorage.removeItem("test_number");
  sessionStorage.removeItem("test_object");
  sessionStorage.removeItem("test_array");
  sessionStorage.removeItem("test_boolean");
  sessionStorage.removeItem("test_null");
  sessionStorage.removeItem("test_nonexistent");

  // setItem 测试用例
  setItemRes.value = [
    {
      label: "字符串值",
      storageType: "localStorage",
      key: "test_string",
      value: "Hello World"
    },
    {
      label: "数字值",
      storageType: "localStorage",
      key: "test_number",
      value: 12345
    },
    {
      label: "对象值",
      storageType: "localStorage",
      key: "test_object",
      value: { name: "John", age: 30, city: "New York" }
    },
    {
      label: "数组值",
      storageType: "localStorage",
      key: "test_array",
      value: [1, "two", true, { key: "value" }]
    },
    {
      label: "布尔值",
      storageType: "localStorage",
      key: "test_boolean",
      value: true
    },
    {
      label: "null值",
      storageType: "localStorage",
      key: "test_null",
      value: null
    },
    {
      label: "sessionStorage字符串",
      storageType: "sessionStorage",
      key: "test_string",
      value: "Session Data"
    },
    {
      label: "sessionStorage对象",
      storageType: "sessionStorage",
      key: "test_object",
      value: { session: "data", timestamp: Date.now() }
    },
    {
      label: "空字符串键",
      storageType: "localStorage",
      key: "",
      value: "empty key test"
    },
    {
      label: "特殊字符键",
      storageType: "localStorage",
      key: "test-key@123",
      value: "special key test"
    }
  ];

  // getItem 测试用例
  getItemRes.value = [
    {
      label: "获取字符串",
      storageType: "localStorage",
      key: "test_string"
    },
    {
      label: "获取数字",
      storageType: "localStorage",
      key: "test_number"
    },
    {
      label: "获取对象",
      storageType: "localStorage",
      key: "test_object"
    },
    {
      label: "获取数组",
      storageType: "localStorage",
      key: "test_array"
    },
    {
      label: "获取布尔值",
      storageType: "localStorage",
      key: "test_boolean"
    },
    {
      label: "获取null值",
      storageType: "localStorage",
      key: "test_null"
    },
    {
      label: "获取不存在的键",
      storageType: "localStorage",
      key: "test_nonexistent"
    },
    {
      label: "sessionStorage获取",
      storageType: "sessionStorage",
      key: "test_string"
    },
    {
      label: "空键获取",
      storageType: "localStorage",
      key: ""
    },
    {
      label: "特殊字符键获取",
      storageType: "localStorage",
      key: "test-key@123"
    }
  ];

  // removeItem 测试用例
  removeItemRes.value = [
    {
      label: "删除字符串",
      storageType: "localStorage",
      key: "test_string"
    },
    {
      label: "删除对象",
      storageType: "localStorage",
      key: "test_object"
    },
    {
      label: "删除不存在的键",
      storageType: "localStorage",
      key: "test_nonexistent"
    },
    {
      label: "sessionStorage删除",
      storageType: "sessionStorage",
      key: "test_string"
    },
    {
      label: "删除空键",
      storageType: "localStorage",
      key: ""
    }
  ];

  // clear 测试用例
  clearRes.value = [
    {
      label: "清空localStorage",
      storageType: "localStorage"
    },
    {
      label: "清空sessionStorage",
      storageType: "sessionStorage"
    }
  ];
};

// 执行setItem测试
const executeSetItemTest = (item: any) => {
  try {
    const storage =
      item.storageType === "localStorage" ? localStorage : sessionStorage;
    storage.setItem(item.key, item.value);
    item.result = "设置成功";
  } catch (error) {
    item.result = `设置失败: ${error}`;
  }
};

// 执行getItem测试
const executeGetItemTest = (item: any) => {
  try {
    const storage =
      item.storageType === "localStorage" ? localStorage : sessionStorage;
    const result = storage.getItem(item.key);
    item.result = JSON.stringify(result);
  } catch (error) {
    item.result = `获取失败: ${error}`;
  }
};

// 执行removeItem测试
const executeRemoveItemTest = (item: any) => {
  try {
    const storage =
      item.storageType === "localStorage" ? localStorage : sessionStorage;
    storage.removeItem(item.key);
    item.result = "删除成功";
  } catch (error) {
    item.result = `删除失败: ${error}`;
  }
};

// 执行clear测试
const executeClearTest = (item: any) => {
  try {
    const storage =
      item.storageType === "localStorage" ? localStorage : sessionStorage;
    storage.clear();
    item.result = "清空成功";
  } catch (error) {
    item.result = `清空失败: ${error}`;
  }
};

// 批量执行测试
const runAllTests = () => {
  // 先执行setItem测试
  setItemRes.value.forEach(item => {
    executeSetItemTest(item);
  });

  // 然后执行getItem测试
  setTimeout(() => {
    getItemRes.value.forEach(item => {
      executeGetItemTest(item);
    });

    // 接着执行removeItem测试
    setTimeout(() => {
      removeItemRes.value.forEach(item => {
        executeRemoveItemTest(item);
      });

      // 最后执行clear测试
      setTimeout(() => {
        clearRes.value.forEach(item => {
          executeClearTest(item);
        });
      }, 100);
    }, 100);
  }, 100);
};
</script>

<template>
  <naive-theme>
    <div>
      <n-button @click="runAllTests" style="margin-bottom: 20px">
        执行所有测试
      </n-button>
      <n-button
        @click="initializeTestData"
        style="margin-bottom: 20px; margin-left: 10px"
      >
        重置测试数据
      </n-button>
    </div>

    <h2>setItem - 设置存储项</h2>
    <div
      v-for="(item, index) in setItemRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        {{ item.storageType }}
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          {{
            item.storageType === "localStorage"
              ? "localStorage"
              : "sessionStorage"
          }}.setItem("{{ item.key }}", {{ JSON.stringify(item.value) }})
        </span>

        <n-button @click="executeSetItemTest(item)" style="margin-top: 5px">
          单独测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>

    <h2>getItem - 获取存储项</h2>
    <div
      v-for="(item, index) in getItemRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        {{ item.storageType }}
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          {{
            item.storageType === "localStorage"
              ? "localStorage"
              : "sessionStorage"
          }}.getItem("{{ item.key }}")
        </span>
        <n-button @click="executeGetItemTest(item)" style="margin-top: 5px">
          单独测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>

    <h2>removeItem - 删除存储项</h2>
    <div
      v-for="(item, index) in removeItemRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        {{ item.storageType }}
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          {{
            item.storageType === "localStorage"
              ? "localStorage"
              : "sessionStorage"
          }}.removeItem("{{ item.key }}")
        </span>
        <n-button @click="executeRemoveItemTest(item)" style="margin-top: 5px">
          单独测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>

    <h2>clear - 清空存储</h2>
    <div
      v-for="(item, index) in clearRes"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          {{
            item.storageType === "localStorage"
              ? "localStorage"
              : "sessionStorage"
          }}.clear()
        </span>
        <n-button @click="executeClearTest(item)" style="margin-top: 5px">
          单独测试
        </n-button>
      </div>
      <n-gradient-text type="info">
        // {{ item.result || "未执行" }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
