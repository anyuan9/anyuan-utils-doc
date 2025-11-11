<script setup lang="ts">
import { ref } from "vue";
import { arrayContainsAll } from "@anyuan/utils";

const arrayContainsAllData = ref([
  { label: "完全包含", parent: [1, 2, 3, 4, 5], child: [2, 3, 4] },
  { label: "不包含", parent: [1, 2, 3, 4, 5], child: [2, 3, 6] },
  { label: "空子数组", parent: [1, 2, 3], child: [] },
  { label: "相同数组", parent: [1, 2, 3], child: [1, 2, 3] }
]);
</script>

<template>
  <naive-theme>
    <div
      v-for="(item, index) in arrayContainsAllData"
      :key="index"
      className="flex flex-col justify-center mt-2"
    >
      <div>
        <span className="font-bold">{{ item.label }}</span>
        <span className="ml-2">
          arrayContainsAll({{ JSON.stringify(item.parent) }},
          {{ JSON.stringify(item.child) }})
        </span>
      </div>
      <n-gradient-text type="info">
        //
        {{ arrayContainsAll(item.parent, item.child) }}
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
