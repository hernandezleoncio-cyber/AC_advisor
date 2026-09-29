import { CtaBand, PageHero } from "../components/PageHero";
import { FormCard, LeadForm } from "../components/LeadForm";
import { manufacturerServices } from "../data";
import { asset } from "../lib/assets";

export function Manufacturers() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturers"
        title="Your Product Deserves the Right Retailer."
        lead="We help food manufacturers navigate the retail landscape, get the right SKUs onto the set, and build relationships that lead to sustainable growth."
        image={asset("images/set-readymeals.jpg")}
        imageClass="fit-shelf"
        alt="A U.S. supermarket deli set with packaged prepared foods, Boar’s Head and grab-and-go cases."
      />

      <section className="plain">
        <div className="shell">
          <p className="eyebrow">The partnership</p>
          <h2>More Than a Broker. An Extension of Your Team.</h2>
          <p className="section-lead">
            Access, expertise, relationships and execution — with the
            manufacturer treated as the work, not a file to pass along.
          </p>
          <ul className="service-board">
            {manufacturerServices.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Ready to Take Your Product to Retail?"
        copy="Tell us about your business. A short qualification — not a generic contact form."
        to="/manufacturers#qualify"
        label="Tell Us About Your Business →"
      />

      <section className="plain" id="qualify">
        <div className="shell form-shell">
          <FormCard eyebrow="Manufacturer" title="Tell Us About Your Brand">
            <LeadForm
              id="manufacturer-qualify"
              submitLabel="Submit Your Brand"
              successTitle="Thank you. We’ll review your brand."
              successCopy="If there is a genuine retail fit, we’ll be in touch."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "category", label: "Product Category", required: true },
                { name: "distribution", label: "Current Retail Distribution" },
                { name: "targets", label: "Target Retailers", full: true },
                { name: "volume", label: "Annual Sales / Approximate Volume" },
                { name: "website", label: "Website", type: "url" },
                {
                  name: "product",
                  label: "Tell us about your product",
                  multiline: true,
                  required: true,
                },
              ]}
            />
          </FormCard>
        </div>
      </section>
    </>
  );
}
