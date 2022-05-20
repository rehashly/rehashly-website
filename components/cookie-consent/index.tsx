import { KlaroWidget } from '@/components/cookie-consent/KlaroWidget'
import { siteMetadata } from '@/data/siteMetadata'

export function CookieConsent() {
  return <>{siteMetadata.cookieConsent.klaroConfig && <KlaroWidget />}</>
}
