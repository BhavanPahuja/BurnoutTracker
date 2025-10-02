import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Assessment {
  id: string
  total_score: number
  created_at: string
}

interface AssessmentHistoryProps {
  assessments: Assessment[]
}

export function AssessmentHistory({ assessments }: AssessmentHistoryProps) {
  if (assessments.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assessment History</CardTitle>
        <CardDescription>Your recent burnout assessments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assessments.map((assessment) => {
            const date = new Date(assessment.created_at)
            const formattedDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            const formattedTime = date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })

            return (
              <div
                key={assessment.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium">{formattedDate}</p>
                  <p className="text-sm text-muted-foreground">{formattedTime}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    {assessment.total_score.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Score</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
