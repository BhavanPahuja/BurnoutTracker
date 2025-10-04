import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUser } from '@/services/auth.service'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default async function HomePage() {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="font-semibold text-xl">Burnout Tracker</span>
          </div>
          <div className="flex gap-3">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/50 px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Science-backed burnout assessment
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Take Control of Your Work-Life Balance
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Monitor your work-related well-being with the scientifically validated Burnout Assessment Tool (BAT).
              Get personalized insights, track trends over time, and take proactive steps to prevent burnout before it impacts your health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/signup">
                <Button size="lg" className="text-base px-8">
                  Start Free Assessment
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free to use
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                100% Private
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Scientifically Validated
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative">
              <svg viewBox="0 0 600 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Background elements */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.05 }} />
                  </linearGradient>
                </defs>

                {/* Abstract background shapes */}
                <circle cx="450" cy="100" r="80" fill="url(#gradient1)" />
                <circle cx="150" cy="450" r="100" fill="url(#gradient1)" />
                <rect x="400" y="400" width="120" height="120" rx="20" fill="hsl(var(--primary))" opacity="0.08" />

                {/* Dashboard mockup */}
                <rect x="100" y="150" width="400" height="300" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />

                {/* Dashboard header */}
                <rect x="120" y="170" width="360" height="40" rx="6" fill="hsl(var(--primary))" opacity="0.1" />
                <circle cx="140" cy="190" r="12" fill="hsl(var(--primary))" opacity="0.6" />
                <rect x="165" y="182" width="100" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.4" />
                <rect x="165" y="195" width="60" height="6" rx="3" fill="hsl(var(--muted-foreground))" opacity="0.3" />

                {/* Chart visualization */}
                <g transform="translate(130, 230)">
                  {/* Chart bars */}
                  <rect x="20" y="120" width="40" height="20" rx="4" fill="#dc2626" opacity="0.7" />
                  <rect x="20" y="90" width="40" height="30" rx="4" fill="#dc2626" opacity="0.8" />
                  <rect x="20" y="50" width="40" height="40" rx="4" fill="#dc2626" opacity="0.9" />

                  <rect x="80" y="110" width="40" height="30" rx="4" fill="#0891b2" opacity="0.7" />
                  <rect x="80" y="80" width="40" height="30" rx="4" fill="#0891b2" opacity="0.8" />
                  <rect x="80" y="60" width="40" height="20" rx="4" fill="#0891b2" opacity="0.9" />

                  <rect x="140" y="100" width="40" height="40" rx="4" fill="#7c3aed" opacity="0.7" />
                  <rect x="140" y="70" width="40" height="30" rx="4" fill="#7c3aed" opacity="0.8" />
                  <rect x="140" y="50" width="40" height="20" rx="4" fill="#7c3aed" opacity="0.9" />

                  <rect x="200" y="90" width="40" height="50" rx="4" fill="hsl(var(--primary))" opacity="0.7" />
                  <rect x="200" y="60" width="40" height="30" rx="4" fill="hsl(var(--primary))" opacity="0.8" />
                  <rect x="200" y="40" width="40" height="20" rx="4" fill="hsl(var(--primary))" opacity="0.9" />

                  {/* Grid lines */}
                  <line x1="10" y1="140" x2="320" y2="140" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3" />
                  <line x1="10" y1="100" x2="320" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3" />
                  <line x1="10" y1="60" x2="320" y2="60" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3" />
                  <line x1="10" y1="20" x2="320" y2="20" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.3" />
                </g>

                {/* Score cards */}
                <rect x="120" y="480" width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                <rect x="120" y="480" width="100" height="3" fill="#16a34a" />
                <text x="135" y="510" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">2.3</text>
                <text x="135" y="528" fill="hsl(var(--muted-foreground))" fontSize="10">Low Risk</text>

                <rect x="240" y="480" width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                <rect x="240" y="480" width="100" height="3" fill="#ca8a04" />
                <text x="255" y="510" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">3.1</text>
                <text x="255" y="528" fill="hsl(var(--muted-foreground))" fontSize="10">Moderate</text>

                <rect x="360" y="480" width="100" height="60" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
                <rect x="360" y="480" width="100" height="3" fill="#0891b2" />
                <text x="375" y="510" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">2.8</text>
                <text x="375" y="528" fill="hsl(var(--muted-foreground))" fontSize="10">Improving</text>

                {/* Floating particles */}
                <circle cx="520" cy="200" r="4" fill="hsl(var(--primary))" opacity="0.4" />
                <circle cx="80" cy="120" r="3" fill="hsl(var(--primary))" opacity="0.3" />
                <circle cx="540" cy="350" r="5" fill="hsl(var(--primary))" opacity="0.5" />
                <circle cx="60" cy="280" r="4" fill="hsl(var(--primary))" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to track burnout
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on the validated Burnout Assessment Tool (BAT) used by professionals worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Scientifically Validated</h3>
              <p className="text-muted-foreground">
                The BAT is a peer-reviewed, evidence-based questionnaire with 23 carefully designed questions that measure the three core dimensions of work-related burnout
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Visual Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your burnout levels over time with interactive charts and graphs. Identify patterns, track improvements, and spot warning signs before they become critical health concerns
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and protected with industry-standard security measures
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">23</div>
              <div className="text-sm text-muted-foreground">Questions</div>
              <p className="text-xs text-muted-foreground mt-1">Comprehensive assessment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Dimensions</div>
              <p className="text-xs text-muted-foreground mt-1">Exhaustion, Distance, Impairment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5min</div>
              <div className="text-sm text-muted-foreground">To Complete</div>
              <p className="text-xs text-muted-foreground mt-1">Quick and efficient</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Free</div>
              <p className="text-xs text-muted-foreground mt-1">No hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and start tracking your burnout levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Account</h3>
                <p className="text-muted-foreground">
                  Sign up for free in seconds. No credit card required, just your email address to get started.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Take Assessment</h3>
                <p className="text-muted-foreground">
                  Answer 23 scientifically validated questions about your work-related well-being in just 5 minutes.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-muted-foreground">
                View your results, track changes over time, and identify patterns before burnout becomes critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About BAT Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is the Burnout Assessment Tool?
              </h2>
              <p className="text-muted-foreground mb-4">
                The BAT is a scientifically validated questionnaire developed by researchers to measure work-related burnout.
                It assesses three core dimensions that define burnout syndrome.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center">
                    <span className="text-red-600">🔥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Exhaustion</h4>
                    <p className="text-sm text-muted-foreground">
                      Severe physical and mental fatigue related to work
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center">
                    <span className="text-cyan-600">💭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mental Distance</h4>
                    <p className="text-sm text-muted-foreground">
                      Psychological withdrawal and negative attitude toward work
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                    <span className="text-purple-600">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cognitive Impairment</h4>
                    <p className="text-sm text-muted-foreground">
                      Difficulty concentrating and controlling emotions at work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Peer-Reviewed Research</div>
                    <div className="text-sm text-muted-foreground">Published in scientific journals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Used by Professionals</div>
                    <div className="text-sm text-muted-foreground">Trusted by healthcare providers worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Reliable Metrics</div>
                    <div className="text-sm text-muted-foreground">Consistent and accurate measurements</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-secondary/20 border-border/50">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to take control?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your first assessment in minutes. No credit card required.
            </p>
            <div className="pt-4">
              <Link href="/auth/signup">
                <Button size="lg" className="text-base px-8">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-sm text-muted-foreground">
                © 2025 Burnout Tracker. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Built with Next.js, Supabase, and Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
