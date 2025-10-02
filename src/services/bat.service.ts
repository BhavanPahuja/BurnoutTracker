import { createClient } from '@/lib/supabase/server'
import type { BATResponses, BATScores } from '@/types/bat.type'

/**
 * Calculates BAT scores from responses
 */
export function calculateBATScores(responses: BATResponses): BATScores {
  const exhaustionScore =
    responses.exhaustion.reduce((sum, r) => sum + r.value, 0) /
    responses.exhaustion.length

  const mentalDistanceScore =
    responses.mentalDistance.reduce((sum, r) => sum + r.value, 0) /
    responses.mentalDistance.length

  const cognitiveImpairmentScore =
    responses.cognitiveImpairment.reduce((sum, r) => sum + r.value, 0) /
    responses.cognitiveImpairment.length

  const totalScore =
    (exhaustionScore + mentalDistanceScore + cognitiveImpairmentScore) / 3

  return {
    exhaustionScore: Number(exhaustionScore.toFixed(2)),
    mentalDistanceScore: Number(mentalDistanceScore.toFixed(2)),
    cognitiveImpairmentScore: Number(cognitiveImpairmentScore.toFixed(2)),
    totalScore: Number(totalScore.toFixed(2)),
  }
}

/**
 * Saves BAT responses to the database
 */
export async function saveBATResponses({
  userId,
  responses,
}: {
  userId: string
  responses: BATResponses
}) {
  const scores = calculateBATScores(responses)
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('bat_responses')
    .insert({
      user_id: userId,
      exhaustion_score: scores.exhaustionScore,
      mental_distance_score: scores.mentalDistanceScore,
      cognitive_impairment_score: scores.cognitiveImpairmentScore,
      total_score: scores.totalScore,
      responses: responses as any,
    })
    .select()
    .single()

  if (error) throw new Error('Failed to save BAT responses')

  return data
}

/**
 * Gets all BAT responses for a user
 */
export async function getUserBATResponses(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('bat_responses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw new Error('Failed to fetch BAT responses')

  return data
}

/**
 * Gets the latest BAT response for a user
 */
export async function getLatestBATResponse(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('bat_responses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) throw new Error('Failed to fetch latest BAT response')

  return data
}
