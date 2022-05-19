import { LandingH1, LandingH2, LandingH3 } from '@/components/LandingHeading'
import { LandingParagraph } from '@/components/LandingParagraph'
import { PageSEO } from '@/components/SEO'
import { TextLink } from '@/components/TextLink'
import { siteMetadata } from '@/data/siteMetadata'

export default function Privacy() {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title}'s Privacy Policy`}
        description={siteMetadata.description}
      />
      <LandingH1 className="mt-24 mb-8">Rehashly's Privacy Policy</LandingH1>

      <LandingParagraph className="mb-16 font-extrabold">
        Last Updated: May 18, 2022
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        This Privacy Policy (“Policy”) explains the information collection, use, and sharing
        practices of Rehashly, LLC (“Rehashly,” “we,” “us,” and “our”).
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        This Policy is incorporated into and part of Rehashly Master Terms of Use (“Master Terms”)
        located at <TextLink href="https://rehashly.com/terms">https://rehashly.com/terms</TextLink>
        .
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        Unless otherwise noted on a particular website or service hosted by Rehashly, this Policy
        describes and governs the information collection, use, and sharing practices of Rehashly
        with respect to your use of our websites that link to this Privacy Policy, including{' '}
        <TextLink href="https://rehashly.com">https://rehashly.com</TextLink> and all of its
        subdomains (collectively, the “Websites”), and the services we provide through our Websites
        and/or host on our servers, including the search engine (collectively, the Websites, and the
        services available through them are referred to as the “Services”).
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        Before you use or submit any information through or in connection with the Services, please
        carefully review this Privacy Policy. By using any part of the Services, you understand that
        your information will be collected, used, and disclosed as outlined in this Privacy Policy.
        IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT USE THE SERVICES.
      </LandingParagraph>

      <LandingH2 className="mb-8">Table of Contents</LandingH2>

      <LandingParagraph className="mb-8">
        <ol className="ml-12 list-decimal">
          <TextLink href="#our-principles">
            <li className="mb-2">Our Principles</li>
          </TextLink>
          <TextLink href="#information-we-collect">
            <li className="mb-2">Information We Collect</li>
          </TextLink>
          <TextLink href="#how-we-use-your-information">
            <li className="mb-2">How We Use Your Information</li>
          </TextLink>
          <TextLink href="#when-we-disclose-your-information">
            <li className="mb-2">When We Disclose Your Information</li>
          </TextLink>
          <TextLink href="#legal-basis-for-processing-personal-data">
            <li className="mb-2">Legal Basis for Processing Personal Data</li>
          </TextLink>
          <TextLink href="#online-analytics">
            <li className="mb-2">Online Analytics</li>
          </TextLink>
          <TextLink href="#your-choices-and-data-subject-rights">
            <li className="mb-2">Your Choices and Data Subject Rights</li>
          </TextLink>
          <TextLink href="#international-transfers">
            <li className="mb-2">International Transfers</li>
          </TextLink>
          <TextLink href="#security-measures">
            <li className="mb-2">Security Measures</li>
          </TextLink>
          <TextLink href="#children">
            <li className="mb-2">Children</li>
          </TextLink>
          <TextLink href="#data-retention">
            <li className="mb-2">Data Retention</li>
          </TextLink>
          <TextLink href="#third-party-links-and-services">
            <li className="mb-2">Third-Party Links and Services</li>
          </TextLink>
          <TextLink href="#changes-to-this-privacy-policy">
            <li className="mb-2">Changes to this Privacy Policy</li>
          </TextLink>
          <TextLink href="#questions-about-this-privacy-policy">
            <li className="mb-2">Questions About this Privacy Policy</li>
          </TextLink>
        </ol>
      </LandingParagraph>

      <LandingH2 id="our-principles" className="my-8">
        1. Our Principles
      </LandingH2>

      <LandingParagraph className="mb-8">
        Rehashly has designed this policy to be consistent with the following principles:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-4">Privacy policies should be human readable and easy to find.</li>
          <li className="mb-4">
            Data collection, storage, and processing should be simplified as much as possible to
            enhance security, ensure consistency, and make the practices easy for users to
            understand.
          </li>
          <li className="mb-4">Data practices should meet the reasonable expectations of users.</li>
        </ul>
      </LandingParagraph>

      <LandingH2 id="information-we-collect" className="my-8">
        2. Information We Collect
      </LandingH2>

      <LandingParagraph className="mb-8">
        We collect information in multiple ways, including when you provide information directly to
        us; when we passively collect information from you, such as from your browser or device; and
        from third parties.
      </LandingParagraph>

      <LandingH3 className="my-8">Information You Provide Directly to Us</LandingH3>

      <LandingParagraph className="mb-8">
        We will collect any information you provide to us. We may collect information from you in a
        variety of ways, such as when you: (a) create an online account, (b) make a donation or
        purchase, (c) register for an event, (d) contact us or provide feedback, (e) sign a petition
        distributed by Rehashly, (f) upload your creative work or images, (g) subscribe to our
        newsletter, or (h) apply for a job at Rehashly. This information may include but is not
        limited to your name, email address, phone number, mailing address, payment information,
        photo, geographic location, and your social media handles. We may also collect additional
        demographic and other information about you in connection with our conferences and events
        (e.g., dietary and other preferences), and the provision of this information to us by you is
        optional.
      </LandingParagraph>

      <LandingH3 className="my-8">Information that Is Automatically Collected</LandingH3>

      <LandingParagraph className="mb-8 italic">Device/Usage Information</LandingParagraph>

      <LandingParagraph className="mb-8">
        We may automatically collect certain information about the computer or devices (including
        mobile devices or tablets) you use to access the Services. As described further below, we
        may collect and analyze (a) device information such as IP addresses, location information
        (by country and city), unique device identifiers, IMEI and TCP/IP address, browser types,
        browser language, operating system, mobile device carrier information, and (b) information
        related to the ways in which you interact with the Services, such as referring and exit web
        pages and URLs, platform type, the number of clicks, domain names, landing pages, pages and
        content viewed and the order of those pages, statistical information about the use of the
        Services, the amount of time spent on particular pages, the date and time you used the
        Services, the frequency of your use of the Services, error logs, and other similar
        information. As described further below, we may use third-party analytics providers and
        technologies, including cookies and similar tools, to assist in collecting this information.
      </LandingParagraph>

      <LandingParagraph className="mb-8 italic">
        Cookies and Other Tracking Technologies
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        We also collect data about your use of the Services through the use of Internet server logs
        and online tracking technologies, like cookies and/or tracking pixels. A web server log is a
        file where website activity is stored. A cookie is a small text file that is placed on your
        computer when you visit a website, that enables us to: (a) recognize your computer; (b)
        store your preferences and settings; (c) understand the web pages of the Services you have
        visited and the referral sites that have led you to our Services; (d) enhance your user
        experience by delivering content specific to your inferred interests; (e) perform searches
        and analytics; and (f) assist with security administrative functions. Tracking pixels
        (sometimes referred to as web beacons or clear GIFs) are tiny electronic tags with a unique
        identifier embedded in websites, online ads and/or email, and that are designed to provide
        usage information like ad impressions or clicks, measure popularity of the Services and
        associated advertising, and to access user cookies. If you receive email from us (such as
        the Rehashly newsletter, campaign updates, or other ongoing email communications from
        Rehashly), we may use certain analytics tools, such as clear GIFs, to capture data such as
        whether you open our message, click on any links or banners our email contains, or otherwise
        interact with what we send. This data allows us to gauge the effectiveness of our
        communications and marketing campaigns. As we adopt additional technologies, we may also
        gather additional information through other methods.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        Please note that you can change your settings to notify you when a cookie is being set or
        updated, or to block cookies altogether. Please consult the “Help” section of your browser
        for more information (e.g.,{' '}
        <TextLink href="http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies">
          Internet Explorer
        </TextLink>
        ;{' '}
        <TextLink href="https://support.google.com/chrome/answer/95647?hl=en">
          Google Chrome
        </TextLink>
        ; <TextLink href="http://kb.mozillazine.org/Cookies#Firefox">Mozilla Firefox</TextLink>; or{' '}
        <TextLink href="https://support.apple.com/kb/PH5042">Apple Safari</TextLink>). Please note
        that by blocking any or all cookies, you may not have access to certain features or
        offerings of the Services.
      </LandingParagraph>

      <LandingH3 className="my-8">Information from Third Parties</LandingH3>

      <LandingParagraph className="mb-8">
        We may also collect information about you or others through third parties. To the extent
        permitted by law, we may also collect information from third parties, including public
        sources, social media platforms, and marketing and market research firms. Depending on the
        source, this information collected from third parties could include name, contact
        information, demographic information, information about an individual’s employer,
        information to verify identity or trustworthiness, and information for other fraud or safety
        protection purposes.
      </LandingParagraph>

      <LandingH2 id="how-we-use-your-information" className="my-8">
        3. How We Use Your Information
      </LandingH2>

      <LandingParagraph className="mb-8">
        We may use the information we collect from and about you to:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-4">Fulfill the purposes for which you provided it;</li>
          <li className="mb-4">
            Provide and improve the Services, including to develop new features or services, take
            steps to secure the Services, and for technical and customer support;
          </li>
          <li className="mb-4">
            Fundraise, accept donations, or process purchases of Rehashly services or products;
          </li>
          <li className="mb-4">Host events and programs;</li>
          <li className="mb-4">
            Send you information about your relationship or transactions with us, account alerts, or
            other communications, such as newsletters to which you have subscribed;
          </li>
          <li className="mb-4">
            Process and respond to your inquiries or to request your feedback;
          </li>
          <li className="mb-4">
            Conduct analytics, research, and reporting, including to synthesize and derive insights
            from your use of our Services;
          </li>
          <li className="mb-4">Evaluate job candidates during our hiring process;</li>
          <li className="mb-4">
            Comply with the law and protect the safety, rights, property, or security of Rehashly,
            the Services, our users, and the general public; and
          </li>
          <li className="mb-4">
            Enforce our <TextLink href="/terms">Master Terms</TextLink>, including to investigate
            potential violations thereof.
          </li>
        </ul>
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        Please note that we may combine information that we collect from you and about you
        (including automatically collected information) with information we obtain about you from
        our affiliates and/or non-affiliated third parties, and use such combined information in
        accordance with this Privacy Policy.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        We may aggregate and/or de-identify information collected through the Services. We may use
        de-identified and/or aggregated data for any purpose, including without limitation for
        research and marketing purposes.
      </LandingParagraph>

      <LandingH2 id="when-we-disclose-your-information" className="my-8">
        4. When We Disclose Your Information
      </LandingH2>

      <LandingParagraph className="mb-8">
        We may disclose and/or share your information under the following circumstances:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-8">
            <span className="font-bold">Service Providers.</span> We may disclose your information
            with third parties who perform services on our behalf, including without limitation,
            event management, candidate selection, marketing, customer support, data storage, data
            analysis and processing, and legal services. For example, when you register for an
            event, we may share your information with vendors, third party contractors, partner
            organizations, and volunteers for the purpose of organizing and running the event and
            related activities.
          </li>
          <li className="mb-8">
            <span className="font-bold">
              Legal Compliance and Protection of Rehashly and Others.
            </span>{' '}
            We may disclose your information if required to do so by law or on a good faith belief
            that such disclosure is permitted by this Privacy Policy or reasonably necessary or
            appropriate for any of the following reasons: (a) to comply with legal process; (b) to
            enforce or apply our <TextLink href="/terms">Master Terms</TextLink> and this Privacy
            Policy, or other contracts with you, including investigation of potential violations
            thereof; (c) to respond to your requests for customer service; and/or (d) to protect the
            rights, property, or personal safety of Rehashly, our agents and affiliates, our users,
            and the public. This includes exchanging information with other companies and
            organizations for fraud protection, and spam/malware prevention, and similar purposes.
          </li>
          <li className="mb-8">
            <span className="font-bold">Business Transfers.</span> As we continue to develop our
            business, we may engage in certain business transactions, such as the transfer or sale
            of our assets. In such transactions, (including in contemplation of such transactions,
            e.g., due diligence) your information may be disclosed. If any of Rehashly’s assets are
            sold or transferred to a third party, customer information (including your email
            address) would likely be one of the transferred business assets.
          </li>
          <li className="mb-8">
            <span className="font-bold">Affiliated Companies.</span> We may disclose your
            information with current or future affiliated companies.
          </li>
          <li className="mb-8">
            <span className="font-bold">Consent.</span> We may disclose your information to any
            third parties based on your consent to do so.
          </li>
          <li className="mb-8">
            <span className="font-bold">Aggregate/De-identified Information.</span> We may disclose
            de-identified and/or aggregated data for any purpose to third parties, including
            advertisers, promotional partners, and/or others.
          </li>
        </ul>
      </LandingParagraph>

      <LandingH2 id="legal-basis-for-processing-personal-data" className="my-8">
        5. Legal Basis for Processing Personal Data
      </LandingH2>

      <LandingParagraph className="mb-8">
        The laws in some jurisdictions require companies to tell you about the legal ground they
        rely on to use or disclose information that can be directly linked to or used to identify
        you. To the extent those laws apply, our legal grounds for processing such information are
        as follows:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-8">
            To Honor Our Contractual Commitments to You. Much of our processing of information is to
            meet our contractual obligations to provide services to our users.
          </li>
          <li className="mb-8">
            Legitimate Interests. In many cases, we handle information on the ground that it
            furthers our legitimate interests in ways that are not overridden by the interests or
            fundamental rights and freedoms of the affected individuals, these include:
          </li>
          <ul className="ml-12 list-disc">
            <li className="mb-4">Customer service</li>
            <li className="mb-4">Marketing, advertising, and fundraising</li>
            <li className="mb-4">Protecting our users, personnel, and property</li>
            <li className="mb-4">Managing user accounts</li>
            <li className="mb-4">Organizing and running events and programs</li>
            <li className="mb-4">Analyzing and improving our business</li>
            <li className="mb-4">Managing legal issues</li>
          </ul>
        </ul>
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        We may also process information for the same legitimate interests of our users and business
        partners.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-8">
            Legal Compliance. We may need to use and disclose information in certain ways to comply
            with our legal obligations.
          </li>
          <li className="mb-8">
            Consent. Where required by law, and in some other cases where legally permissible, we
            handle information on the basis of consent. Where we handle your information on the
            basis of consent, you have the right to withdraw your consent; in accordance with
            applicable law.
          </li>
        </ul>
      </LandingParagraph>

      <LandingH2 id="online-analytics" className="my-8">
        6. Online Analytics
      </LandingH2>

      <LandingParagraph className="mb-8">
        We may use third-party web analytics services (such as Google Analytics) on our Services to
        collect and analyze the information discussed above, and to engage in auditing, research, or
        reporting. The information (including your IP address) collected by various analytics
        technologies described in the “Cookies and Other Tracking Technologies” section above will
        be disclosed to or collected directly by these service providers, who use the information to
        evaluate your use of the Services, including by noting the third-party website from which
        you arrive to our Site, analyzing usage trends, assisting with fraud prevention, and
        providing certain features to you. To prevent Google Analytics from using your information
        for analytics, you may install the Google Analytics Opt-out Browser Add-on by clicking{' '}
        <TextLink href="https://tools.google.com/dlpage/gaoptout">here</TextLink>.
      </LandingParagraph>

      <LandingH2 id="your-choices-and-data-subject-rights" className="my-8">
        7. Your Choices and Data Subject Rights
      </LandingH2>

      <LandingParagraph className="mb-8">
        You have various rights with respect to the collection and use of your information through
        the Services. Those choices are as follows:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-4">
            Email Unsubscribe - You may unsubscribe from our marketing emails at any time by
            clicking on the “unsubscribe” link at the bottom of each newsletter or by emailing
            legal@rehashly.com with your request.
          </li>
          <li className="mb-4">
            Fundraising Analytics - You may opt out of Rehashly's fundraising analytics activities
            by contacting legal@rehashly.com with your request.
          </li>
          <li className="mb-4">
            Account Preferences - If you have registered for an account with us through our
            Services, you can update your account information or adjust your email communications
            preferences by logging into your account and updating your settings.
          </li>
          <li className="mb-4">
            EU Data Subject Rights - Individuals in the European Economic Area (“EEA”) and other
            jurisdictions have certain legal rights (subject to applicable exceptions and
            limitations) to obtain confirmation of whether we hold certain information about them,
            to access such information, and to obtain its correction or deletion in appropriate
            circumstances. You may have the right to object to our handling of your information,
            restrict our processing of your information, and to withdraw any consent you have
            provided. To exercise these rights, please email us at legal@rehashly.com with the
            nature of your request. You also have the right to go directly to the relevant
            supervisory or legal authority, but we encourage you to contact us so that we may
            resolve your concerns directly as best and as promptly as we can.
          </li>
        </ul>
      </LandingParagraph>

      <LandingH3 className="my-8">California Residents</LandingH3>

      <LandingParagraph className="mb-8">
        California residents have additional rights to:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <span className="font-bold">Non-discrimination.</span> We will not discriminate against you
        for exercising any of the rights outlined in this Privacy Policy. Unless otherwise permitted
        by law, we will not:
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <ul className="ml-10 list-disc">
          <li className="mb-4">Deny you goods or services;</li>
          <li className="mb-4">
            Charge you different prices or rates for goods or services, including through granting
            discounts or other benefits, or imposing penalties;
          </li>
          <li className="mb-4">
            Provide you a different level or quality of goods or services; or
          </li>
          <li className="mb-4">
            Suggest that you may receive a different price or rate for goods or services or a
            different level or quality of goods or services.
          </li>
        </ul>
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        That said, the use or purchase of certain products or services may require the collection
        and/or maintenance of person information as explained above.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        <span className="font-bold">Opt out of selling personal information.</span> You have the
        right to object to Rehashly's sale of your personal information by sending your request to
        legal@rehashly.com.
      </LandingParagraph>

      <LandingH2 id="international-transfers" className="my-8">
        8. International Transfers
      </LandingH2>

      <LandingParagraph className="mb-8">
        Our computer systems are currently based in the United States and the majority of our
        contractors are based in the United States or Canada. As described above in the “When We
        Disclose Your Information” section, we may share your information with trusted service
        providers or business partners in countries other than your country of residence, including
        the United States, in accordance with applicable law. This means that some of your
        information may be processed in the United States, which may not offer the same level of
        protection as the privacy laws of your jurisdiction. By providing us with your information,
        you acknowledge any such transfer, storage or use.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        If we provide any information about you to any third parties information processors located
        outside of the EEA, we will take appropriate measures to ensure such companies protect your
        information adequately in accordance with this Privacy Policy and other data protection laws
        to govern the transfers of such data.
      </LandingParagraph>

      <LandingH2 id="security-measures" className="my-8">
        9. Security Measures
      </LandingH2>

      <LandingParagraph className="mb-8">
        We have implemented technical, physical, and organizational security measures to protect
        against the loss, misuse, and/or alteration of your information. These safeguards vary based
        on the sensitivity of the information that we collect and store. However, we cannot and do
        not guarantee that these measures will prevent every unauthorized attempt to access, use, or
        disclose your information since despite our efforts, no Internet and/or other electronic
        transmissions can be completely secure.
      </LandingParagraph>

      <LandingH2 id="children" className="my-8">
        10. Children
      </LandingH2>

      <LandingParagraph className="mb-8">
        The Services are intended for users over the age of 18 and are not directed at children
        under the age of 13. If we become aware that we have collected personal information (as
        defined by the Children’s Online Privacy Protection Act) from children under the age of 13,
        or personal data (as defined by the EU GDPR) from children under the age of 16, we will take
        reasonable steps to delete it as soon as practicable.
      </LandingParagraph>

      <LandingH2 id="data-retention" className="my-8">
        11. Data Retention
      </LandingH2>

      <LandingParagraph className="mb-8">
        We retain the information we collect for as long as necessary to fulfill the purposes set
        forth in this Privacy Policy or as long as we are legally required or permitted to do so.
        Information may persist in copies made for backup and business continuity purposes for
        additional time.
      </LandingParagraph>

      <LandingH2 id="third-party-links-and-services" className="my-8">
        12. Third-Party Links and Services
      </LandingH2>

      <LandingParagraph className="mb-8">
        The Services may contain links to third-party websites (e.g., social media sites like
        Facebook and Twitter), third-party plug-ins (e.g., the Facebook “like” button and Twitter
        “follow” button), and other services. If you choose to use these sites or features, you may
        disclose your information not just to those third-parties, but also to their users and the
        public more generally depending on how their services function. Rehashly is not responsible
        for the content or privacy practices of such third party websites or services. The
        collection, use and disclosure of your information will be subject to the privacy policies
        of the third party websites or services, and not this Privacy Policy. We encourage you to
        read the privacy statements of each and every site you visit.
      </LandingParagraph>

      <LandingH2 id="changes-to-this-privacy-policy" className="my-8">
        13. Changes to this Privacy Policy
      </LandingH2>

      <LandingParagraph className="mb-8">
        We will continue to evaluate this Privacy Policy as we update and expand our Services, and
        we may make changes to the Privacy Policy accordingly. We will post any changes here and
        revise the date last updated above. We encourage you to check this page periodically for
        updates to stay informed on how we collect, use and share your information. If we make
        material changes to this Privacy Policy, we will provide you with notice as required by law.
      </LandingParagraph>

      <LandingH2 id="questions-about-this-privacy-policy" className="my-8">
        14. Questions About this Privacy Policy
      </LandingH2>

      <LandingParagraph className="mb-8">
        If you have any questions about this Privacy Policy or our privacy practices, you can
        contact us at: legal@rehashly.com.
      </LandingParagraph>

      <LandingParagraph className="mb-8">
        This Privacy Policy has been adapted from the{' '}
        <TextLink href="https://creativecommons.org/privacy">
          Creative Commons Privacy Policy
        </TextLink>
        , which is dedicated to the public domain under the{' '}
        <TextLink href="https://creativecommons.org/publicdomain/zero/1.0/">
          Creative Commons CC0 Public Domain Dedication
        </TextLink>
        .
      </LandingParagraph>
    </>
  )
}
