<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// video 测试数据
const videoRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
videoRes.value = [
  { label: "mp4文件", value: "movie.mp4", expected: true },
  { label: "avi文件", value: "video.avi", expected: true },
  { label: "mov文件", value: "clip.mov", expected: true },
  { label: "wmv文件", value: "film.wmv", expected: true },
  { label: "flv文件", value: "flash.flv", expected: true },
  { label: "mkv文件", value: "matroska.mkv", expected: true },
  { label: "webm文件", value: "webvideo.webm", expected: true },
  { label: "m4v文件", value: "itunes.m4v", expected: true },
  { label: "mpg文件", value: "mpeg.mpg", expected: true },
  { label: "mpeg文件", value: "video.mpeg", expected: true },
  { label: "3gp文件", value: "mobile.3gp", expected: true },
  { label: "ts文件", value: "transport.ts", expected: true },
  { label: "mts文件", value: "avchd.mts", expected: true },
  { label: "vob文件", value: "dvd.vob", expected: true },
  { label: "rm文件", value: "realmedia.rm", expected: true },
  { label: "rmvb文件", value: "realvideo.rmvb", expected: true },
  { label: "asf文件", value: "windows.asf", expected: true },
  { label: "divx文件", value: "divx.divx", expected: true },
  { label: "ogv文件", value: "oggvideo.ogv", expected: true },
  { label: "大写扩展名", value: "MOVIE.MP4", expected: true },
  { label: "混合大小写", value: "Movie.Mp4", expected: true },
  { label: "文件后缀", value: ".mp4", expected: true },
  { label: "音频文件", value: "audio.mp3", expected: false },
  { label: "无扩展名", value: "video", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in videoRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.video.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.video.test(item.value) }}, 结果:
          {{ regExp.video.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
