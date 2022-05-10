import React, { HTMLAttributes, ReactElement } from 'react'

type LandingSectionProps = HTMLAttributes<HTMLDivElement> & { flexColDirection: string }

export function LandingSection(props: LandingSectionProps): ReactElement<LandingSectionProps> {
  const { className, children, flexColDirection, ...rest } = props

  return (
    <div
      className={`flex ${flexColDirection} items-center gap-y-14 xl:flex-row xl:justify-between ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
