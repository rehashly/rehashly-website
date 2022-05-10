import { LandingParagraph } from '@/components/LandingParagraph'
import { TextLink } from '@/components/TextLink'
import React, { HTMLAttributes, ReactElement } from 'react'

type RecommendationProps = {
  author: string
  position: string
  company: string
  link: string
} & HTMLAttributes<HTMLParagraphElement>

export function Recommendation(props: RecommendationProps): ReactElement<RecommendationProps> {
  const { author, position, company, link, className, children, ...rest } = props

  return (
    <div className="mb-6 rounded-md border border-gray-300 p-6 shadow-lg dark:border-gray-600 dark:shadow-[0px_10px_15px_-3px_rgba(255,255,255,0.1),0px_4px_6px_-4px_rgba(255,255,255,0.1)]">
      <LandingParagraph className={`mb-0 pb-4 xl:mb-0 ${className}`} {...rest}>
        {`"${children}"`}
      </LandingParagraph>
      <LandingParagraph className={`mb-0 xl:mb-0 ${className}`} {...rest}>
        &mdash;{' '}
        <TextLink href={link}>
          {author}, {position}, {company}
        </TextLink>
      </LandingParagraph>
    </div>
  )
}
