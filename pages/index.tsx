import NewsletterForm from '@/components/NewsletterForm'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="">
            <h2 className="">Secure your AWS infrastructure and workloads</h2>

            <p className="">Build your secure infrastructure on AWS.</p>
          </div>

          <div className="">
            <NewsletterForm />
          </div>
        </div>
      )}
    </>
  )
}
