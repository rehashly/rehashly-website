import React, { HTMLAttributes, ReactElement } from 'react'

type RecommendationParagraphProps = HTMLAttributes<HTMLParagraphElement>

export function RecommendationParagraph(
  props: RecommendationParagraphProps
): ReactElement<RecommendationParagraphProps> {
  const { className, children, ...rest } = props

  return (
    <p
      className={`text-left text-xl text-gray-900 dark:text-gray-200 xl:text-left xl:text-2xl ${className}`}
      {...rest}
    >
      {children}
    </p>
  )
}
