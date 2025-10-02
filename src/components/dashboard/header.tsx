import { signOut } from '@/app/auth/actions'
import { Button } from '@/components/ui/button'

interface DashboardHeaderProps {
  userName: string | null
}

export function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border/40 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">B</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Burnout Tracker</h1>
            {userName && (
              <p className="text-xs text-muted-foreground">Welcome, {userName}</p>
            )}
          </div>
        </div>
        <form action={signOut}>
          <Button type="submit" variant="outline" size="sm">
            Sign Out
          </Button>
        </form>
      </div>
    </header>
  )
}
