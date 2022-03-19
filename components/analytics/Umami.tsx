import { siteMetadata } from '@/data/siteMetadata'
import Script from 'next/script'

export function Umami() {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        src="https://umami.example.com/umami.js" // Replace with your umami instance
      />
    </>
  )
}
