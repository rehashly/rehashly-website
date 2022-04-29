import { Link } from '@/components/Link'
import React, { AnchorHTMLAttributes } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function ButtonLink(props: ButtonLinkProps) {
  const { className, ...rest } = props
  return (
    <Link
      className={
        'rounded-md bg-primary-500 py-2 px-4 text-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 ' +
        `hover:bg-primary-700 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 ${className}`
      }
      {...rest}
    />
  )
}
