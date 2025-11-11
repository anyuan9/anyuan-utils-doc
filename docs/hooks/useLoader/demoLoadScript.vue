<script setup lang="ts">
import { useLoader } from "@anyuan/utils";
import { useMessage } from "../../components/message";

const { loadCss, removeCss, loadScript, removeScript } = useLoader();
const { message } = useMessage();

/** --------------- loadScript --------------- */
function loadScript1() {
  /** 动态加载单个script标签 */
  loadScript({
    src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadScript1 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadScript1 failed", err);
    });
}

function loadScript2() {
  /** 动态加载多个script标签（会按照传入src的先后顺序加载） */
  loadScript({
    src: [
      "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
      "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"
    ]
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadScript2 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadScript2 failed", err);
    });
}

function loadScript3() {
  /** 不同script标签可插入相同元素中 */
  loadScript({
    src: [
      "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
      "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"
    ],
    element: "body" // "head"
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadScript3 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadScript3 failed", err);
    });
}

function loadScript4() {
  /** 不同script标签可插入不同元素中 */
  loadScript([
    {
      src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js",
      element: "head"
    },
    {
      src: "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js",
      element: "body"
    }
  ])
    .then(() => {
      // 加载成功要做的事
      message.success("loadScript4 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadScript4 failed", err);
    });
}

function loadSource() {
  /** --------------- loadCss、loadScript 结合使用 --------------- */
  loadCss({
    src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
  })
    .then(() => {
      loadScript({
        src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
      })
        .then(() => {
          message.success("loadSource success");
        })
        .catch(err => {
          message.warning("loadScript failed", err);
        });
    })
    .catch(err => {
      message.warning("loadSource failed", err);
    });
}

function removeScript1() {
  removeScript({
    src: "https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js"
  })
    .then(() => {
      // 加载成功要做的事
      message.success("removeScript1 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("removeScript1 failed", err);
    });
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2 flex items-center">
      <n-button @click="loadScript1">动态加载单个script标签</n-button>
      <n-button @click="loadScript2">动态加载多个script标签</n-button>
      <n-button @click="loadScript3">不同script标签可插入相同元素中</n-button>
      <n-button @click="loadScript4">不同script标签可插入不同元素中</n-button>
    </n-space>
    <n-space className="mt-2 flex items-center">
      <n-button @click="loadSource">loadCss、loadScript 结合使用</n-button>
    </n-space>
    <n-space className="mt-2 flex items-center">
      <n-button @click="removeScript1">动态卸载script标签</n-button>
    </n-space>
  </naive-theme>
</template>
