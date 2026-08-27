# Dreamboard v14 — временный preview (mobile UX QA)

⚠️ **Временный preview для ручной проверки.** Точная копия ветки
`feat/v14-mobile-ux-polish` исходного репозитория Kseles-content/dreamboard
в момент **source commit `3298f331554ab687835c88aa7595c005ab506755`**
(mobile UX polish — hotfix после релиза v14: нейтральная delete-кнопка
(красный только на hover/focus-visible/active), полноэкранный просмотр цели
(expand-кнопка + desktop dblclick), manifestation 100dvh + safe-area,
сверхнизкий landscape breakpoint
`@media (orientation: landscape) and (max-height: 500px)` со scroll).

- Rollback-точка: `90a8051772c109d411a201a643d3e8e49e12cb48`
  (v14-reliability @ `2c23ae7de0cd755365237a63d7b87df598e9d91e`)
- Production (https://kseles-content.github.io/dreamboard/) **не изменён**
- PR #32 (`feat/v14-mobile-ux-polish` → `v14-reliability`) **не merge**
- Этот репозиторий будет архивирован/удалён после ручного QA
- Исходный код: https://github.com/Kseles-content/dreamboard
