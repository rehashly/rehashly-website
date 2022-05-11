import { ButtonLink } from '@/components/ButtonLink'
import { ContactForm } from '@/components/ContactForm'
import { Image } from '@/components/Image'
import { InvertibleImage } from '@/components/InvertibleImage'
import { LandingEmphasis } from '@/components/LandingEmphasis'
import { LandingH1, LandingH2, LandingH3 } from '@/components/LandingHeading'
import { LandingParagraph } from '@/components/LandingParagraph'
import { LandingSection } from '@/components/LandingSection'
import { Recommendation } from '@/components/Recommendation'
import { PageSEO } from '@/components/SEO'
import { TextLink } from '@/components/TextLink'
import { siteMetadata } from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col gap-48 xl:gap-72">
        <div className="mt-[12vh] flex flex-col gap-48 xl:mt-[20vh] xl:gap-72">
          <LandingSection flexColDirection="flex-col">
            <div className="flex flex-col gap-8 xl:w-[45%]">
              <LandingH1>Build AWS solutions the way AWS does it.</LandingH1>
              <LandingParagraph className="text-center">
                Get help building resilient, secure and cost-optimized AWS solutions from an ex-AWS
                engineer.
              </LandingParagraph>
              <div className="flex justify-center xl:justify-start">
                <ButtonLink href="#contact">Get in touch</ButtonLink>
              </div>
            </div>
            <InvertibleImage
              alt="Well-architected AWS solutions."
              lightSrc="/static/images/hero-light.svg"
              darkSrc="/static/images/hero-dark.svg"
              className="max-w-full object-fill object-center"
              width={450}
              height={410}
            />
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <Image
              alt="Haitham Gad"
              src="/static/images/haitham.png"
              className="mb-0 rounded-full object-fill object-center"
              width={350}
              height={350}
            />
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2 id="about">About me</LandingH2>
              <LandingParagraph>
                Hi there 👋 , this is Haitham Gad. I've been building software for the past 15+
                years.
              </LandingParagraph>
              <LandingParagraph>
                I spent 5+ years at AWS building and operating AWS services with strong requirements
                on security, reliability, scalability and operational excellence.
              </LandingParagraph>
              <LandingParagraph className="mb-0">
                I started Rehashly to help businesses deliver value quickly, reduce their
                infrastructure costs, improve their security posture and achieve operational
                excellence by utilizing the right mix of AWS technologies.
              </LandingParagraph>
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col">
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Security in-depth</LandingH2>
              <LandingParagraph>
                When done right, data and workloads are more secure in the cloud than on-prem.
                However, without the right experience, security in the cloud can be tricky. Resource
                misconfigurations and integration anti-patterns can leave your infrastructure
                exposed.
              </LandingParagraph>
              <div className="flex flex-col gap-1">
                <LandingH3>Builder with a security focus</LandingH3>
                <LandingParagraph>
                  I built and operated{' '}
                  <TextLink href="https://aws.amazon.com/guardduty/">
                    an AWS security service
                  </TextLink>{' '}
                  for more than 5 years and led many compliance efforts and SecOps engagements.
                </LandingParagraph>
              </div>
              <div className="flex flex-col gap-1">
                <LandingH3>Threat modeling expert</LandingH3>
                <LandingParagraph>
                  I led numerous AppSec reviews, wrote and reviewed many threat models and worked
                  closely with AppSec teams to mitigate the most subtle and intricate AWS attack
                  vectors.
                </LandingParagraph>
              </div>
              <div className="flex flex-col gap-1">
                <LandingH3>Certified security specialist</LandingH3>
                <LandingParagraph>I'm certified by AWS in the security specialty.</LandingParagraph>
                <LandingParagraph className="mt-6 text-center xl:text-center">
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
              <LandingParagraph>
                I will help you build solutions that protect your sensitive data at rest and in
                transit, enforce least privilege access to resources, and ensure proper handling of
                untrusted user input.
              </LandingParagraph>
            </div>
            <InvertibleImage
              alt="Security in-depth"
              lightSrc="/static/images/aws-security-light.svg"
              darkSrc="/static/images/aws-security-dark.svg"
              className="object-fill object-center"
              width={450}
              height={350}
            />
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <InvertibleImage
              alt="AWS cost optimization"
              lightSrc="/static/images/aws-cost-optimization-light.svg"
              darkSrc="/static/images/aws-cost-optimization-dark.svg"
              className="object-fill object-center"
              width={350}
              height={250}
            />
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Robust solutions that don't break the bank</LandingH2>
              <LandingParagraph>
                It is estimated that businesses{' '}
                <TextLink href="https://www.infoworld.com/article/3543754/during-covid-19-wasting-30-percent-of-cloud-spend-is-not-ok.html">
                  waste 30% of their cloud spend
                </TextLink>
                .
              </LandingParagraph>
              <LandingParagraph>
                At AWS, I helped reduce infrastructure spend, at times by more than $60K/month by
                leveraging serverless architectures and optimizing compute and network egress costs.
              </LandingParagraph>
              <LandingParagraph>
                I will help you build robust cost-optimized solutions that scale gracefully in terms
                of cost.
              </LandingParagraph>
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col">
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Start small. Scale indefinitely.</LandingH2>
              <LandingParagraph>
                Resilient and scalable designs allow room for growth and can gracefully handle
                sudden load spikes.
              </LandingParagraph>
              <LandingParagraph>
                At AWS, I built and operated event-driven services that autoscale to handle millions
                of events and automatically release capacity when load subsides to avoid incurring
                unnecessary costs.
              </LandingParagraph>
              <LandingParagraph>
                I will help you build resilient and scalable solutions that maintain business
                continuity under unexpected load spikes.
              </LandingParagraph>
            </div>
            <InvertibleImage
              alt="Security from the outset"
              lightSrc="/static/images/aws-scale-light.svg"
              darkSrc="/static/images/aws-scale-dark.svg"
              className="object-fill object-center"
              width={450}
              height={350}
            />
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <InvertibleImage
              alt="AWS operational excellence"
              lightSrc="/static/images/aws-operational-excellence-light.svg"
              darkSrc="/static/images/aws-operational-excellence-dark.svg"
              className="object-fill object-center"
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Raise the operational excellence bar</LandingH2>
              <LandingParagraph>
                In-depth observability, continuous integration and delivery, alerts and automatic
                rollbacks are crucial in an operationally-sound solution.
              </LandingParagraph>
              <LandingParagraph>
                At AWS, I built many microservices, with in-depth logging, monitoring and alerting.
                I wrote plenty of unit tests, integration tests, canary tests and runbooks, and
                built many CI/CD deployment pipelines with continuous monitoring and automatic
                rollbacks.
              </LandingParagraph>
              <LandingParagraph className="mb-0">
                I will help you build production-grade operationally-ready AWS solutions with
                well-documented operational runbooks.
              </LandingParagraph>
            </div>
          </LandingSection>
        </div>
        <div className="flex flex-col gap-6">
          <LandingH2 className="text-center xl:text-center">Reviews</LandingH2>
          <Recommendation
            author="Shane Pereira"
            position="Partner Software Architect"
            company="Microsoft"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Each application security related issue is unique, and requires someone with{' '}
            <LandingEmphasis>
              deep understanding of AWS, a cool disposition, high judgement, creativity, and
              pragmatism
            </LandingEmphasis>{' '}
            to figure out where to set the security bar so as to ensure the right outcome for the
            customer, and for Amazon. <LandingEmphasis>Haitham has this in spades</LandingEmphasis>!
          </Recommendation>
          <Recommendation
            author="Sunu Mathew"
            position="Senior Software Engineer"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Haitham is a <LandingEmphasis>strong and experienced engineer</LandingEmphasis> with a
            passion for securing cloud applications. He played a pivotal role over several years in
            securing GuardDuty's AWS infrastructure using best practices and leading AppSec review
            efforts for new feature launches.{' '}
            <LandingEmphasis>He has great judgement and makes the right choices</LandingEmphasis> in
            evaluating and addressing application security aspects associated with large software
            projects.
          </Recommendation>
          <Recommendation
            author="Arun Prabakaran"
            position="Senior Software Engineer"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            It was remarkable how Haitham implemented a feature involving the organization of
            multiple AWS accounts <LandingEmphasis>in a short span of time</LandingEmphasis> during
            the early stages of GuardDuty, which is being used by multiple other AWS teams and{' '}
            <LandingEmphasis>sets an example for insisting on highest standards</LandingEmphasis>.
          </Recommendation>
          <Recommendation
            author="Wei Wang"
            position="Engineering Manager"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Haitham was the first engineer on the team to be{' '}
            <LandingEmphasis>
              certified as an AWS AppSec Guardian, which is a critical role given the risks involved
            </LandingEmphasis>
            . It requires a cool head, high judgement, the ability to chase a problem down by
            navigating across several teams at Amazon, and{' '}
            <LandingEmphasis>
              the ability to clearly articulate and debate often highly contentious positions with
              the most senior engineers at Amazon
            </LandingEmphasis>
            .
          </Recommendation>
          <Recommendation
            author="Rashmi Giridhara"
            position="Software Development Engineer"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Haitham is an experienced software developer with{' '}
            <LandingEmphasis>strong foundation of cloud services</LandingEmphasis>. Haitham's
            knowledge on system design made him a good teammate to bounce ideas off and is easy to
            work with.
          </Recommendation>
          <Recommendation
            author="Subramanian Kaleeswaran"
            position="Software Development Engineer"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Haitham is{' '}
            <LandingEmphasis>very independent and very easy to work with</LandingEmphasis>. Haitham
            held a high bar for security when building software and worked across teams to maintain
            it.{' '}
            <LandingEmphasis>
              His experience with securing cloud architectures is invaluable
            </LandingEmphasis>
            !
          </Recommendation>
          <Recommendation
            author="Conor Lorsung"
            position="Software Development Engineer"
            company="AWS"
            link="https://www.linkedin.com/in/haithamgad/details/recommendations"
          >
            Haitham is a talented engineer who has a passion for security. He helped mentor me in
            GuardDuty; providing security insights when developing public-facing APIs, and otherwise
            working to secure our systems.{' '}
            <LandingEmphasis>
              He has great expertise in many facets of application security
            </LandingEmphasis>
            , and was our go-to engineer when creating, iterating on, and producing security
            reviews. He led our AppSec reviews for new feature work, and{' '}
            <LandingEmphasis>
              he would drive the team towards making the right decisions
            </LandingEmphasis>{' '}
            without compromising on security quality. The passion and drive Haitham has for building
            make him a pleasure to work with, and an invaluable teammate.
          </Recommendation>
        </div>
        <div id="contact" className="flex flex-col gap-6">
          <LandingH2 className="text-center xl:text-center">Get in touch</LandingH2>
          <div className="align-center flex flex-row justify-center">
            <LandingParagraph className="flex w-80 flex-col xl:w-96">
              I typically respond within 1-2 business days.
            </LandingParagraph>
          </div>
          <ContactForm />
        </div>
        {/*
        <div className="flex items-center justify-center pt-20">
          <NewsletterForm title="Subscribe for practical advice on securing your data and workloads on AWS" />
        </div>
        */}
      </div>
    </>
  )
}
