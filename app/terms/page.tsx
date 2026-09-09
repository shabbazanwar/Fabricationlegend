import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Fabrication Legend Aluminium Works (U) Ltd website, governed by the laws of Uganda.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro={`These terms govern your use of this website. They are separate from the contract terms that apply to any fabrication or installation work ${SITE.legalName} carries out for you.`}
    >
      <section>
        <h2>1. Acceptance</h2>
        <p>
          By accessing or using this website you agree to these terms. If you do
          not accept them, please stop using the site.
        </p>
      </section>

      <section>
        <h2>2. This website is not an offer or a quotation</h2>
        <p>
          Everything on this site &mdash; service descriptions, images and any
          indicative information &mdash; is provided for general information
          only. It is an <strong>invitation to treat, not an offer capable of
          acceptance</strong>, and it does not form a contract.
        </p>
        <p>
          Submitting the enquiry form does not create a binding agreement and
          does not oblige us to accept your work. A binding contract arises only
          when we issue a written quotation or contract and you accept it in
          writing, and where quantities, site conditions and specifications have
          been confirmed, ordinarily following a site survey. Where anything on
          this site conflicts with a signed quotation or contract, the signed
          document prevails.
        </p>
      </section>

      <section>
        <h2>3. Accuracy of content</h2>
        <p>
          We take reasonable care to keep the site accurate and current, but we
          do not warrant that it is complete, error-free or up to date. Product
          and service descriptions are illustrative, and finishes, materials and
          dimensions vary by project. Nothing here is technical, engineering or
          professional advice, and you should not act on it without speaking to
          us about your specific project.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            use the site for any unlawful purpose, or in a way that breaches the
            Computer Misuse Act, 2011 (as amended);
          </li>
          <li>
            attempt to gain unauthorised access to the site, its database or any
            server on which it is hosted;
          </li>
          <li>
            introduce any virus, malicious code or automated system that
            interferes with the site&apos;s operation;
          </li>
          <li>
            submit false, abusive, defamatory or fraudulent information through
            the enquiry form; or
          </li>
          <li>
            copy, scrape or republish substantial parts of the site for
            commercial purposes without our written permission.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          The content, design, text, layout, logo and branding on this site
          belong to {SITE.legalName} or are used with permission, and are
          protected under the Copyright and Neighbouring Rights Act, 2006. You
          may view and print pages for your own reference or to evaluate our
          services. Any other use, including reproducing our logo or presenting
          our work as your own, requires our prior written consent.
        </p>
      </section>

      <section>
        <h2>6. Availability</h2>
        <p>
          We do not guarantee that the site will always be available or
          uninterrupted. We may change, suspend or withdraw any part of it
          without notice, and we are not liable to you for doing so.
        </p>
      </section>

      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by Ugandan law, we are not liable for
          any loss or damage arising from your use of, or reliance on, this
          website, including loss of profit, loss of business or any indirect or
          consequential loss.
        </p>
        <p>
          <strong>Nothing in these terms limits or excludes our liability</strong>{" "}
          for death or personal injury caused by our negligence, for fraud or
          fraudulent misrepresentation, or for any other liability that cannot
          lawfully be excluded or restricted. In particular, these website terms
          do not exclude or restrict the terms implied into contracts for the
          supply of goods and services by the Sale of Goods and Supply of
          Services Act, 2017, and they do not limit our liability for the
          quality or safety of fabrication and installation work we actually
          carry out. That work is governed by its own contract.
        </p>
      </section>

      <section>
        <h2>8. Third-party links</h2>
        <p>
          Where we link to other websites, we do so for convenience. We do not
          control them, do not endorse their content, and are not responsible
          for them.
        </p>
      </section>

      <section>
        <h2>9. Changes to these terms</h2>
        <p>
          We may revise these terms from time to time. The version in force is
          the one published here, with the effective date shown at the top of
          this page.
        </p>
      </section>

      <section>
        <h2>10. Governing law and jurisdiction</h2>
        <p>
          These terms and any dispute arising out of them or your use of this
          site are governed by the <strong>laws of the Republic of
          Uganda</strong>, and are subject to the exclusive jurisdiction of the
          courts of Uganda.
        </p>
      </section>

      <section>
        <h2>11. Severability</h2>
        <p>
          If any provision of these terms is held to be invalid or
          unenforceable, the remaining provisions continue in full force.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or raised on{" "}
          {CONTACT.phones.join(" or ")}.
        </p>
      </section>
    </LegalPage>
  );
}
