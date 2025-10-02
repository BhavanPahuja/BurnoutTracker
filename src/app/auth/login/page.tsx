import { SignInForm } from '@/components/auth-wizard/sign-in-form'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="font-semibold text-xl">Burnout Tracker</span>
          </Link>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
