import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { CONTACT, LEGAL, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fabrication Legend Aluminium Works (U) Ltd collects, uses and protects personal data under Uganda's Data Protection and Privacy Act, 2019.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`How ${SITE.legalName} handles personal data collected through this website, in line with Uganda's Data Protection and Privacy Act, 2019.`}
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this
          website. For the purposes of the Data Protection and Privacy Act, 2019
          (the &ldquo;Act&rdquo;) we are the <strong>data collector and data
          controller</strong> for personal data submitted through it.
        </p>
        <p>
          Registered address: {LEGAL.registeredAddress}. You can reach us on{" "}
          {CONTACT.phones.join(" or ")}, or by email at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </section>

      <section>
        <h2>2. What we collect</h2>
        <p>
          We only collect what you choose to send us through the enquiry form on
          our Contact page:
        </p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number, if you provide one (optional)</li>
          <li>The service you are enquiring about, if selected (optional)</li>
          <li>The message and project details you write</li>
          <li>The date and time your enquiry was received</li>
        </ul>
        <p>
          Our hosting provider also keeps standard technical server logs (such
          as IP address and browser type) for security and reliability. We do
          not use those logs to build a profile of you.
        </p>
      </section>

      <section id="cookies">
        <h2>3. Cookies and analytics</h2>
        <p>
          <strong>
            We set no cookies unless you accept the analytics banner.
          </strong>{" "}
          When you first visit, we ask whether you consent to Google Analytics.
          If you decline, or simply ignore the banner, no analytics cookies are
          set and no data is sent to Google. The site works identically either
          way. Your choice is remembered in your browser&apos;s local storage,
          which is not a cookie and is never sent to us.
        </p>
        <p>
          If you accept, Google Analytics sets cookies that help us understand
          how many people visit, which pages they read and roughly where they
          are. We have enabled IP anonymisation. We use this only to improve the
          site.
        </p>
        <p>
          To change your mind later, clear this site&apos;s data in your browser
          settings and the banner will appear again.
        </p>
        <p>
          We carry <strong>no advertising pixels</strong> and do not track you
          across other websites. We do not sell, rent or trade your personal
          data, and we do not use it for automated decision-making or
          profiling.
        </p>
        <p>
          We do not knowingly collect data from children, and we do not ask for
          special categories of personal data (such as health, religious or
          political information). Please do not include such details in your
          enquiry.
        </p>
      </section>

      <section>
        <h2>4. Why we use it, and our lawful basis</h2>
        <p>
          We use your details solely to respond to your enquiry, prepare a
          quotation, and carry out any work you subsequently engage us for. Our
          lawful basis under section 7 of the Act is your{" "}
          <strong>consent</strong>, given when you submit the form, together
          with the need to take steps at your request before entering into a
          contract.
        </p>
        <p>
          We will not send you marketing messages unless you separately ask us
          to.
        </p>
      </section>

      <section>
        <h2>5. Who we share it with</h2>
        <p>
          We do not share your data with third parties for their own purposes.
          It is handled by service providers who process it strictly on our
          instructions:
        </p>
        <ul>
          <li>
            <strong>Our website host</strong>, which serves the site and keeps
            technical logs.
          </li>
          <li>
            <strong>Our database provider (Neon)</strong>, which stores enquiry
            submissions.
          </li>
          <li>
            <strong>Google Analytics</strong>, but only if you accepted the
            analytics banner. If you declined, nothing is shared with Google.
          </li>
        </ul>
        <p>
          We may also disclose data where we are required to by Ugandan law, a
          court order, or a lawful request from a competent authority.
        </p>
      </section>

      <section>
        <h2>6. Storage outside Uganda</h2>
        <p>
          <strong>
            Enquiries submitted through this site are stored on servers located
            in {LEGAL.dataHostingRegion}, not in Uganda.
          </strong>{" "}
          This is a cross-border transfer of personal data under section 19 of
          the Act. We rely on the fact that the receiving country maintains a
          data protection framework (the EU General Data Protection Regulation)
          that provides protection at least equivalent to the Act, and on your
          consent when you submit the form.
        </p>
        <p>
          If you accept analytics cookies, Google Analytics also processes data
          about your visit on infrastructure operated by Google outside Uganda,
          including in the United States. Declining the banner prevents that
          transfer entirely.
        </p>
        <p>
          If you would prefer your details not to leave Uganda, please phone us
          on {CONTACT.phones.join(" or ")} instead of using the form, and
          decline the analytics banner.
        </p>
      </section>

      <section>
        <h2>7. How long we keep it</h2>
        <p>
          We keep enquiries for as long as needed to deal with your request and
          for our ordinary business records, and no longer than is necessary for
          the purpose it was collected for. Where an enquiry leads to work, we
          keep the related records for the period required by Ugandan tax and
          company law. You can ask us to delete your enquiry sooner.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          The site is served over an encrypted HTTPS connection and enquiries
          are transmitted and stored over encrypted connections, with access
          limited to people who need it. No system is completely secure, and we
          cannot guarantee absolute security, but we take the practical steps
          the Act requires of us.
        </p>
      </section>

      <section>
        <h2>9. Your rights</h2>
        <p>Under the Act you have the right to:</p>
        <ul>
          <li>be told how your data is being used;</li>
          <li>access the personal data we hold about you;</li>
          <li>have inaccurate or misleading data corrected;</li>
          <li>have your data deleted, where there is no reason to keep it;</li>
          <li>object to how we are using it; and</li>
          <li>withdraw your consent at any time.</li>
        </ul>
        <p>
          To exercise any of these, contact us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We will
          respond as soon as reasonably practicable. Withdrawing consent does
          not affect anything we did lawfully beforehand.
        </p>
      </section>

      <section>
        <h2>10. Complaints</h2>
        <p>
          If you believe we have mishandled your personal data, please raise it
          with us first so we can put it right. You also have the right to
          complain to the <strong>Personal Data Protection Office</strong>{" "}
          established under the Act, which sits within the National Information
          Technology Authority &ndash; Uganda (NITA-U).
        </p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy as our practices or the law change. The
          effective date at the top of this page shows when it was last
          revised. Material changes will be reflected here.
        </p>
      </section>
    </LegalPage>
  );
}
