import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 7SkyNetwork Inc. collects, uses, and protects personal data, including GDPR and CCPA/CPRA rights.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
      lastUpdated="July 16, 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) operates {siteConfig.domain} (the &quot;Site&quot;).
        This Privacy Policy explains what personal data we collect, why we
        collect it, and the rights you have over that data.
      </p>
      <p>
        This policy is designed to comply with the European General Data
        Protection Regulation (GDPR), the California Consumer Privacy Act as
        amended by the California Privacy Rights Act (CCPA/CPRA), and other
        applicable U.S. state privacy laws.
      </p>

      <h2>2. Data we collect</h2>
      <h3>Information you provide directly</h3>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, and the
          content of your message.
        </li>
        <li>
          <strong>Creator inquiries:</strong> when you reach out about
          representation, we may collect your social media handles, audience
          information, and career background.
        </li>
        <li>
          <strong>Brand inquiries:</strong> company name, contact details, and
          campaign requirements.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device
          information, and pages visited.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> see our{" "}
          <a href="/legal/cookies">Cookie Policy</a> for details.
        </li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To respond to your inquiry and provide our services.</li>
        <li>To evaluate creators for potential representation.</li>
        <li>
          To negotiate and manage campaigns with brands and partner networks.
        </li>
        <li>To improve, secure, and analyze the performance of our Site.</li>
        <li>
          To comply with legal, accounting, and reporting obligations.
        </li>
      </ul>

      <h2>4. Legal basis for processing (GDPR)</h2>
      <p>For users in the European Economic Area, we process data based on:</p>
      <ul>
        <li>
          <strong>Consent</strong> — when you submit the contact form or accept
          non-essential cookies.
        </li>
        <li>
          <strong>Contractual necessity</strong> — to take steps before
          entering into a representation or campaign agreement.
        </li>
        <li>
          <strong>Legitimate interests</strong> — to secure our Site, prevent
          fraud, and improve our services.
        </li>
        <li>
          <strong>Legal obligation</strong> — to meet applicable regulatory or
          tax requirements.
        </li>
      </ul>

      <h2>5. Who we share data with</h2>
      <p>
        We do not sell your personal data. We may share it with the following
        categories of recipients, only as necessary:
      </p>
      <ul>
        <li>
          <strong>Brand partners and advertising networks</strong> — to
          facilitate campaigns and deals you have agreed to.
        </li>
        <li>
          <strong>Service providers</strong> — email delivery, hosting, and
          analytics tools that help us operate the Site.
        </li>
        <li>
          <strong>Professional advisors</strong> — lawyers and accountants
          bound by confidentiality.
        </li>
        <li>
          <strong>Legal authorities</strong> — when required by law or to
          protect our rights.
        </li>
      </ul>

      <h2>6. International data transfers</h2>
      <p>
        Your data may be processed in the United States or other countries
        where we or our service providers operate. Where required by the GDPR,
        we rely on appropriate safeguards such as Standard Contractual Clauses
        to protect transfers outside the EEA.
      </p>

      <h2>7. Data retention</h2>
      <p>
        We keep personal data only as long as necessary for the purposes set
        out in this policy, to comply with legal obligations, or to resolve
        disputes. Inquiry data is typically retained for up to 24 months
        unless we begin a working relationship.
      </p>

      <h2>8. Your rights</h2>
      <h3>GDPR rights (EEA, UK, and Switzerland)</h3>
      <ul>
        <li>Access — obtain a copy of your personal data.</li>
        <li>Rectification — correct inaccurate or incomplete data.</li>
        <li>Erasure (&quot;right to be forgotten&quot;).</li>
        <li>Restriction or objection to processing.</li>
        <li>Data portability — receive your data in a structured format.</li>
        <li>Withdraw consent at any time, without affecting prior processing.</li>
        <li>
          Lodge a complaint with your local data protection authority.
        </li>
      </ul>
      <h3>CCPA/CPRA rights (California residents)</h3>
      <ul>
        <li>
          <strong>Know</strong> — the categories and specific pieces of data we
          collect, and whether it is sold or shared.
        </li>
        <li>
          <strong>Delete</strong> — request deletion of your personal data.
        </li>
        <li>
          <strong>Correct</strong> — request correction of inaccurate data.
        </li>
        <li>
          <strong>Opt-out</strong> — of any &quot;sale&quot; or
          &quot;sharing&quot; of personal data for cross-context behavioral
          advertising. We do not sell personal data.
        </li>
        <li>
          <strong>Non-discrimination</strong> — we will not treat you
          differently for exercising your rights.
        </li>
      </ul>
      <p>
        To exercise any right, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We will
        respond within 30 days (GDPR) or 45 days (CCPA), as applicable.
      </p>

      <h2>9. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to
        protect your data. However, no method of transmission over the Internet
        is fully secure, and we cannot guarantee absolute security.
      </p>

      <h2>10. Children&apos;s privacy</h2>
      <p>
        Our Site and services are not directed to children under 13 (COPPA) or
        under 16 (GDPR). We do not knowingly collect their data. If you believe
        we have done so, contact us and we will delete it.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The
        &quot;Last updated&quot; date above reflects the most recent version.
        Material changes will be highlighted on the Site.
      </p>
    </LegalLayout>
  );
}
