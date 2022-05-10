import React, { HTMLAttributes, ReactElement } from 'react'

type LandingHeadingProps = HTMLAttributes<HTMLHeadingElement>

export function LandingH1(props: LandingHeadingProps): ReactElement<LandingHeadingProps> {
  const { className, children, ...rest } = props

  return (
    <h1
      className={`text-center text-4xl font-black text-black xl:text-left xl:text-6xl ${className}`}
      {...rest}
    >
      {children}
    </h1>
  )
}

export function LandingH2(props: LandingHeadingProps): ReactElement<LandingHeadingProps> {
  const { className, children, ...rest } = props

  return (
    <h2
      className={`text-center text-3xl font-extrabold xl:text-left xl:text-4xl ${className}`}
      {...rest}
    >
      {children}
    </h2>
  )
}

export function LandingH3(props: LandingHeadingProps): ReactElement<LandingHeadingProps> {
  const { className, children, ...rest } = props

  return (
    <h3 className={`text-left text-xl font-bold xl:text-2xl ${className}`} {...rest}>
      {children}
    </h3>
  )
}
