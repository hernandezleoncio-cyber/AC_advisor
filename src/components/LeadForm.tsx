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

export function LeadForm({ id, fields, submitLabel, successTitle, successCopy }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = fields.some(
      (field) => field.required && !String(data.get(field.name) ?? "").trim(),
    );
    if (missing) {
      setError("Please complete the required fields.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">Received</p>
        <h3>{successTitle}</h3>
        <p>{successCopy}</p>
      </div>
    );
  }

  return (
    <form id={id} className="lead-form" onSubmit={onSubmit} noValidate>
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
      <button className="btn btn-ink" type="submit">
        {submitLabel}
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
