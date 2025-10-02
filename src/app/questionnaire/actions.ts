'use server'

import { getCurrentUser } from '@/services/auth.service'
import { saveBATResponses } from '@/services/bat.service'
import type { BATResponses } from '@/types/bat.type'

export interface QuestionnaireResult {
  error?: string
  success?: boolean
}

/**
 * Submits BAT questionnaire responses
 */
export async function submitQuestionnaire(
  responses: BATResponses
): Promise<QuestionnaireResult> {
  const user = await getCurrentUser()

  if (!user) {
    return { error: 'You must be logged in to submit the questionnaire' }
  }

  // Validate responses
  const hasAllExhaustion = responses.exhaustion.length === 8
  const hasAllMentalDistance = responses.mentalDistance.length === 5
  const hasAllCognitiveImpairment = responses.cognitiveImpairment.length === 10

  if (!hasAllExhaustion || !hasAllMentalDistance || !hasAllCognitiveImpairment) {
    return { error: 'Please answer all questions' }
  }

  try {
    await saveBATResponses({
      userId: user.id,
      responses,
    })

    return { success: true }
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to submit questionnaire',
    }
  }
}
