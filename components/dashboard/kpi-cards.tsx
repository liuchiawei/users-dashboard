import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  KPI_2025_APPS_TOTAL,
  KPI_2025_APPS_AVG,
  KPI_2025_CONTRACTS_TOTAL,
  KPI_2025_CONTRACTS_AVG,
  KPI_2026_APPS_FORECAST,
  KPI_2026_APPS_YOY,
  KPI_2026_CONTRACTS_FORECAST,
  KPI_2026_CONTRACTS_YOY,
} from "@/lib/forecast-data";
import { cn } from "@/lib/utils";

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">2025年 申込数合計</p>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{KPI_2025_APPS_TOTAL.toLocaleString()}</p>
          <p className="text-muted-foreground text-sm">月平均 {KPI_2025_APPS_AVG}件</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">2025年 契約数合計</p>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{KPI_2025_CONTRACTS_TOTAL.toLocaleString()}</p>
          <p className="text-muted-foreground text-sm">月平均 {KPI_2025_CONTRACTS_AVG}件</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">2026年 申込数予測</p>
        </CardHeader>
        <CardContent>
          <p className={cn("text-2xl font-bold", "text-destructive")}>{KPI_2026_APPS_FORECAST.toLocaleString()}</p>
          <p className="text-destructive text-sm">前年比 {KPI_2026_APPS_YOY}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">2026年 契約数予測</p>
        </CardHeader>
        <CardContent>
          <p className={cn("text-2xl font-bold", "text-destructive")}>{KPI_2026_CONTRACTS_FORECAST.toLocaleString()}</p>
          <p className="text-destructive text-sm">前年比 {KPI_2026_CONTRACTS_YOY}%</p>
        </CardContent>
      </Card>
    </div>
  );
}
