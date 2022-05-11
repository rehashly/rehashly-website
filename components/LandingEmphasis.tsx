import React, { HTMLAttributes, ReactElement } from 'react'

type LandingEmphasisProps = HTMLAttributes<HTMLSpanElement>

export function LandingEmphasis(props: LandingEmphasisProps): ReactElement<LandingEmphasisProps> {
  const { className, children, ...rest } = props

  return (
    <span className={`rounded-sm bg-primary-200 px-1 font-extrabold ${className}`} {...rest}>
      {children}
    </span>
  )
}
