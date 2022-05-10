import React, { HTMLAttributes, ReactElement } from 'react'

type LandingParagraphProps = HTMLAttributes<HTMLParagraphElement>

export function LandingParagraph(
  props: LandingParagraphProps
): ReactElement<LandingParagraphProps> {
  const { className, children, ...rest } = props

  return (
    <p
      className={`text-left text-lg text-gray-500 dark:text-gray-400 xl:text-left xl:text-xl ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}
