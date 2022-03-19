/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { Plausible } from '@/components/analytics/Plausible'
import { SimpleAnalytics } from '@/components/analytics/SimpleAnalytics'
import { Umami } from '@/components/analytics/Umami'
import { siteMetadata } from '@/data/siteMetadata'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (...args: any[]) => void
    sa_event?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

export function Analytics() {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GoogleAnalytics />}
    </>
  )
}
