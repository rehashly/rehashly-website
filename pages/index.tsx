import { ButtonLink } from '@/components/ButtonLink'
import { ContactForm } from '@/components/ContactForm'
import { Image } from '@/components/Image'
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
              <LandingH1>Ship well-architected AWS solutions, fast.</LandingH1>
              <LandingParagraph className="text-center">
                Get help building resilient, secure and cost-optimized AWS solutions from an ex-AWS
                engineer.
              </LandingParagraph>
              <div className="flex flex-row justify-center xl:justify-start">
                <ButtonLink className="w-48" href="#contact">
                  Start building
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="Well-architected AWS solutions."
                src="/static/images/hero.svg"
                className="max-w-full object-fill object-center"
                width={450}
                height={410}
              />
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="Haitham Gad"
                src="/static/images/haitham.png"
                className="rounded-full"
                width={350}
                height={350}
              />
            </div>
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2 id="about">About me</LandingH2>
              <LandingParagraph>
                Haitham is a senior software engineer with over 15 years of experience building
                products and services for several enterprises. Before starting his own cloud
                consultancy, Haitham spent over 5 years with AWS, where he helped build Amazon
                GuardDuty, AWS's intelligent threat detection service. His work on the service was
                instrumental in accelerating the adoption of GuardDuty by thousands of AWS customers
                like Snap, HBO Max, Siemens, Volkswagen and Southwest Airlines.
              </LandingParagraph>
              <LandingParagraph className="mb-0">
                Haitham helps businesses deliver value quickly, reduce infrastructure costs, improve
                security posture and achieve operational excellence by utilizing the right mix of
                AWS technologies.
              </LandingParagraph>
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col">
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Security from the outset</LandingH2>
              <LandingParagraph>
                When done right, data and workloads are more secure in the cloud than on-prem.
                However, without the right experience, security in the cloud can be tricky. Resource
                misconfigurations and integration anti-patterns can leave your infrastructure
                exposed.
              </LandingParagraph>
              <div className="flex flex-col gap-1">
                <LandingH3>Builder with a security focus</LandingH3>
                <LandingParagraph>
                  Haitham built and operated{' '}
                  <TextLink href="https://aws.amazon.com/guardduty/">
                    an AWS security service
                  </TextLink>{' '}
                  for over 5 years and led many compliance efforts, AppSec reviews and SecOps
                  engagements.
                </LandingParagraph>
              </div>
              <div className="flex flex-col gap-1">
                <LandingH3>Threat modeling expert</LandingH3>
                <LandingParagraph>
                  Haitham led numerous AppSec reviews, wrote and reviewed dozens of threat models
                  and worked closely with AppSec teams to mitigate the most subtle and intricate AWS
                  attack vectors.
                </LandingParagraph>
              </div>
              <div className="flex flex-col gap-1">
                <LandingH3>Certified security specialist</LandingH3>
                <LandingParagraph>
                  Haitham is an AWS certified security specialtist.
                </LandingParagraph>
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
                Haitham helps businesses build solutions that protect sensitive data at rest and in
                transit, enforce least privilege access to resources, and ensure proper handling of
                untrusted user input.
              </LandingParagraph>
              <div className="flex flex-row justify-center xl:justify-start">
                <ButtonLink className="w-64" href="#contact">
                  Secure your cloud footprint
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="Security in-depth"
                src="/static/images/aws-security.svg"
                className="object-fill object-center"
                width={450}
                height={350}
              />
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="AWS cost optimization"
                src="/static/images/aws-cost-optimization.svg"
                className="object-fill object-center"
                width={350}
                height={250}
              />
            </div>
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
                At AWS, Haitham helped reduce infrastructure spend, at times by more than $60K/month
                by leveraging serverless architectures and optimizing compute and network egress
                costs.
              </LandingParagraph>
              <LandingParagraph>
                Haitham helps businesses build robust cost-optimized solutions that scale gracefully
                in terms of cost.
              </LandingParagraph>
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col">
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Start small. Scale instantly.</LandingH2>
              <LandingParagraph>
                The worst outages happen during a demand surge. Resilient and scalable solutions
                allow room for growth and can gracefully handle sudden load spikes.
              </LandingParagraph>
              <LandingParagraph>
                Haitham built and operated event-driven services that autoscale to handle millions
                of events per minute and automatically release capacity when load subsides to avoid
                incurring unnecessary costs.
              </LandingParagraph>
              <LandingParagraph>
                Haitham helps businesses build resilient and scalable solutions that maintain
                business continuity under unanticipated load spikes.
              </LandingParagraph>
            </div>
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="Scalable designs"
                src="/static/images/aws-scale.svg"
                className="object-fill object-center"
                width={450}
                height={350}
              />
            </div>
          </LandingSection>
          <LandingSection flexColDirection="flex-col-reverse">
            <div className="flex flex-row justify-center xl:w-[45%]">
              <Image
                alt="AWS operational excellence"
                src="/static/images/aws-operational-excellence.svg"
                className="object-fill object-center"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-6 xl:w-[45%]">
              <LandingH2>Cultivate your DevOps culture</LandingH2>
              <LandingParagraph>
                To iterate fast, businesses need systems and processes in place to stop bad code
                from reaching production and alert their team when your services are experiencing
                disruption.
              </LandingParagraph>
              <LandingParagraph>
                Haitham built dozens of microservices, with in-depth logging, monitoring and
                alerting. He wrote numerous unit tests, integration tests, canary tests and
                runbooks, and built many CI/CD deployment pipelines with continuous monitoring and
                automatic rollbacks.
              </LandingParagraph>
              <LandingParagraph className="mb-0">
                Haitham will educate your team on DevOps best practices and help you build
                production-grade operationally-ready AWS solutions with well-documented operational
                runbooks.
              </LandingParagraph>
              <div className="flex flex-row justify-center xl:justify-start">
                <ButtonLink className="w-44" href="#contact">
                  Start building
                </ButtonLink>
              </div>
            </div>
          </LandingSection>
        </div>
        <div className="flex flex-col gap-6">
          <LandingH2 className="text-center xl:text-center">Reviews</LandingH2>
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
            author="Shane Pereira"
            position="Former Principal Engineer"
            company="AWS"
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
          {/*
          <div className="align-center flex flex-row justify-center">
            <LandingParagraph className="flex w-80 flex-col xl:w-96">
              I typically respond within 1-2 business days.
            </LandingParagraph>
          </div>
          */}
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
