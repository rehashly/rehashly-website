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
  const heroMessage = 'Ship well-architected AWS solutions, fast.'

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
                Get help building and shipping resilient, secure and cost-optimized solutions on
                AWS; from an Ex-AWS engineer.
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
                lightSrc="/static/images/hero-light.svg"
                darkSrc="/static/images/hero-dark.svg"
                className="object-fill object-center"
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
                Hi there 👋 , this is Haitham Gad.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                Before starting Rehashly, I've been building software for 15+ years; the last 5+ of
                which at AWS, where I helped build and grow{' '}
                <TextLink href="https://aws.amazon.com/guardduty">Amazon GuardDuty</TextLink> into
                an indispensible threat detection service in the hands of SecOps teams.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                I will use my experience building, launching and operating an AWS service to help
                you ship reliable, secure and operationally-sound solutions on AWS.
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
            <div className="order-5">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:text-left xl:text-5xl">
                Security from the outset
              </h2>
              <LandingParagraph className="mb-6">
                Security is priority zero. Don't get breached because of a resource misconfiguration
                or improper handling of user input.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                At AWS, I ran an AppSec review acceleration program where I wrote and reviewed
                numerous threat models. I also led many compliance efforts and SecOps engagements as
                part of this role. As such, I'm intimiately familiar with a wide range of AWS attack
                vectors and mitigation strategies.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                I will use this experience to build solutions that protect your sensitive data at
                rest and in transit, enforce least privilege access to resources, and ensure proper
                handling of untrusted user input.
              </LandingParagraph>
            </div>
            <div className="order-6">
              <InvertibleImage
                alt="Security from the outset"
                lightSrc="/static/images/security-light.svg"
                darkSrc="/static/images/security-dark.svg"
                className="object-fill object-center"
                width={450}
                height={350}
              />
            </div>
          </div>
          <div className="mt-20">
            <h2 className="mb-8 text-center text-4xl font-extrabold xl:text-5xl">Reviews</h2>
            <Recommendation
              author="Shane Pereira"
              position="Principal Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              I worked with Haitham for over 4 years on Amazon GuardDuty, a threat detection service
              on AWS. He was the go-to engineer in the org for all things security related, from
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
              Haitham was the first engineer in the team to be certified as an AWS AppSec Guardian,
              which is a critical role given the risks involved. It requires a cool head, high
              judgement, the ability to chase a problem down by navigating across several teams at
              Amazon, and the ability to clearly articulate and debate often highly contentious
              positions with the most senior engineers at Amazon. It also requires a combination of
              a high-level understanding of the overall architecture of the entire service, as well
              as the ability to dive as deep into a variety of security technologies and processes
              when needed. In this responsibility as an AppSec Guardian, he educated engineers on
              threat modeling and ensured they have mitigations (or plans for mitigations) to the
              most common issues probed by AppSec. In the AppSec review meetings, Haitham helps the
              AppSec engineer understand the context of the new feature (where it fits in the larger
              GuardDuty architecture), any concerning or unconventional design choices and the
              reasoning behind them. Haitham also helps GuardDuty engineers understand AppSec's
              concerns and the effective ways to mitigate them.
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
              author="Arun Prabakaran"
              position="Senior Software Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              I worked with Haitham on Amazon GuardDuty. Haitham is a strong engineer who insists on
              highest standards. It was remarkable how he implemented a feature involving
              organization of multiple AWS accounts in a short span of time during the early stages
              of GuardDuty, which is being used by multiple other AWS teams and sets an example for
              insisting on highest standards for other features. He played a big role in AppSec
              reviews for other feature launches as well. Haitham is very strong in AWS fundamentals
              and is easy to work with.
            </Recommendation>
            <Recommendation
              author="Subramanian Kaleeswaran"
              position="Software Development Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              I worked with Haitham while building up AWS GuardDuty. Haitham is very independent and
              very easy to work with. Haitham held a high bar for security when building software
              and worked across teams to keep it. Haitham made sure our software architecture and
              code was secure. His experience with securing cloud architectures, infrastructure and
              pretty much securing anything in AWS is invaluable!
            </Recommendation>
            <Recommendation
              author="Rashmi Giridhara"
              position="Software Development Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              I worked with Haitham for over 3 years on AWS GuardDuty, since 2018. Haitham is an
              experienced software developer with strong foundation of cloud services. He worked on
              leading and implementing several aspects of GuardDuty, few of which include multi
              account feature, API/CloudFormation support for GuardDuty resources. In addition to
              this he lead the AppSec review for the new feature launches which showcased his
              expertise and passion for security. He was a go-to engineer on the team for security
              review of existing and new services. Haitham's knowledge on system design made him a
              good teammate to bounce ideas off and he is easy to work with.
            </Recommendation>
            <Recommendation
              author="Conor Lorsung"
              position="Software Development Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              Haitham is a talented engineer who has a passion for security. He helped mentor me in
              GuardDuty; providing security insights when developing public-facing APIs, and
              otherwise working to secure our systems. He has great expertise in many facets of
              application security, and was our go-to engineer when creating, iterating on, and
              producing security reviews. He led our AppSec reviews for new feature work, and would
              drive the team towards making the right decisions without compromising on security
              quality. His contributions extend far past security, as he consistently worked to make
              our infrastructure more stable and scalable. The passion and drive Haitham has for
              building make him a pleasure to work with, and an invaluable teammate.
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
