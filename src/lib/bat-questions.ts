/**
 * BAT (Burnout Assessment Tool) questions organized by dimension
 * Each question is rated on a 1-5 scale:
 * 1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always
 */

export interface BATQuestion {
  id: number
  text: string
  dimension: 'exhaustion' | 'mentalDistance' | 'cognitiveImpairment'
}

export const batQuestions: BATQuestion[] = [
  // Exhaustion (8 questions)
  {
    id: 1,
    text: 'At work, I feel mentally exhausted',
    dimension: 'exhaustion',
  },
  {
    id: 2,
    text: 'Everything I do at work requires effort',
    dimension: 'exhaustion',
  },
  {
    id: 3,
    text: 'After a day at work, I find it hard to recover my energy',
    dimension: 'exhaustion',
  },
  {
    id: 4,
    text: 'At work, I feel physically exhausted',
    dimension: 'exhaustion',
  },
  {
    id: 5,
    text: 'At work, I feel emotionally drained',
    dimension: 'exhaustion',
  },
  {
    id: 6,
    text: 'When I get up in the morning, I lack the energy to start a new day at work',
    dimension: 'exhaustion',
  },
  {
    id: 7,
    text: 'I want to be active at work, but somehow I am unable to manage',
    dimension: 'exhaustion',
  },
  {
    id: 8,
    text: 'When I exert myself at work, I quickly get tired',
    dimension: 'exhaustion',
  },
  // Mental Distance (5 questions)
  {
    id: 9,
    text: 'I struggle to find any enthusiasm for my work',
    dimension: 'mentalDistance',
  },
  {
    id: 10,
    text: 'I feel a strong aversion towards my work',
    dimension: 'mentalDistance',
  },
  {
    id: 11,
    text: 'I feel indifferent about my work',
    dimension: 'mentalDistance',
  },
  {
    id: 12,
    text: 'I want to distance myself from my work',
    dimension: 'mentalDistance',
  },
  {
    id: 13,
    text: 'I struggle to think clearly at work',
    dimension: 'mentalDistance',
  },
  // Cognitive Impairment (10 questions)
  {
    id: 14,
    text: 'I have trouble concentrating at work',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 15,
    text: 'I make mistakes at work because I have my mind on other things',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 16,
    text: 'I am forgetful and distracted at work',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 17,
    text: 'When I am working, I have trouble keeping my attention on my work',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 18,
    text: 'I struggle to think about complicated issues at work',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 19,
    text: 'During my work, I am unable to control my emotions',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 20,
    text: 'During my work, I get upset or irritated easily',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 21,
    text: 'During my work, I do not feel in control',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 22,
    text: 'During my work, I feel unable to manage my emotions',
    dimension: 'cognitiveImpairment',
  },
  {
    id: 23,
    text: 'During my work, I cry more easily than usual',
    dimension: 'cognitiveImpairment',
  },
]

export const scaleLabels = [
  { value: 1, label: 'Never' },
  { value: 2, label: 'Rarely' },
  { value: 3, label: 'Sometimes' },
  { value: 4, label: 'Often' },
  { value: 5, label: 'Always' },
] as const
