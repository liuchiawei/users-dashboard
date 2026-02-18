import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AnalysisReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>分析レポート</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <section>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Badge variant="destructive">申込数トレンド</Badge>
            明確な減少傾向
          </h3>
          <p className="text-muted-foreground text-sm">
            2025年を通じて、申込数は月あたり約11件のペースで減少しています。2025年Q1（1〜3月）の申込数合計1,099件に対し、Q4（10〜12月）は804件と約27%減少しました。2026年1月は256件で、前年同月の397件から35.5%の大幅減となっています。
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            この減少傾向が続く場合、2026年後半には月間100〜150件程度まで落ち込む見通しです。
          </p>
        </section>

        <section>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Badge variant="secondary">契約率トレンド</Badge>
            改善傾向
          </h3>
          <p className="text-muted-foreground text-sm">
            一方で、契約率（申込者のうち実際に本契約に至った割合）は改善しています。2025年1月は11.8%（新規サービス開始直後のため低い）でしたが、2月以降は25〜38%の水準で推移し、後半にかけて上昇傾向にあります。月あたり約0.6ポイントずつ改善しており、2026年後半には35〜40%程度に達すると予測します。
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            これは、申込後30日の試用期間を経て本契約する運用が定着し、本気度の高いユーザーの割合が上昇していることを示唆します。
          </p>
        </section>

        <section>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Badge variant="outline">季節性パターン</Badge>
          </h3>
          <p className="text-muted-foreground text-sm">
            申込数には明確な季節性があります。4月が最も多く（年度始まりの新規事業立ち上げ需要）、1〜3月も比較的高水準です。一方、7〜8月と11月は落ち込む傾向にあります。また、曜日別では平日（特に水・木曜）が多く、土日は平日の約半分となっています。
          </p>
        </section>

        <section>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Badge variant="destructive">2026年見通しまとめ</Badge>
          </h3>
          <p className="text-muted-foreground text-sm">
            申込数の減少トレンドが最大のリスク要因です。2026年通年の申込数は約2,114件（前年比-44.5%）、契約数は約778件（前年比-31.0%）と予測します。契約率の改善が契約数の落ち込みを一定程度緩和しますが、申込数の減少を完全にはカバーできません。
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            申込数回復のためには、集客施策の強化（広告・SEO・紹介キャンペーン等）が重要と考えられます。
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-sm font-semibold">予測モデルについて</h3>
          <p className="text-muted-foreground text-sm">
            本予測は、2025年1月〜2026年1月の13ヶ月分の実績データに基づき、「線形トレンド＋季節性指数」の手法で算出しています。申込数は線形回帰による下降トレンドに2025年の月別季節性指数を乗じて算出。契約率は緩やかな上昇トレンドを反映し、上限40%でキャップしています。外部要因（市場環境の変化、競合動向、マーケティング施策の変更等）は考慮していないため、実際の数値とは乖離する可能性があります。
          </p>
        </section>
      </CardContent>
    </Card>
  );
}
