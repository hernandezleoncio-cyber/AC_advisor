import { CtaBand, PageHero } from "../components/PageHero";
import { FormCard, LeadForm } from "../components/LeadForm";
import { retailerExpect } from "../data";
import { asset } from "../lib/assets";

export function Retailers() {
  return (
    <>
      <PageHero
        eyebrow="Retailers"
        title="Helping Retailers Find What’s Next."
        lead="We connect retailers with manufacturers who can fill the set — grab-and-go, prepared foods and the SKUs shoppers actually pick up."
        image={asset("images/set-mealdeal.jpg")}
        imageClass="fit-shopper"
        alt="A shopper choosing from a chilled meal-deal set of sandwiches, snacks and drinks."
      />

      <section className="plain">
        <div className="shell">
          <p className="eyebrow">The work</p>
          <h2>What Retailers Can Expect</h2>
          <ul className="service-board">
            {retailerExpect.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Looking for Something New?"
        copy="Tell us what you’re looking for. This is how new suppliers reach the right set."
        to="/retailers#looking"
        label="Tell Us What You’re Looking For →"
      />

      <section className="plain" id="looking">
        <div className="shell form-shell">
          <FormCard eyebrow="Retailer" title="Tell Us What You’re Looking For">
            <LeadForm
              id="retailer-looking"
              submitLabel="Send Request"
              successTitle="Received. We’ll come back with a fit."
              successCopy="We’ll review what you’re looking for and reply with relevant, ready suppliers — not a catalogue."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Retailer / Banner", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "title", label: "Role / Title" },
                {
                  name: "need",
                  label: "What are you looking for?",
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
