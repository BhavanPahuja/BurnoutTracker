/**
 * BAT (Burnout Assessment Tool) question response scale
 */
export type BATResponseValue = 1 | 2 | 3 | 4 | 5

/**
 * Individual question response
 */
export interface BATQuestionResponse {
  questionId: number
  value: BATResponseValue
}

/**
 * Complete BAT questionnaire responses
 */
export interface BATResponses {
  exhaustion: BATQuestionResponse[]
  mentalDistance: BATQuestionResponse[]
  cognitiveImpairment: BATQuestionResponse[]
}

/**
 * Calculated scores for each dimension
 */
export interface BATScores {
  exhaustionScore: number
  mentalDistanceScore: number
  cognitiveImpairmentScore: number
  totalScore: number
}

/**
 * Complete BAT submission data
 */
export interface BATSubmission extends BATScores {
  userId: string
  responses: BATResponses
}
