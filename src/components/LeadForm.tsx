import { useState, type FormEvent, type ReactNode } from "react";
import { brand } from "../data";

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

function notifyEmail() {
  return import.meta.env.VITE_NOTIFY_EMAIL || brand.notifyEmail;
}

export function LeadForm({ id, fields, submitLabel, successTitle, successCopy }: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") ?? "").trim()) {
      return;
    }
    const missing = fields.some(
      (field) => field.required && !String(data.get(field.name) ?? "").trim(),
    );
    if (missing) {
      setError("Please complete the required fields.");
      return;
    }

    const payload: Record<string, string> = {
      _subject: `AC Advisory inquiry — ${id}`,
      _template: "table",
      _captcha: "false",
      form: id,
    };
    for (const field of fields) {
      payload[field.label] = String(data.get(field.name) ?? "").trim();
    }
    const reply = String(data.get("email") ?? "").trim();
    if (reply) payload._replyto = reply;

    setError("");
    setSending(true);
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail())}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = (await response.json()) as { success?: string | boolean; message?: string };
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Could not send");
      }
      setSent(true);
    } catch {
      setError(
        "We could not send that just now. Email us directly and we will pick it up.",
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
      <label className="hp" aria-hidden="true">
        <span>Company website</span>
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
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
