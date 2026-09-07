import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type FormState = {
  name: string;
  organization: string;
  email: string;
  role: string;
  message: string;
};

const empty: FormState = {
  name: "",
  organization: "",
  email: "",
  role: "",
  message: "",
};

export function Inquire() {
  const [values, setValues] = useState<FormState>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.role || !values.message.trim()) {
      setError("Please complete the required fields so we can reply with care.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("A proper email address allows us to respond privately.");
      return;
    }

    setError("");
    setSent(true);
  };

  return (
    <section className="inquire" id="inquire">
      <div className="shell inquire-grid">
        <Reveal>
          <p className="eyebrow">By introduction</p>
          <h2 className="display">
            Begin a
            <em> private conversation.</em>
          </h2>
          <p className="inquire-copy">
            Whether you are bringing a product to market or looking for what
            belongs on your shelf next, write to us. Inquiries are reviewed
            personally. We reply only when there is a genuine fit.
          </p>
          <figure className="inquire-figure">
            <img
              src="/images/dining.jpg"
              alt="A quietly set table — the rooms where great food is judged."
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="inquire-success" role="status">
              <p className="eyebrow">Received</p>
              <h3>Thank you. We will be in touch.</h3>
              <p>
                Your note has been recorded. If the conversation is right, you
                will hear from us shortly.
              </p>
            </div>
          ) : (
            <form className="inquire-form" onSubmit={onSubmit} noValidate>
              <label>
                <span>Full name *</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Organization</span>
                <input
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  value={values.organization}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      organization: event.target.value,
                    }))
                  }
                />
              </label>
              <label>
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>I am a *</span>
                <select
                  name="role"
                  value={values.role}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, role: event.target.value }))
                  }
                >
                  <option value="">Select</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="grower">Grower</option>
                  <option value="brand">Emerging brand</option>
                  <option value="retailer">Retailer</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="full">
                <span>What are you seeking? *</span>
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, message: event.target.value }))
                  }
                />
              </label>
              {error ? <p className="form-error">{error}</p> : null}
              <button className="btn btn-ink" type="submit">
                Submit inquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
