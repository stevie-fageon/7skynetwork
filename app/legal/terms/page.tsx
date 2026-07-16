import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the 7SkyNetwork website, including intellectual property, DMCA, and FTC disclosures.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The rules and terms for using our website and services."
      lastUpdated="July 16, 2026"
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing or using {siteConfig.domain} (the &quot;Site&quot;),
        operated by {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;,
        or &quot;our&quot;), you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). If you do not agree, please do not use the Site.
      </p>
      <p>
        These Terms apply to all visitors, including creators, brands, and
        partners who may use our services after a separate written agreement is
        signed.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        You agree to use the Site lawfully and not to:
      </p>
      <ul>
        <li>Violate any applicable local, national, or international law.</li>
        <li>
          Impersonate another person or misrepresent your affiliation with a
          company or creator.
        </li>
        <li>
          Attempt to gain unauthorized access to our systems, accounts, or
          data.
        </li>
        <li>
          Introduce viruses, malware, or any code designed to disrupt the Site.
        </li>
        <li>
          Scrape, copy, or harvest content from the Site without permission.
        </li>
      </ul>

      <h2>3. Intellectual property</h2>
      <p>
        The Site and all its content — including the {siteConfig.name} name and
        logo, text, graphics, campaign concepts, layouts, and software — are
        the exclusive property of {siteConfig.legalName} and are protected by
        U.S. and international intellectual property laws.
      </p>
      <ul>
        <li>
          You may view and download materials from the Site solely for personal,
          non-commercial use.
        </li>
        <li>
          You may not reproduce, republish, distribute, or create derivative
          works from any part of the Site without our prior written consent.
        </li>
        <li>
          All trademarks, service marks, and trade names not owned by us that
          appear on the Site are the property of their respective owners.
        </li>
      </ul>

      <h2>4. FTC disclosure — advertising and endorsements</h2>
      <p>
        In accordance with the guidelines of the U.S. Federal Trade Commission
        (FTC) and truth-in-advertising principles, please note:
      </p>
      <ul>
        <li>
          Any case studies, campaign examples, or success stories referenced on
          the Site represent past or current <strong>paid partnerships</strong>{" "}
          between creators, our agency, and brands. Results are not guaranteed
          and may vary.
        </li>
        <li>
          If the Site ever displays affiliate links, we may earn a commission
          on qualifying purchases. Such links will be clearly identified as
          affiliate or sponsored at or near the link itself.
        </li>
        <li>
          We require that all creators we represent make truthful and clearly
          disclosed endorsements in line with the FTC&apos;s Endorsement
          Guides.
        </li>
      </ul>

      <h2>5. DMCA policy and designated agent</h2>
      <p>
        We respect the intellectual property rights of others and expect users
        of our Site to do the same. In accordance with the Digital Millennium
        Copyright Act (DMCA), we will respond to notices of alleged copyright
        infringement.
      </p>
      <h3>DMCA designated agent</h3>
      <p>
        {siteConfig.legalName} has designated an agent to receive notifications
        of claimed infringement:
      </p>
      <ul>
        <li>
          <strong>Copyright Agent:</strong> {siteConfig.legalName}
        </li>
        <li>
          <strong>Address:</strong> {siteConfig.address.street},{" "}
          {siteConfig.address.city}, {siteConfig.address.state}{" "}
          {siteConfig.address.zip}, {siteConfig.address.country}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </li>
      </ul>
      <p>
        To file a notice, include the identification of the copyrighted work,
        the location of the allegedly infringing material, your contact
information, a statement of good-faith belief, and a statement, under penalty
of perjury, that you are authorized to act on the copyright owner&apos;s
behalf.
      </p>

      <h2>6. Representations and warranties</h2>
      <p>
        The Site is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including implied
        warranties of merchantability, fitness for a particular purpose, and
        non-infringement.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, in no event shall{" "}
        {siteConfig.legalName}, its officers, directors, employees, or
        affiliates be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits or data,
        arising out of or related to your use of, or inability to use, the
        Site.
      </p>
      <p>
        This includes, without limitation, interruptions of the Site,
        transmission errors, loss of data, or inaccuracies in the information
        provided. Our total aggregate liability for any claim shall not exceed
        the amount you paid us to use the Site, if any.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {siteConfig.legalName} and its
        affiliates from any claims, damages, liabilities, costs, and expenses
        (including reasonable attorneys&apos; fees) arising out of your breach
        of these Terms or your misuse of the Site.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        The Site may contain links to third-party websites or services we do not
        control. We are not responsible for the content, privacy practices, or
        accuracy of these external sites. You access them at your own risk.
      </p>

      <h2>10. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of{" "}
        {siteConfig.governingLaw}, without regard to its conflict of law
        provisions. You irrevocably submit to the exclusive jurisdiction of the
        state and federal courts located in {siteConfig.address.state} for the
        resolution of any dispute.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may revise these Terms at any time. The &quot;Last updated&quot;
        date above reflects the most recent version. Continued use of the Site
        after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or by mail
        at the address below.
      </p>
    </LegalLayout>
  );
}
