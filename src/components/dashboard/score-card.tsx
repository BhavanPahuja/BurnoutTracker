import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ScoreCardProps {
  title: string
  score: number
  description?: string
}

export function ScoreCard({ title, score, description }: ScoreCardProps) {
  // Determine severity level and color
  function getSeverityInfo(value: number) {
    if (value < 2.0) return { level: 'Low', color: 'text-green-600' }
    if (value < 3.5) return { level: 'Moderate', color: 'text-yellow-600' }
    if (value < 4.5) return { level: 'High', color: 'text-orange-600' }
    return { level: 'Very High', color: 'text-red-600' }
  }

  const { level, color } = getSeverityInfo(score)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className={`text-4xl font-bold ${color}`}>
            {score.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">/ 5.00</span>
        </div>
        <p className={`mt-2 text-sm font-medium ${color}`}>{level}</p>
      </CardContent>
    </Card>
  )
}
