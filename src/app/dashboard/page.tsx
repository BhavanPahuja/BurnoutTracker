import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUser, getUserProfile } from '@/services/auth.service'
import { getLatestBATResponse, getUserBATResponses } from '@/services/bat.service'
import { DashboardHeader } from '@/components/dashboard/header'
import { ScoreCard } from '@/components/dashboard/score-card'
import { AssessmentHistory } from '@/components/dashboard/assessment-history'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/auth/login')
  }

  const profile = await getUserProfile(user.id)
  const latestResponse = await getLatestBATResponse(user.id)
  const allResponses = await getUserBATResponses(user.id)

  const hasCompletedQuestionnaire = latestResponse !== null

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName={profile?.full_name || user.email || null} />

      <main className="container mx-auto px-4 py-8">
        {!hasCompletedQuestionnaire ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Welcome to Burnout Tracker</CardTitle>
              <CardDescription>
                Get started by completing your first burnout assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                The Burnout Assessment Tool (BAT) is a validated questionnaire that
                measures work-related burnout across three dimensions: exhaustion,
                mental distance, and cognitive impairment.
              </p>
              <Link href="/questionnaire">
                <Button size="lg" className="w-full sm:w-auto">
                  Take Assessment
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Your Latest Results</h2>
              <Link href="/questionnaire">
                <Button>Take New Assessment</Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ScoreCard
                title="Total Burnout Score"
                score={latestResponse.total_score}
                description="Overall burnout level"
              />
              <ScoreCard
                title="Exhaustion"
                score={latestResponse.exhaustion_score}
                description="Physical and emotional depletion"
              />
              <ScoreCard
                title="Mental Distance"
                score={latestResponse.mental_distance_score}
                description="Detachment from work"
              />
              <ScoreCard
                title="Cognitive Impairment"
                score={latestResponse.cognitive_impairment_score}
                description="Difficulty concentrating and controlling emotions"
              />
            </div>

            {allResponses.length > 0 && (
              <AssessmentHistory assessments={allResponses} />
            )}

            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-1">Low (1.0 - 1.9)</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimal burnout symptoms. Continue maintaining work-life balance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-600 mb-1">Moderate (2.0 - 3.4)</h4>
                  <p className="text-sm text-muted-foreground">
                    Some burnout symptoms present. Consider stress management strategies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-1">High (3.5 - 4.4)</h4>
                  <p className="text-sm text-muted-foreground">
                    Significant burnout symptoms. Seek support and consider professional help.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-1">Very High (4.5 - 5.0)</h4>
                  <p className="text-sm text-muted-foreground">
                    Severe burnout symptoms. Professional intervention is strongly recommended.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
