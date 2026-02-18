"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getMonthlyRecords } from "@/lib/forecast-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ConversionRateChart() {
  const chartData = getMonthlyRecords();

  return (
    <Card>
      <CardHeader>
        <CardTitle>月別契約率の推移</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]" role="img" aria-label="月別契約率の推移グラフ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <XAxis dataKey="label" tick={{ fontSize: 10 }} />
              <YAxis domain={[0, 50]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(value: number | undefined) => [`${value != null ? value.toFixed(1) : ""}%`, "契約率"]} />
              <Line
                type="monotone"
                dataKey="convRate"
                stroke="var(--chart-1)"
                strokeWidth={2}
                dot={{ r: 4, fill: "var(--chart-1)" }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
