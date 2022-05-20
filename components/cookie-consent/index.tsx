/* eslint-disable @typescript-eslint/no-explicit-any */
import { KlaroWidget } from '@/components/cookie-consent/KlaroWidget'
import { siteMetadata } from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

export function CookieConsent() {
  return <>{isProduction && siteMetadata.cookieConsent.klaroConfig && <KlaroWidget />}</>
}
