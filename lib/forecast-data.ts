export type DataType = "actual" | "projected" | "forecast";

export interface MonthlyRecord {
  label: string;
  yearMonth: string;
  apps: number;
  contracts: number;
  convRate: number;
  type: DataType;
}

const LABELS = [
  "25/01", "25/02", "25/03", "25/04", "25/05", "25/06", "25/07", "25/08", "25/09", "25/10", "25/11", "25/12",
  "26/01", "26/02", "26/03", "26/04", "26/05", "26/06", "26/07", "26/08", "26/09", "26/10", "26/11", "26/12",
];

export const MONTHLY_APPS = [
  397, 360, 342, 398, 323, 308, 277, 284, 313, 304, 233, 267,
  256, 188, 239, 263, 202, 182, 154, 147, 151, 136, 96, 100,
];

export const MONTHLY_CONTRACTS = [
  47, 92, 110, 108, 103, 100, 103, 75, 101, 117, 78, 93,
  86, 47, 88, 98, 77, 70, 61, 59, 60, 54, 38, 40,
];

export const MONTHLY_CONV_RATE = [
  11.8, 25.6, 32.2, 27.1, 31.9, 32.5, 37.2, 26.4, 32.3, 38.5, 33.5, 34.8,
  33.6, 25.0, 36.8, 37.4, 38.0, 38.7, 39.3, 39.9, 40.0, 40.0, 40.0, 40.0,
];

export const MONTHLY_TYPES: DataType[] = [
  "actual", "actual", "actual", "actual", "actual", "actual", "actual", "actual", "actual", "actual", "actual", "actual",
  "actual", "projected", "forecast", "forecast", "forecast", "forecast", "forecast", "forecast", "forecast", "forecast", "forecast", "forecast",
];

const MONTH_NAMES = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

export function getMonthlyRecords(): MonthlyRecord[] {
  return LABELS.map((_, i) => {
    const year = i < 12 ? "2025年" : "2026年";
    const month = MONTH_NAMES[i % 12];
    return {
      label: LABELS[i],
      yearMonth: `${year}${month}`,
      apps: MONTHLY_APPS[i],
      contracts: MONTHLY_CONTRACTS[i],
      convRate: MONTHLY_CONV_RATE[i],
      type: MONTHLY_TYPES[i],
    };
  });
}

export function getTypeLabel(type: DataType): string {
  switch (type) {
    case "actual":
      return "実績";
    case "projected":
      return "実績(推定)";
    case "forecast":
      return "予測";
  }
}

export const QUARTER_LABELS = ["Q1", "Q2", "Q3", "Q4"] as const;

export const QUARTER_2025_APPS = [1099, 1029, 874, 804];
export const QUARTER_2026_APPS = [683, 647, 452, 332];
export const QUARTER_2025_CONTRACTS = [249, 311, 279, 288];
export const QUARTER_2026_CONTRACTS = [221, 245, 180, 132];

export const DOW_LABELS = ["月", "火", "水", "木", "金", "土", "日"];
export const DOW_APPS = [11.3, 11.3, 12.3, 12.7, 10.9, 6.5, 6.0];
export const DOW_CONTRACTS = [4.2, 3.9, 4.0, 3.1, 3.5, 1.3, 1.1];

export const SEASON_LABELS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
export const SEASON_INDEX = [1.25, 1.14, 1.08, 1.26, 1.02, 0.97, 0.87, 0.9, 0.99, 0.96, 0.74, 0.84];

export const KPI_2025_APPS_TOTAL = 3806;
export const KPI_2025_APPS_AVG = 317;
export const KPI_2025_CONTRACTS_TOTAL = 1127;
export const KPI_2025_CONTRACTS_AVG = 94;
export const KPI_2026_APPS_FORECAST = 2114;
export const KPI_2026_APPS_YOY = -44.5;
export const KPI_2026_CONTRACTS_FORECAST = 778;
export const KPI_2026_CONTRACTS_YOY = -31.0;

export function getMainChartData() {
  return LABELS.map((label, i) => ({
    label,
    appsActual: MONTHLY_TYPES[i] === "actual" ? MONTHLY_APPS[i] : null,
    appsForecast: MONTHLY_TYPES[i] !== "actual" ? MONTHLY_APPS[i] : null,
    contractsActual: MONTHLY_TYPES[i] === "actual" ? MONTHLY_CONTRACTS[i] : null,
    contractsForecast: MONTHLY_TYPES[i] !== "actual" ? MONTHLY_CONTRACTS[i] : null,
    type: MONTHLY_TYPES[i],
  }));
}

export function getQuarterChartData() {
  return QUARTER_LABELS.map((label, i) => ({
    label,
    apps2025: QUARTER_2025_APPS[i],
    apps2026: QUARTER_2026_APPS[i],
    contracts2025: QUARTER_2025_CONTRACTS[i],
    contracts2026: QUARTER_2026_CONTRACTS[i],
  }));
}

export function getDowChartData() {
  return DOW_LABELS.map((label, i) => ({
    label,
    apps: DOW_APPS[i],
    contracts: DOW_CONTRACTS[i],
  }));
}

export function getSeasonChartData() {
  return SEASON_LABELS.map((label, i) => ({
    label,
    index: SEASON_INDEX[i],
  }));
}
