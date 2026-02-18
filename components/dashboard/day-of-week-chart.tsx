"use client";

import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { getDowChartData } from "@/lib/forecast-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DayOfWeekChart() {
  const data = getDowChartData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>曜日別 平均申込数</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]" role="img" aria-label="曜日別平均申込数・契約数グラフ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="label" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={(value: number | undefined) => [value != null ? value.toFixed(1) : "", ""]} />
              <Legend />
              <Bar name="平均申込数" dataKey="apps" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
              <Bar name="平均契約数" dataKey="contracts" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
