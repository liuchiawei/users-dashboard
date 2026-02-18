import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonthlyRecords, getTypeLabel } from "@/lib/forecast-data";
import { cn } from "@/lib/utils";

export function MonthlyTable() {
  const records = getMonthlyRecords();

  return (
    <Card>
      <CardHeader>
        <CardTitle>月別データ一覧</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>年月</TableHead>
              <TableHead className="text-right">申込数</TableHead>
              <TableHead className="text-right">契約数</TableHead>
              <TableHead className="text-right">契約率</TableHead>
              <TableHead className="text-right">区分</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((row) => (
              <TableRow
                key={row.label}
                className={cn(row.type !== "actual" && "bg-muted/30 text-muted-foreground")}
              >
                <TableCell className="font-medium">{row.yearMonth}</TableCell>
                <TableCell className="text-right">{row.apps.toLocaleString()}</TableCell>
                <TableCell className="text-right">{row.contracts.toLocaleString()}</TableCell>
                <TableCell className="text-right">{row.convRate.toFixed(1)}%</TableCell>
                <TableCell className="text-right">{getTypeLabel(row.type)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
