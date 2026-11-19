# 自動測試

用無頭瀏覽器（Playwright + Chromium）模擬遊玩，檢查各功能不會報錯、關鍵流程能走完。

    node tests/run-all.js          # 全部
    node tests/run-all.js v21      # 只跑檔名含 v21 的
    HG_URL=https://yu-tinglu.github.io/harem-simulator/ node tests/run-all.js   # 測線上版本

- `t82.js`：基礎迴歸（畫面、字級、目標點擊、卡片高度）
- `v196`–`v214`：各版本新增功能（頭像、孕期陰謀、遊歷、結局、選項標籤、一鍵回報、跨世羈絆、十大抉擇、人物弧線、子嗣成長與母家、人物誌與音效）
- `sim1.js`：隨機操作機器人跑多局，檢查不會卡死或報錯，並統計結局分布

注意：這些是模擬測試，無法代表真機的觸控、剪貼簿、音訊或版面。
