import * as React from 'react'
import { cn } from '@/lib/utils'

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid gap-2', className)}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              checked: child.props.value === value,
              onSelect: onValueChange,
              name: props.id,
            })
          }
          return child
        })}
      </div>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'

interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSelect'> {
  value: string
  onSelect?: (value: string) => void
  checked?: boolean
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, onSelect, checked, name, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(
          'h-4 w-4 cursor-pointer accent-primary',
          className
        )}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onSelect?.(value)}
        {...props}
      />
    )
  }
)
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
