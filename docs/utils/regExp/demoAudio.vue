<script setup lang="ts">
import { ref } from "vue";
import { regExp } from "@anyuan/utils";

// audio 测试数据
const audioRes = ref<
  Array<{ label: string; value: string; expected: boolean }>
>([]);
audioRes.value = [
  { label: "mp3文件", value: "song.mp3", expected: true },
  { label: "wav文件", value: "sound.wav", expected: true },
  { label: "flac文件", value: "audio.flac", expected: true },
  { label: "aac文件", value: "music.aac", expected: true },
  { label: "ogg文件", value: "voice.ogg", expected: true },
  { label: "wma文件", value: "track.wma", expected: true },
  { label: "m4a文件", value: "podcast.m4a", expected: true },
  { label: "aiff文件", value: "sample.aiff", expected: true },
  { label: "ape文件", value: "lossless.ape", expected: true },
  { label: "opus文件", value: "audio.opus", expected: true },
  { label: "amr文件", value: "recording.amr", expected: true },
  { label: "mid文件", value: "midi.mid", expected: true },
  { label: "midi文件", value: "music.midi", expected: true },
  { label: "ac3文件", value: "dolby.ac3", expected: true },
  { label: "dts文件", value: "surround.dts", expected: true },
  { label: "大写扩展名", value: "SONG.MP3", expected: true },
  { label: "混合大小写", value: "Song.Mp3", expected: true },
  { label: "文件后缀", value: ".mp3", expected: true },
  { label: "视频文件", value: "video.mp4", expected: false },
  { label: "无扩展名", value: "audio", expected: false }
];
</script>

<template>
  <naive-theme>
    <div className="flex flex-col justify-center mt-2">
      <n-gradient-text
        v-for="(item, index) in audioRes"
        :key="index"
        type="info"
      >
        <div>
          <span className="font-bold">{{ item.label }}</span>
          <span className="ml-2"> regExp.audio.test("{{ item.value }}")</span>
        </div>
        <n-gradient-text type="info">
          // 预期: {{ item.expected }}, 实际:
          {{ regExp.audio.test(item.value) }}, 结果:
          {{ regExp.audio.test(item.value) === item.expected ? "✓" : "✗" }}
        </n-gradient-text>
      </n-gradient-text>
    </div>
  </naive-theme>
</template>
