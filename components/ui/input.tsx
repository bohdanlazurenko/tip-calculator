import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grayish-cyan text-xl">
            {icon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border-0 bg-very-light-grayish-cyan px-4 py-2 text-2xl font-bold text-very-dark-cyan placeholder:text-grayish-cyan focus:bg-white focus:outline-none focus:ring-2 focus:ring-strong-cyan disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-12",
            "text-right",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }