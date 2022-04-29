import { ButtonLink } from '@/components/ButtonLink'
import { Image } from '@/components/Image'
import { InvertibleImage } from '@/components/InvertibleImage'
import { LandingParagraph } from '@/components/LandingParagraph'
import { Recommendation } from '@/components/Recommendation'
import { PageSEO } from '@/components/SEO'
import { TextLink } from '@/components/TextLink'
import { siteMetadata } from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {siteMetadata.newsletter.provider !== '' && (
        <div>
          <div className="xl:justify-items-left grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-20 pt-20 xl:mt-[7vh] xl:mb-64 xl:grid-cols-2 xl:gap-y-64">
            <div className="order-1">
              <h2 className="mb-6 text-center text-5xl font-extrabold xl:text-left xl:text-6xl">
                Build AWS solutions the way AWS does it.
              </h2>
              <LandingParagraph className="mb-5">
                Get help building resilient, secure and cost-optimized AWS solutions from an Ex-AWS
                engineer.
              </LandingParagraph>
              <div className="flex justify-center xl:justify-start">
                <ButtonLink href="https://calendly.com/hgad/30min">
                  Schedule a free consultation
                </ButtonLink>
              </div>
            </div>
            <div className="order-2">
              <InvertibleImage
                alt="Well-architected AWS solutions."
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
                src="/static/images/haitham.png"
                className="mb-0 rounded-full object-fill object-center"
                width={350}
                height={350}
              />
            </div>
            <div className="order-3 xl:order-4">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:mt-8 xl:text-left xl:text-5xl">
                About me.
              </h2>
              <LandingParagraph className="mb-6">
                Hi there 👋 , this is Haitham Gad, a 15+ years software engineering veteran.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                Before starting Rehashly, I spent 5+ years at AWS building and operating AWS
                services with strong requirements on security, reliability, scalability and
                operational excellence.
              </LandingParagraph>
              <LandingParagraph>
                I will use this experience to help you ship reliable, secure and operationally-sound
                solutions on AWS.
              </LandingParagraph>
            </div>
            <div className="order-5">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:mt-8 xl:text-left xl:text-5xl">
                Security baked-in.
              </h2>
              <LandingParagraph className="mb-6">
                Security is priority zero. It's also my deepest obsession.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                Besides building and operating an{' '}
                <TextLink href="https://aws.amazon.com/guardduty/">AWS security service</TextLink>,
                I ran an AppSec review acceleration program where I wrote and reviewed numerous
                threat models and incident response runbooks and led plenty of AppSec, compliance
                and SecOps engagements.
              </LandingParagraph>
              <LandingParagraph className="my-7 xl:text-center">
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
              <LandingParagraph className="mb-6">
                I will use this experience to help you build solutions that protect your sensitive
                data at rest and in transit, enforce least privilege access to resources, and ensure
                proper handling of untrusted user input.
              </LandingParagraph>
            </div>
            <div className="order-6">
              <InvertibleImage
                alt="Security from the outset"
                lightSrc="/static/images/aws-security-light.svg"
                darkSrc="/static/images/aws-security-dark.svg"
                className="object-fill object-center"
                width={450}
                height={350}
              />
            </div>
            <div className="order-8 xl:order-7">
              <InvertibleImage
                alt="AWS cost optimization"
                lightSrc="/static/images/aws-cost-optimization-light.svg"
                darkSrc="/static/images/aws-cost-optimization-dark.svg"
                className="object-fill object-center"
                width={350}
                height={250}
              />
            </div>
            <div className="order-7 xl:order-8">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:mt-8 xl:text-left xl:text-5xl">
                Robust solutions that don't break the bank.
              </h2>
              <LandingParagraph className="mb-6">
                It is estimated that businesses{' '}
                <TextLink href="https://www.infoworld.com/article/3543754/during-covid-19-wasting-30-percent-of-cloud-spend-is-not-ok.html">
                  waste 30% of their cloud spend
                </TextLink>
                . Infrastructure costs can literally make or break a solution design.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                At AWS, I helped reduce infrastructure spend, at times by more than $60K/month by
                leveraging serverless architectures and optimizing compute and network egress costs.
              </LandingParagraph>
              <LandingParagraph>
                I will use this experience to help you build robust cost-optimized solutions that
                scale gracefully in terms of cost.
              </LandingParagraph>
            </div>
            <div className="order-9">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:mt-8 xl:text-left xl:text-5xl">
                Start small. Scale indefinitely.
              </h2>
              <LandingParagraph className="mb-6">
                Resilient and scalable designs allow room for growth and can gracefully handle
                sudden load spikes.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                At AWS, I built and operated event-driven services that autoscale to handle millions
                of events and automatically release capacity when load subsides to avoid incurring
                unnecessary costs.
              </LandingParagraph>
              <LandingParagraph>
                I will use this experience to help you build resilient and scalable solutions that
                ensure business continuity under unexpected load spikes.
              </LandingParagraph>
            </div>
            <div className="order-10">
              <InvertibleImage
                alt="Security from the outset"
                lightSrc="/static/images/aws-scale-light.svg"
                darkSrc="/static/images/aws-scale-dark.svg"
                className="object-fill object-center"
                width={450}
                height={350}
              />
            </div>
            <div className="order-12 xl:order-11">
              <InvertibleImage
                alt="AWS operational excellence"
                lightSrc="/static/images/aws-operational-excellence-light.svg"
                darkSrc="/static/images/aws-operational-excellence-dark.svg"
                className="object-fill object-center"
                width={400}
                height={400}
              />
            </div>
            <div className="order-11 xl:order-12">
              <h2 className="mb-6 text-center text-4xl font-extrabold xl:mt-8 xl:text-left xl:text-5xl">
                Raise the operational excellence bar.
              </h2>
              <LandingParagraph className="mb-6">
                You can't fix what you can't see. In-depth observability, CI/CD pipelines, alerts
                and automatic rollbacks are non-negotiable in an operationally-sound design.
              </LandingParagraph>
              <LandingParagraph className="mb-6">
                At AWS, I built many microservices, with in-depth logging, monitoring and alerting.
                I wrote plenty of unit tests, integration tests, canary tests and runbooks, and
                implemented a lot of CI/CD deployment pipelines with automatic rollbacks.
              </LandingParagraph>
              <LandingParagraph>
                I will use this experience to help you build production-grade operationally-ready
                AWS solutions with well-documented operational runbooks.
              </LandingParagraph>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="mb-8 text-center text-4xl font-extrabold xl:mt-8 xl:text-5xl">
              Reviews
            </h2>
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
              author="Rashmi Giridhara"
              position="Software Development Engineer"
              company="AWS"
              link="https://www.linkedin.com/in/haithamgad/details/recommendations"
            >
              I worked with Haitham for over 3 years on AWS GuardDuty, since 2018. Haitham is an
              experienced software developer with strong foundation of cloud services. He worked on
              leading and implementing several aspects of GuardDuty, few of which include multi
              account feature, API/CloudFormation support for GuardDuty resources. In addition to
              this he lead the AppSec review for new feature launches which showcased his expertise
              and passion for security. He was a go-to engineer on the team for security review of
              existing and new services. Haitham's knowledge on system design made him a good
              teammate to bounce ideas off and he is easy to work with.
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
              author="Shane Pereira"
              position="Partner Software Architect"
              company="Microsoft"
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
              when needed.
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
          {/*
          <div className="flex items-center justify-center pt-20">
            <NewsletterForm title="Subscribe for practical advice on securing your data and workloads on AWS" />
          </div>
          */}
        </div>
      )}
    </>
  )
}
