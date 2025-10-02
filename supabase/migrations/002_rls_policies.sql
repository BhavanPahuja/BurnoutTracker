-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bat_responses ENABLE ROW LEVEL SECURITY;

-- Profiles policies
-- Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- BAT responses policies
-- Users can read their own BAT responses
CREATE POLICY "Users can read own BAT responses"
  ON public.bat_responses
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own BAT responses
CREATE POLICY "Users can insert own BAT responses"
  ON public.bat_responses
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own BAT responses
CREATE POLICY "Users can update own BAT responses"
  ON public.bat_responses
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own BAT responses
CREATE POLICY "Users can delete own BAT responses"
  ON public.bat_responses
  FOR DELETE
  USING (auth.uid() = user_id);
