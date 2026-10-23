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

export function LeadForm({ id, fields, submitLabel, successTitle, successCopy }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = fields.some(
      (field) => field.required && !String(data.get(field.name) ?? "").trim(),
    );
    if (missing) {
      setError("Please complete the required fields.");
      return;
    }

    const payload: Record<string, string> = {
      _subject: `Merchants Forge website — ${id}`,
      _template: "table",
      _captcha: "false",
      form: id,
    };
    for (const field of fields) {
      payload[field.name] = String(data.get(field.name) ?? "").trim();
    }
    if (payload.email) {
      payload._replyto = payload.email;
    }

    setError("");
    setSending(true);
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = (await response.json()) as { success?: boolean | string; message?: string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Send failed");
      }
      setSent(true);
    } catch {
      setError(
        "We couldn’t send that just now. Email Adam.Chadwick@yahoo.com directly and we’ll pick it up.",
      );
    } finally {
      setSending(false);
    }
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
