import { createClient } from '@/lib/supabase/server'
import type { Database } from '@/types/database.type'

type ProfileRow = Database['public']['Tables']['profiles']['Row']

/**
 * Gets the currently authenticated user
 * @returns User object or null if not authenticated
 */
export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}

/**
 * Gets the user profile data
 * @param userId - The user ID to fetch profile for
 * @returns Profile data or null
 */
export async function getUserProfile(userId: string): Promise<ProfileRow | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) return null

  return data
}
