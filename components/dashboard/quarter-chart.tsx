"use client";

import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { getQuarterChartData } from "@/lib/forecast-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuarterChart() {
  const data = getQuarterChartData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>四半期比較（2025 vs 2026予測）</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]" role="img" aria-label="四半期別申込数・契約数比較グラフ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="label" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value: number) => [value != null ? value.toLocaleString() : "", ""]} />
              <Legend />
              <Bar name="2025 申込" dataKey="apps2025" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
              <Bar name="2026 申込" dataKey="apps2026" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              <Bar name="2025 契約" dataKey="contracts2025" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
              <Bar name="2026 契約" dataKey="contracts2026" fill="var(--chart-4)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
