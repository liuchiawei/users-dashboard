"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getSeasonChartData } from "@/lib/forecast-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SeasonalityChart() {
  const data = getSeasonChartData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>月別季節性指数（2025年実績）</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[260px]" role="img" aria-label="月別季節性指数レーダーチャート">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="label" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis angle={90} domain={[0.5, 1.5]} tick={{ fontSize: 9 }} />
              <Radar
                name="季節性指数"
                dataKey="index"
                stroke="var(--chart-1)"
                fill="var(--chart-1)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip formatter={(value: number) => [value?.toFixed(2) ?? "", "季節性指数"]} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
