'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts'

interface Assessment {
  id: string
  total_score: number
  exhaustion_score: number
  mental_distance_score: number
  cognitive_impairment_score: number
  created_at: string
}

interface AssessmentHistoryProps {
  assessments: Assessment[]
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

function formatTime(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  })
}

function formatShortDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function AssessmentHistory({ assessments }: AssessmentHistoryProps) {
  if (assessments.length === 0) {
    return null
  }

  // Reverse to show oldest first in the chart
  const chartData = [...assessments].reverse().map((assessment) => ({
    date: formatShortDate(assessment.created_at),
    'Total Score': Number(assessment.total_score.toFixed(2)),
    'Exhaustion': Number(assessment.exhaustion_score.toFixed(2)),
    'Mental Distance': Number(assessment.mental_distance_score.toFixed(2)),
    'Cognitive Impairment': Number(assessment.cognitive_impairment_score.toFixed(2)),
  }))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Assessment Trends</CardTitle>
          <CardDescription>Track your burnout scores over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis
                domain={[0, 5]}
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--primary))',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  padding: '12px',
                }}
                labelStyle={{
                  color: 'hsl(var(--popover-foreground))',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                }}
                itemStyle={{
                  color: 'hsl(var(--popover-foreground))',
                  padding: '4px 0',
                }}
                cursor={{ fill: 'hsl(var(--primary) / 0.1)' }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: '20px',
                }}
              />
              <ReferenceLine y={2} stroke="#ca8a04" strokeDasharray="3 3" label={{ value: 'Moderate', position: 'right', fill: '#ca8a04' }} />
              <ReferenceLine y={3.5} stroke="#ea580c" strokeDasharray="3 3" label={{ value: 'High', position: 'right', fill: '#ea580c' }} />
              <ReferenceLine y={4.5} stroke="#dc2626" strokeDasharray="3 3" label={{ value: 'Very High', position: 'right', fill: '#dc2626' }} />
              <Bar
                dataKey="Total Score"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Exhaustion"
                fill="#dc2626"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Mental Distance"
                fill="#0891b2"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Cognitive Impairment"
                fill="#7c3aed"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assessment History</CardTitle>
          <CardDescription>Your recent burnout assessments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments.map((assessment) => (
              <div
                key={assessment.id}
                className="flex justify-between items-center py-3 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium">{formatDate(assessment.created_at)}</p>
                  <p className="text-sm text-muted-foreground">{formatTime(assessment.created_at)}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    {assessment.total_score.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Score</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
