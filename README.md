# 註冊用戶分析儀表板 (Users Dashboard)

以 [Next.js](https://nextjs.org) 建置的單頁式 **申込數・契約數預測分析** 網頁應用程式，用於視覺化與分析註冊（申込）與契約的月別、四半期、曜日與季節性趨勢，並提供 2026 年預測與分析報告。資料涵蓋 2025 年 1 月～2026 年 12 月（2026 年 3 月以後為預測值）。

## 技術棧

- **框架**: Next.js (App Router)
- **樣式**: Tailwind CSS
- **圖表**: Recharts
- **UI 基底**: shadcn/ui 元件（Card、Table、Badge 等）

---

## 專案結構（自訂元件與模組）

### 應用程式入口

| 路徑 | 說明 |
|------|------|
| `app/page.tsx` | 首頁：組裝 KPI、主圖表、各分析圖表、月別表格與分析報告，單一儀表板版面。 |
| `app/layout.tsx` | 根版面：字體、metadata、全域樣式。 |

---

### 儀表板元件 (`components/dashboard/`)

以下為本專案自訂的儀表板元件（不含 `components/ui/` 內的 shadcn 元件）。

#### `KpiCards` (`kpi-cards.tsx`)

- **功能**：顯示四張 KPI 卡片。
- **內容**：2025 年申込數合計與月平均、2025 年契約數合計與月平均、2026 年申込數預測與前年比、2026 年契約數預測與前年比。
- **資料來源**：`lib/forecast-data.ts` 的 KPI 常數。

#### `MainChart` (`main-chart.tsx`)

- **功能**：月別申込數・契約數的**主趨勢圖**。
- **呈現**：長條圖（Recharts BarChart），區分「實績」與「預測」；申込數與契約數各兩組柱子（實績／予測），預測以虛線樣式區分。
- **資料**：`getMainChartData()`，含 `label`、`appsActual` / `appsForecast`、`contractsActual` / `contractsForecast`、`type`。

#### `ConversionRateChart` (`conversion-rate-chart.tsx`)

- **功能**：月別**契約率（轉換率）** 推移。
- **呈現**：折線圖（Recharts LineChart），Y 軸 0～50%。
- **資料**：`getMonthlyRecords()` 的 `convRate`。

#### `QuarterChart` (`quarter-chart.tsx`)

- **功能**：**四半期比較**（2025 年 vs 2026 年預測）。
- **呈現**：長條圖，Q1～Q4 的申込數・契約數並列比較。
- **資料**：`getQuarterChartData()`（`apps2025` / `apps2026`、`contracts2025` / `contracts2026`）。

#### `DayOfWeekChart` (`day-of-week-chart.tsx`)

- **功能**：**曜日別** 平均申込數・契約數。
- **呈現**：長條圖，X 軸為月～日，兩組柱子為平均申込數與平均契約数。
- **資料**：`getDowChartData()`（`DOW_LABELS`、`DOW_APPS`、`DOW_CONTRACTS`）。

#### `SeasonalityChart` (`seasonality-chart.tsx`)

- **功能**：月別**季節性指數**（2025 年實績基準）。
- **呈現**：雷達圖（Recharts RadarChart），12 個月、指數約 0.5～1.5。
- **資料**：`getSeasonChartData()`（`SEASON_LABELS`、`SEASON_INDEX`）。

#### `MonthlyTable` (`monthly-table.tsx`)

- **功能**：**月別數據一覽表**。
- **欄位**：年月、申込数、契約数、契約率、区分（実績／実績(推定)／予測）。預測與推定列以較淡樣式區分。
- **資料**：`getMonthlyRecords()`、`getTypeLabel()`。

#### `AnalysisReport` (`analysis-report.tsx`)

- **功能**：靜態**分析報告**區塊。
- **內容**：申込數趨勢、契約率趨勢、季節性與曜日模式、2026 年見通しまとめ、預測模型說明（線形トレンド＋季節性指數、契約率上限等）。以 Badge 區分段落標題。

---

### 資料層 (`lib/`)

#### `forecast-data.ts`

- **功能**：儀表板所需的**全部資料定義與取得函式**。
- **型別**：`DataType`（`"actual" | "projected" | "forecast"`）、`MonthlyRecord`。
- **常數**：月別 LABELS、申込数・契約数・契約率・類型；四半期、曜日、季節性指數；KPI 數值。
- **函式**：`getMonthlyRecords()`、`getTypeLabel()`、`getMainChartData()`、`getQuarterChartData()`、`getDowChartData()`、`getSeasonChartData()`。
- **說明**：圖表與表格皆由此模組取得資料，未接後端 API。

#### `utils.ts`

- **功能**：通用工具。目前提供 `cn()`，用於合併 Tailwind 類名（基於 `clsx` + `tailwind-merge`）。

---

## 開始使用

安裝依賴（建議使用 pnpm）：

```bash
pnpm install
```

啟動開發伺服器：

```bash
pnpm dev
```

於瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 即可查看儀表板。

---

## 其他

- 本專案使用 [Geist](https://vercel.com/font) 字體（透過 `next/font` 優化）。
- 部署方式可參考 [Next.js 部署文件](https://nextjs.org/docs/app/building-your-application/deploying)；若部署至 [Vercel](https://vercel.com) 可一鍵連結此 repo。
