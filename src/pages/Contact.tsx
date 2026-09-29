import { Link } from "react-router-dom";
import { FormCard, LeadForm } from "../components/LeadForm";

export function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Let’s Talk.</h1>
          <p className="lead">
            Three doors. Not one generic form. Tell us which side of the table
            you’re on.
          </p>
        </div>
      </section>

      <section className="plain">
        <div className="shell contact-doors">
          <article>
            <p className="eyebrow">Manufacturer</p>
            <h2>Want to Grow Your Retail Business?</h2>
            <Link className="text-link" to="/manufacturers#qualify">
              Tell Us About Your Brand →
            </Link>
          </article>
          <article>
            <p className="eyebrow">Retailer</p>
            <h2>Looking for New Products or Suppliers?</h2>
            <Link className="text-link" to="/retailers#looking">
              Tell Us What You’re Looking For →
            </Link>
          </article>
          <article>
            <p className="eyebrow">General</p>
            <h2>Have an Opportunity We Should Discuss?</h2>
            <a className="text-link" href="#talk">
              Let’s Talk →
            </a>
          </article>
        </div>
      </section>

      <section className="plain" id="talk">
        <div className="shell form-shell">
          <FormCard eyebrow="General" title="Let’s Talk">
            <LeadForm
              id="general-talk"
              submitLabel="Send"
              successTitle="Received. We’ll take it from here."
              successCopy="If there is a conversation worth having, you’ll hear from us."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "company", label: "Company" },
                { name: "email", label: "Email", type: "email", required: true },
                {
                  name: "message",
                  label: "What should we discuss?",
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
