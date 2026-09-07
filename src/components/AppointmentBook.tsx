import { useMemo, useState, type FormEvent } from "react";
import { APPOINTMENT, GOOGLE_APPOINTMENT_URL } from "../config";
import {
  addMonths,
  bookingHorizon,
  firstBookableDay,
  formatTime,
  longDate,
  monthGrid,
  monthLabel,
  slotsFor,
  startOfMonth,
  todayIso,
} from "../lib/schedule";

type Guest = {
  name: string;
  organization: string;
  email: string;
};

const emptyGuest: Guest = { name: "", organization: "", email: "" };

export function AppointmentBook() {
  if (GOOGLE_APPOINTMENT_URL) {
    const src = GOOGLE_APPOINTMENT_URL.includes("?")
      ? `${GOOGLE_APPOINTMENT_URL}&gv=true`
      : `${GOOGLE_APPOINTMENT_URL}?gv=true`;

    return (
      <div className="appointment-embed">
        <iframe title={APPOINTMENT.title} src={src} loading="lazy" />
      </div>
    );
  }

  return <PreviewSchedule />;
}

function PreviewSchedule() {
  const today = todayIso(APPOINTMENT.timezone);
  const horizon = useMemo(() => bookingHorizon(today), [today]);
  const [month, setMonth] = useState(startOfMonth(firstBookableDay(today)));
  const [date, setDate] = useState(firstBookableDay(today));
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(emptyGuest);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const days = monthGrid(month, horizon.start, horizon.end);
  const times = slotsFor(date);
  const canPrev = addMonths(month, -1) >= startOfMonth(horizon.start);
  const canNext = addMonths(month, 1) <= startOfMonth(horizon.end);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!time) {
      setError("Choose a time that is open.");
      return;
    }
    if (!guest.name.trim() || !guest.email.trim()) {
      setError("A name and email let us send the confirmation.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guest.email)) {
      setError("Please use a proper email address.");
      return;
    }
    setError("");
    setConfirmed(`${longDate(date)} at ${formatTime(time)} ${APPOINTMENT.timezoneLabel}`);
  };

  if (confirmed) {
    return (
      <div className="inquire-success appointment-success" role="status">
        <p className="eyebrow">Requested</p>
        <h3>This time is held for review.</h3>
        <p>
          {confirmed}. If the conversation is a fit, a confirmation will follow.
        </p>
      </div>
    );
  }

  return (
    <div className="appointment">
      <header className="appointment-head">
        <p className="eyebrow">Appointment schedule</p>
        <h3>{APPOINTMENT.title}</h3>
        <p>
          {APPOINTMENT.duration} · {APPOINTMENT.timezoneLabel}
        </p>
      </header>

      <div className="appointment-board">
        <div className="appointment-cal">
          <div className="cal-nav">
            <button
              type="button"
              className="cal-arrow"
              onClick={() => setMonth((value) => addMonths(value, -1))}
              disabled={!canPrev}
              aria-label="Previous month"
            >
              ‹
            </button>
            <p>{monthLabel(month)}</p>
            <button
              type="button"
              className="cal-arrow"
              onClick={() => setMonth((value) => addMonths(value, 1))}
              disabled={!canNext}
              aria-label="Next month"
            >
              ›
            </button>
          </div>
          <div className="cal-week" aria-hidden="true">
            {["S", "M", "T", "W", "T", "F", "S"].map((label, index) => (
              <span key={`${label}-${index}`}>{label}</span>
            ))}
          </div>
          <div className="cal-grid">
            {days.map((day) => (
              <button
                key={day.iso}
                type="button"
                className={[
                  "cal-day",
                  day.inMonth ? "" : "is-outside",
                  day.bookable ? "is-open" : "",
                  day.iso === date ? "is-selected" : "",
                  day.iso === today ? "is-today" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                disabled={!day.bookable}
                onClick={() => {
                  setDate(day.iso);
                  setTime("");
                  setError("");
                }}
              >
                {day.date}
              </button>
            ))}
          </div>
        </div>

        <div className="appointment-times">
          <p className="appointment-date">{longDate(date)}</p>
          {times.length ? (
            <div className="time-list" role="listbox" aria-label="Open times">
              {times.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  role="option"
                  aria-selected={time === slot}
                  className={`time-slot ${time === slot ? "is-selected" : ""}`}
                  onClick={() => {
                    setTime(slot);
                    setError("");
                  }}
                >
                  {formatTime(slot)}
                </button>
              ))}
            </div>
          ) : (
            <p className="appointment-empty">No remaining times on this day.</p>
          )}
        </div>
      </div>

      <form className="inquire-form appointment-guest" onSubmit={onSubmit} noValidate>
        <label>
          <span>Full name *</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={guest.name}
            onChange={(event) => setGuest((current) => ({ ...current, name: event.target.value }))}
          />
        </label>
        <label>
          <span>Organization</span>
          <input
            type="text"
            name="organization"
            autoComplete="organization"
            value={guest.organization}
            onChange={(event) =>
              setGuest((current) => ({ ...current, organization: event.target.value }))
            }
          />
        </label>
        <label className="full">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={guest.email}
            onChange={(event) => setGuest((current) => ({ ...current, email: event.target.value }))}
          />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn btn-ink" type="submit">
          {time
            ? `Request ${formatTime(time)} · ${longDate(date)}`
            : "Choose a time"}
        </button>
      </form>
    </div>
  );
}
