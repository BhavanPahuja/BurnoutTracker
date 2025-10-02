'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { batQuestions, scaleLabels } from '@/lib/bat-questions'
import { submitQuestionnaire } from '@/app/questionnaire/actions'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import type { BATQuestionResponse, BATResponses } from '@/types/bat.type'

export function BATForm() {
  const router = useRouter()
  const [responses, setResponses] = useState<Record<number, number>>({})
  const [error, setError] = useState<string>()
  const [isPending, setIsPending] = useState(false)

  function handleResponseChange(questionId: number, value: number) {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsPending(true)
    setError(undefined)

    // Check if all questions are answered
    const allQuestionsAnswered = batQuestions.every((q) => responses[q.id])

    if (!allQuestionsAnswered) {
      setError('Please answer all questions before submitting')
      setIsPending(false)
      return
    }

    // Organize responses by dimension
    const batResponses: BATResponses = {
      exhaustion: [],
      mentalDistance: [],
      cognitiveImpairment: [],
    }

    batQuestions.forEach((question) => {
      const response: BATQuestionResponse = {
        questionId: question.id,
        value: responses[question.id] as 1 | 2 | 3 | 4 | 5,
      }

      if (question.dimension === 'exhaustion') {
        batResponses.exhaustion.push(response)
      } else if (question.dimension === 'mentalDistance') {
        batResponses.mentalDistance.push(response)
      } else {
        batResponses.cognitiveImpairment.push(response)
      }
    })

    const result = await submitQuestionnaire(batResponses)

    if (result?.error) {
      setError(result.error)
      setIsPending(false)
    } else if (result?.success) {
      router.push('/dashboard')
    }
  }

  const progress = Object.keys(responses).length
  const total = batQuestions.length
  const progressPercentage = (progress / total) * 100

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle>Burnout Assessment Tool (BAT)</CardTitle>
          <CardDescription>
            Answer the following questions based on how you have felt at work over the past few months.
            Rate each statement on a scale from 1 (Never) to 5 (Always).
          </CardDescription>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{progress} of {total}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      {error && (
        <div className="rounded-md bg-destructive/15 p-4 text-sm text-destructive border border-destructive/20">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {batQuestions.map((question, index) => {
          const isFirstInSection =
            index === 0 ||
            batQuestions[index - 1].dimension !== question.dimension

          return (
            <div key={question.id}>
              {isFirstInSection && (
                <h3 className="text-lg font-semibold mb-4 mt-8 first:mt-0">
                  {question.dimension === 'exhaustion' && 'Exhaustion'}
                  {question.dimension === 'mentalDistance' && 'Mental Distance'}
                  {question.dimension === 'cognitiveImpairment' && 'Cognitive & Emotional Impairment'}
                </h3>
              )}
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Label className="text-base font-normal">
                      {question.id}. {question.text}
                    </Label>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                      {scaleLabels.map((scale) => {
                        const inputId = `q${question.id}-${scale.value}`
                        const isSelected = responses[question.id] === scale.value

                        return (
                          <label
                            key={scale.value}
                            htmlFor={inputId}
                            className={`
                              flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all
                              ${isSelected
                                ? 'border-primary bg-primary/10 shadow-sm'
                                : 'border-border/50 hover:border-border hover:bg-accent/50'
                              }
                            `}
                          >
                            <input
                              type="radio"
                              id={inputId}
                              name={`question-${question.id}`}
                              value={scale.value}
                              checked={isSelected}
                              onChange={() => handleResponseChange(question.id, scale.value)}
                              className="h-4 w-4 cursor-pointer accent-primary"
                            />
                            <span className="text-sm font-medium">
                              {scale.value} - {scale.label}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>

      <div className="flex justify-end sticky bottom-4">
        <Button
          type="submit"
          size="lg"
          disabled={isPending || progress < total}
          className="shadow-lg"
        >
          {isPending ? 'Submitting...' : progress < total ? `Answer all questions (${progress}/${total})` : 'Submit Questionnaire'}
        </Button>
      </div>
    </form>
  )
}
