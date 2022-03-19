/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
import { AnchorHTMLAttributes, ReactElement } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ href, ...rest }: LinkProps): ReactElement<LinkProps> {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...rest} />
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}
