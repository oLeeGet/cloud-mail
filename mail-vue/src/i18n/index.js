import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';
import tw from './zh-TW.js';

// 定義偵測邏輯
const getBrowserLanguage = () => {
    const lang = navigator.language.toLowerCase();
    
    // 如果是台灣或香港，返回繁體
    if (lang.includes('tw') || lang.includes('hk')) {
        return 'tw';
    }
    // 如果是其他中文（如 zh-CN），返回簡體
    if (lang.startsWith('zh')) {
        return 'zh';
    }
    // 其餘預設英文
    return 'en';
};

const i18n = createI18n({
    legacy: false,
    locale: getBrowserLanguage(), // 自動套用偵測結果
    fallbackLocale: 'en',
    messages: {
        zh,
        en,
        tw
    },
});

export default i18n;
