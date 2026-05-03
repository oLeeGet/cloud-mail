<template>
  <!-- 更新 el-config-provider 的 locale 判斷 -->
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { watch, computed } from "vue"; // 引入 computed
import { useSettingStore } from "@/store/setting.js";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import zhTw from 'element-plus/es/locale/lang/zh-tw'; // 引入 Element Plus 繁體語言包
import '@/icons/index.js'

const settingStore = useSettingStore();
const { locale } = useI18n();

// 動態計算 Element Plus 的語系
const elLocale = computed(() => {
  if (settingStore.lang === 'tw') return zhTw;
  if (settingStore.lang === 'zh') return zhCn;
  return null; // 預設英文
});

// 初始化邏輯優化
// 如果 store 裡面是空的（第一次訪問），嘗試讀取 i18n 的自動偵測值
if (!settingStore.lang) {
  settingStore.lang = locale.value;
} else {
  locale.value = settingStore.lang;
}

watch(() => settingStore.lang, () => {
  locale.value = settingStore.lang;
});
</script>
