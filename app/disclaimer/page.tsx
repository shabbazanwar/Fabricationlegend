import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer covering website content, quotations, project imagery and workmanship for Fabrication Legend Aluminium Works (U) Ltd.",
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="What the information on this website does and does not commit us to, and where our responsibility begins and ends."
    >
      <section>
        <h2>1. General information only</h2>
        <p>
          The material on this website is published for general information
          about {SITE.legalName} and the work we do. It is not technical advice,
          engineering advice, or a specification for any particular building or
          site, and it should not be relied on as a substitute for a site
          survey and a written quotation.
        </p>
      </section>

      <section>
        <h2>2. Pricing and quotations</h2>
        <p>
          No prices are published on this website. Any figure given verbally, by
          message or in preliminary correspondence is{" "}
          <strong>indicative only</strong> and is not binding. Firm pricing is
          issued in a written quotation, and remains subject to the validity
          period stated in it, to confirmation of measurements and site
          conditions, and to material costs and exchange rates at the time of
          order.
        </p>
      </section>

      <section>
        <h2>3. Images and descriptions</h2>
        <p>
          Photographs, illustrations and service descriptions show the type of
          work we undertake. They are not a promise that your project will be
          identical. Aluminium, steel and glass finishes vary between batches,
          and colour reproduction differs between screens. Where an exact match
          matters, we will confirm it in writing and, where appropriate, by
          sample before fabrication.
        </p>
      </section>

      <section>
        <h2>4. Workmanship and site safety</h2>
        <p>
          Fabrication and installation work we carry out is covered by the
          contract and any warranty issued for that project, together with the
          terms implied by the Sale of Goods and Supply of Services Act, 2017,
          and our duties under the Occupational Safety and Health Act, 2006.{" "}
          <strong>
            Nothing on this website reduces those obligations or limits our
            responsibility for the safety of what we build and install.
          </strong>
        </p>
        <p>
          We are not responsible for defects, failures or injury arising from
          work carried out by others, from materials supplied by the client or
          a third party, from alterations made to our installations after
          handover, or from failure to maintain them as advised.
        </p>
      </section>

      <section>
        <h2>5. External links and third parties</h2>
        <p>
          Any links to third-party sites are provided for convenience only. We
          do not control or endorse their content and accept no responsibility
          for it.
        </p>
      </section>

      <section>
        <h2>6. Website availability</h2>
        <p>
          We do not warrant that this site will be available without
          interruption or free from errors, and we are not liable for loss
          arising from it being unavailable.
        </p>
      </section>

      <section>
        <h2>7. Impersonation and unauthorised representatives</h2>
        <p>
          Our only official channels are this website and the phone numbers and
          email address published on it. We are not responsible for quotations,
          payment requests or commitments made by anyone claiming to represent
          us through other channels. If you are unsure whether a request is
          genuine, call us on {CONTACT.phones.join(" or ")} before paying
          anything.
        </p>
      </section>

      <section>
        <h2>8. Governing law</h2>
        <p>
          This disclaimer is governed by the laws of the Republic of Uganda and
          is subject to the exclusive jurisdiction of the courts of Uganda. It
          should be read together with our{" "}
          <a href="/terms">Terms of Use</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
