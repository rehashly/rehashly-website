import { LandingH1 } from '@/components/LandingHeading'
import { PageSEO } from '@/components/SEO'
import { siteMetadata } from '@/data/siteMetadata'

export default function Terms() {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title}'s Master Terms of Service`}
        description={siteMetadata.description}
      />
      <LandingH1 className="mt-24 mb-8">Rehashly's Master Terms of Service</LandingH1>
    </>
  )
}
