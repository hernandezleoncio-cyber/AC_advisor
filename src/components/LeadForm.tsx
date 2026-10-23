import { useState, type FormEvent, type ReactNode } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  full?: boolean;
};

type LeadFormProps = {
  id: string;
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successCopy: string;
};

const CONTACT_EMAIL = "Adam.Chadwick@yahoo.com";

export function LeadForm({ id, fields, submitLabel }: LeadFormProps) {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const missing = fields.some(
      (field) => field.required && !String(data.get(field.name) ?? "").trim(),
    );
    if (missing) {
      event.preventDefault();
      setError("Please complete the required fields.");
      return;
    }
    setError("");
    setSending(true);
  };

  return (
    <form
      id={id}
      className="lead-form"
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value={`Merchants Forge website — ${id}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://merchantsforge.com/" />
      {fields.map((field) => (
        <label key={field.name} className={field.full || field.multiline ? "full" : ""}>
          <span>
            {field.label}
            {field.required ? " *" : ""}
          </span>
          {field.multiline ? (
            <textarea name={field.name} rows={5} />
          ) : (
            <input type={field.type ?? "text"} name={field.name} />
          )}
        </label>
      ))}
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-ink" type="submit" disabled={sending}>
        {sending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

export function FormCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="form-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
