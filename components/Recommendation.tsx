import { Image } from '@/components/Image'
import { RecommendationParagraph } from '@/components/RecommendationParagraph'
import { TextLink } from '@/components/TextLink'
import React, { HTMLAttributes, ReactElement } from 'react'

type RecommendationProps = {
  author: string
  position: string
  company: string
  link: string
} & HTMLAttributes<HTMLParagraphElement>

export function Recommendation(props: RecommendationProps): ReactElement<RecommendationProps> {
  const { author, position, company, link, children } = props

  return (
    <div className="rounded-md border border-gray-300 p-6 shadow-lg dark:border-gray-600 dark:shadow-[0px_10px_15px_-3px_rgba(255,255,255,0.1),0px_4px_6px_-4px_rgba(255,255,255,0.1)]">
      <Image
        className="-scale-x-100 -scale-y-100"
        alt="Quote"
        src="/static/images/quotes.svg"
        width={20}
        height={20}
      ></Image>
      <RecommendationParagraph className="ml-4 mb-4 inline">{children}</RecommendationParagraph>
      <RecommendationParagraph className="mt-6">
        &mdash;{' '}
        <TextLink href={link}>
          {author}, {position}, {company}
        </TextLink>
      </RecommendationParagraph>
    </div>
  )
}
