/* eslint-disable react/display-name */
import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import { Pre } from '@/components/Pre'
import { TOCInline } from '@/components/TOCInline'
import { getMDXComponent } from 'mdx-bundler/client'
import React, { useMemo } from 'react'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

export const MDXComponents: Record<string, React.ComponentType<any>> = {
  Image,
  //@ts-ignore
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
