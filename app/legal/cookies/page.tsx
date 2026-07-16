import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How 7SkyNetwork uses cookies and similar technologies, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="How we use cookies and how you can control them."
      lastUpdated="July 16, 2026"
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They allow the site to remember your actions and preferences
        over time. This policy also covers similar technologies such as local
        storage and pixels.
      </p>

      <h2>2. Cookies we use</h2>
      <h3>Strictly necessary cookies</h3>
      <p>
        These cookies are required for the Site to function (for example,
        remembering your cookie consent choice). They cannot be disabled.
      </p>
      <h3>Analytics cookies</h3>
      <p>
        If enabled, these cookies help us understand how visitors use the Site
        so we can improve it. They are set only after you have given your
        consent.
      </p>
      <h3>Marketing cookies</h3>
      <p>
        If we run advertising campaigns or use retargeting pixels (e.g., Meta,
        Google), these cookies may be used to measure and deliver ads to users
        who have visited our Site. They require your consent.
      </p>

      <h2>3. Your consent</h2>
      <p>
        When you first visit the Site, a cookie banner asks for your consent to
        non-essential cookies. You can accept or reject them with equal ease.
        Rejecting them will not limit your access to the Site.
      </p>
      <p>
        For visitors in the European Economic Area and the United Kingdom, we
        rely on your consent as defined by the GDPR and the ePrivacy
        Directive. For all other visitors, we rely on your continued use of the
        Site unless you opt out.
      </p>

      <h2>4. Managing cookies in your browser</h2>
      <p>
        You can also control or delete cookies through your browser settings.
        Note that disabling all cookies may affect the functionality of certain
        features:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
            Safari
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
            Firefox
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>5. Third-party cookies</h2>
      <p>
        Some cookies may be placed by third-party services when you interact
        with their content on our Site. These third parties manage the cookies
        according to their own privacy policies, linked where relevant.
      </p>

      <h2>6. Updates to this policy</h2>
      <p>
        We may update this Cookie Policy when we add or change the
        technologies we use. The &quot;Last updated&quot; date above always
        reflects the current version.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about cookies? Email us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalLayout>
  );
}
