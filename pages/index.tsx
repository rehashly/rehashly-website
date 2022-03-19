import { ButtonLink } from '@/components/ButtonLink'
import { Image } from '@/components/Image'
import { InvertibleImage } from '@/components/InvertibleImage'
import { LandingParagraph } from '@/components/LandingParagraph'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Recommendation } from '@/components/Recommendation'
import { PageSEO } from '@/components/SEO'
import { TextLink } from '@/components/TextLink'
import { siteMetadata } from '@/data/siteMetadata'

export default function Home() {
  const heroMessage = 'AWS security consulting agency'
  const heroLightImage = '/static/images/hero-light.svg'
  const heroDarkImage = '/static/images/hero-dark.svg'

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {siteMetadata.newsletter.provider !== '' && (
        <div>
          <div className="xl:justify-items-left grid grid-cols-1 items-center justify-items-center gap-20 pt-20 xl:grid-cols-2">
            <div className="order-1">
              <h2 className="mb-6 text-center text-5xl font-extrabold xl:text-left xl:text-6xl">
                {heroMessage}
              </h2>
              <LandingParagraph>
                I help businesses protect their AWS assets and workloads, gain customer trust and
                meet compliance requirements.
              </LandingParagraph>
              <div className="flex justify-center xl:justify-start">
                <ButtonLink className="mt-5" href="https://calendly.com/hgad/30min">
                  Schedule a free call
                </ButtonLink>
              </div>
            </div>
            <div className="order-2">
              <InvertibleImage
                alt={heroMessage}
                lightSrc={heroLightImage}
                darkSrc={heroDarkImage}
                className=" object-fill object-center"
                width={450}
                height={410}
              />
            </div>
            <div className="order-4 xl:order-3">
              <Image
                alt="Haitham Gad"
                src="/static/images/haithamgad.jpg"
                className="mb-0 rounded-full object-fill object-center"
                width={350}
                height={350}
              />
            </div>
            <div className="order-3 xl:order-4">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:text-left xl:text-5xl">
                About me
              </h2>
              <LandingParagraph className="mb-6">
                Hi there 👋 , I'm Haitham Gad, an Ex-AWS engineer turned security consultant.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                At AWS, I helped build{' '}
                <TextLink href="https://aws.amazon.com/guardduty">Amazon GuardDuty</TextLink> and
                led its AppSec engagements and compliance efforts end-to-end.
              </LandingParagraph>
              <LandingParagraph className="my-8 xl:text-center">
                <TextLink href="https://www.credly.com/badges/30af2643-74ed-4251-9f38-fed8f952d834">
                  <Image
                    alt="AWS Security Specialty Certification"
                    src="/static/images/aws-security-specialty-certification.png"
                    className="mx-auto block"
                    width={150}
                    height={150}
                  />
                </TextLink>
              </LandingParagraph>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="mb-8 text-center text-4xl font-extrabold xl:text-5xl">Reviews</h2>
            <Recommendation
              author="Shane Pereira"
              position="Partner Software Architect"
              company="Microsoft"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham was the go-to engineer in the org for all things security related, from
              reviewing the designs for what is a significantly complex service-oriented
              architecture that handles data at high scale, to working with SecOps, AppSec and
              senior leadership to handle security escalations where every minute matters, to
              inventing new solutions to tricky security problems in our designs. Haitham has done
              it all. Each application security related issue is unique, and requires someone with a
              deep understanding of AWS, a cool disposition, high judgement, creativity, and
              pragmatism to figure out where to set the security bar so as to ensure the right
              outcome for the customer, and for Amazon. Haitham has this in spades!
            </Recommendation>
            <Recommendation
              author="Wei Wang"
              position="Engineering Manager"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham was the first engineer on the team to be certified as an AWS AppSec Guardian,
              which is a critical role given the risks involved. It requires a cool head, high
              judgement, the ability to chase a problem down by navigating across several teams at
              Amazon, and the ability to clearly articulate and debate often highly contentious
              positions with the most senior engineers at Amazon. It also requires a combination of
              a high-level understanding of the overall architecture of the entire service, as well
              as the ability to dive deep into a variety of security technologies and processes when
              needed.
            </Recommendation>
            <Recommendation
              author="Sunu Mathew"
              position="Senior Software Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham is a strong and experienced engineer with a passion for securing cloud
              applications. He played a pivotal role over several years in securing GuardDuty's AWS
              infrastructure using best practices and leading AppSec review efforts for new feature
              launches. He has great judgement and makes the right choices in evaluating and
              addressing application security aspects associated with large software projects.
            </Recommendation>
            <Recommendation
              author="Subramanian Kaleeswaran"
              position="Software Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham held a high bar for security when building software and worked across teams to
              keep it. Haitham made sure our software architecture and code was secure. His
              experience with securing cloud architectures, infrastructure and pretty much securing
              anything on AWS is invaluable!
            </Recommendation>
            <Recommendation
              author="Conor Lorsung"
              position="Software Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham has great expertise in many facets of application security, and was our go-to
              engineer when creating, iterating on, and producing security reviews. He led our
              AppSec reviews for new feature work, and would drive the team towards making the right
              decisions without compromising on security quality.
            </Recommendation>
          </div>
          <div className="flex items-center justify-center pt-20">
            <NewsletterForm title="Subscribe for practical advice on securing your data and workloads on AWS" />
          </div>
        </div>
      )}
    </>
  )
}
