import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ScoreCardProps {
  title: string
  score: number
  description?: string
}

export function ScoreCard({ title, score, description }: ScoreCardProps) {
  // Determine severity level and color
  function getSeverityInfo(value: number) {
    if (value < 2.0) return {
      level: 'Low',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800',
      icon: '✓'
    }
    if (value < 3.5) return {
      level: 'Moderate',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      icon: '!'
    }
    if (value < 4.5) return {
      level: 'High',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      borderColor: 'border-orange-200 dark:border-orange-800',
      icon: '⚠'
    }
    return {
      level: 'Very High',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950',
      borderColor: 'border-red-200 dark:border-red-800',
      icon: '⚠'
    }
  }

  const { level, color, bgColor, borderColor, icon } = getSeverityInfo(score)
  const percentage = (score / 5) * 100

  return (
    <Card className={`relative overflow-hidden ${borderColor} transition-all duration-300 hover:shadow-lg`}>
      <div className={`absolute top-0 left-0 right-0 h-1 ${color.replace('text-', 'bg-')}`} />
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <span className={`flex items-center justify-center w-8 h-8 rounded-full ${bgColor} ${color} text-lg`}>
            {icon}
          </span>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${color}`}>
              {score.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">/ 5.00</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full ${color.replace('text-', 'bg-')} transition-all duration-500`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className={`text-sm font-medium ${color}`}>{level}</p>
        </div>
      </CardContent>
    </Card>
  )
}
