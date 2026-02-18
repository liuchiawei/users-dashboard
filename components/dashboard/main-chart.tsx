"use client";

import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { getMainChartData } from "@/lib/forecast-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CHART_COLORS = {
  appsActual: "var(--chart-1)",
  appsForecast: "var(--chart-2)",
  contractsActual: "var(--chart-3)",
  contractsForecast: "var(--chart-4)",
};

export function MainChart() {
  const data = getMainChartData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>月別 申込数・契約数の推移と予測</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[320px]" role="img" aria-label="月別申込数と契約数の推移と予測グラフ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip
                formatter={(value: number) => [value?.toLocaleString() ?? "", ""]}
                labelFormatter={(label) => `年月: ${label}`}
              />
              <Legend />
              <Bar name="申込数（実績）" dataKey="appsActual" fill={CHART_COLORS.appsActual} radius={[4, 4, 0, 0]} />
              <Bar name="申込数（予測）" dataKey="appsForecast" fill={CHART_COLORS.appsForecast} radius={[4, 4, 0, 0]} strokeDasharray="3 3" />
              <Bar name="契約数（実績）" dataKey="contractsActual" fill={CHART_COLORS.contractsActual} radius={[4, 4, 0, 0]} />
              <Bar name="契約数（予測）" dataKey="contractsForecast" fill={CHART_COLORS.contractsForecast} radius={[4, 4, 0, 0]} strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
