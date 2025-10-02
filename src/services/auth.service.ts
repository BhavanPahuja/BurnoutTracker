import { createClient } from '@/lib/supabase/server'

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
export async function getUserProfile(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) throw new Error('Failed to fetch user profile')

  return data
}
