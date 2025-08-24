"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

interface FormInputProps extends React.ComponentProps<"input"> {
  label: string
}

function FormInputs({ className, label, ...props }: FormInputProps) {

  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setHasValue(e.target.value.length > 0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0)
    props.onChange?.(e)
  }

  return (
    <div className="relative">
      <input
        className={cn(
          "w-full bg-transparent border-0 border-b-2 border-gray-600 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors duration-300",
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      <label
        className={cn(
          "absolute left-0 transition-all duration-300 pointer-events-none",
          isFocused || hasValue ? "-top-6 text-sm " : "top-3 text-base text-gray-400",
        )}
      >
        {label}
      </label>
    </div>
  )
}

interface VanishTextareaProps extends React.ComponentProps<"textarea"> {
  label: string
}

function VanishTextarea({ className, label, ...props }: VanishTextareaProps) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    setHasValue(e.target.value.length > 0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0)
    props.onChange?.(e)
  }

  return (
    <div className="relative">
      <textarea
        className={cn(
          "w-full bg-transparent border-0 border-b-2 border-gray-600 px-0 py-3 text-white placeholder-transparent focus:outline-none transition-colors duration-300 resize-none min-h-[100px]",
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      <label
        className={cn(
          "absolute left-0 transition-all duration-300 pointer-events-none",
          isFocused || hasValue ? "-top-6 text-sm" : "top-3 text-base text-gray-400",
        )}
      >
        {label}
      </label>
    </div>
  )
}

export { FormInputs, VanishTextarea }
