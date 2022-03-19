import React, { ButtonHTMLAttributes, ReactElement } from 'react'

type ButtonProps = {
  enabledText?: string
  disabledText?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const { type, className, disabled, enabledText, disabledText, onClick, ...rest } = props
  const buttonText = disabled ? disabledText : enabledText

  return (
    <button
      className={
        `h-10 rounded-md bg-primary-500 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 ` +
        `focus:ring-offset-2 dark:ring-offset-black ${
          disabled ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
        } ${className}`
      }
      aria-label={buttonText}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {buttonText}
    </button>
  )
}
