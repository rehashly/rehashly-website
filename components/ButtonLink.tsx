import { Link } from '@/components/Link'
import React, { AnchorHTMLAttributes } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function TextLink(props: TextLinkProps) {
  const { className, ...rest } = props
  return (
    <Link
      className={
        'h-10 rounded-md bg-primary-500 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 ' +
        `hover:bg-primary-700 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 ${className}`
      }
      {...rest}
    />
  )
}
