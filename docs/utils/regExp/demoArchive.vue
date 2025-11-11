<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// archive 测试数据
const archiveRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
archiveRes.value = [
  { label: "zip文件", value: "archive.zip", expected: true },
  { label: "rar文件", value: "compressed.rar", expected: true },
  { label: "7z文件", value: "package.7z", expected: true },
  { label: "tar文件", value: "backup.tar", expected: true },
  { label: "gz文件", value: "data.gz", expected: true },
  { label: "bz2文件", value: "file.bz2", expected: true },
  { label: "xz文件", value: "archive.xz", expected: true },
  { label: "tar.gz文件", value: "source.tar.gz", expected: true },
  { label: "tar.bz2文件", value: "backup.tar.bz2", expected: true },
  { label: "tar.xz文件", value: "data.tar.xz", expected: true },
  { label: "tgz文件", value: "package.tgz", expected: true },
  { label: "tbz2文件", value: "archive.tbz2", expected: true },
  { label: "txz文件", value: "compressed.txz", expected: true },
  { label: "jar文件", value: "library.jar", expected: true },
  { label: "war文件", value: "webapp.war", expected: true },
  { label: "ear文件", value: "enterprise.ear", expected: true },
  { label: "cab文件", value: "windows.cab", expected: true },
  { label: "iso文件", value: "image.iso", expected: true },
  { label: "deb文件", value: "debian.deb", expected: true },
  { label: "rpm文件", value: "redhat.rpm", expected: true },
  { label: "apk文件", value: "android.apk", expected: true },
  { label: "dmg文件", value: "mac.dmg", expected: true },
  { label: "pkg文件", value: "installer.pkg", expected: true },
  { label: "msi文件", value: "windows.msi", expected: true },
  { label: "exe文件", value: "setup.exe", expected: true },
  { label: "大写扩展名", value: "ARCHIVE.ZIP", expected: true },
  { label: "混合大小写", value: "Archive.ZiP", expected: true },
  { label: "文件后缀", value: ".zip", expected: true },
  { label: "非压缩文件", value: "document.pdf", expected: false },
  { label: "无扩展名", value: "archive", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in archiveRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.archive.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.archive.test(item.value) }}, 结果:
          {{ regExp.archive.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
