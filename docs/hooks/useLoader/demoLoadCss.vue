<script setup lang="ts">
import { useLoader } from "@anyuan/utils";
import { useMessage } from "../../components/message";

const { loadCss, removeCss } = useLoader();
const { message } = useMessage();

/** --------------- loadCss --------------- */
function loadLink1() {
  /** 动态加载单个link标签 */
  loadCss({
    src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadLink1 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadLink1 failed", err);
    });
}

function loadLink2() {
  /** 动态加载多个link标签（会按照传入src的先后顺序加载） */
  loadCss({
    src: [
      "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
      "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
      "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css"
    ]
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadLink2 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadLink2 failed", err);
    });
}

function loadLink3() {
  /** 不同link标签可插入相同元素中 */
  loadCss({
    src: [
      "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
      "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
      "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css"
    ],
    element: "head" // "body"
  })
    .then(() => {
      // 加载成功要做的事
      message.success("loadLink3 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadLink3 failed", err);
    });
}

function loadLink4() {
  /** 不同link标签可插入不同元素中 */
  loadCss([
    {
      src: "https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
      element: "head"
    },
    {
      src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css",
      element: "head"
    },
    {
      src: "https://cdn.bootcdn.net/ajax/libs/hint.css/2.7.0/hint.min.css",
      element: "body"
    }
  ])
    .then(() => {
      // 加载成功要做的事
      message.success("loadLink4 success");
    })
    .catch(err => {
      // 加载失败要做的事
      message.warning("loadLink4 failed", err);
    });
}

function removeLink() {
  removeCss({
    src: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
  })
    .then(() => {
      // 卸载成功要做的事
      message.success("removeLink success");
    })
    .catch(err => {
      // 卸载失败要做的事
      message.warning("removeLink failed", err);
    });
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2 flex items-center">
      <n-button @click="loadLink1">动态加载单个link标签</n-button>
      <n-button @click="loadLink2">动态加载多个link标签</n-button>
      <n-button @click="loadLink3">不同link标签可插入相同元素中</n-button>
      <n-button @click="loadLink4">不同link标签可插入不同元素中</n-button>
    </n-space>
    <n-space className="mt-2 flex items-center">
      <n-button @click="removeLink">动态卸载link标签</n-button>
    </n-space>
  </naive-theme>
</template>
