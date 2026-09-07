import { AppointmentBook } from "./AppointmentBook";
import { Reveal } from "./Reveal";

export function Inquire() {
  return (
    <section className="inquire" id="inquire">
      <div className="shell inquire-grid">
        <Reveal>
          <p className="eyebrow">By introduction</p>
          <h2 className="display">
            Request
            <em> thirty minutes.</em>
          </h2>
          <p className="inquire-copy">
            Open times for a thirty-minute introductory conversation, shown in
            Eastern Time. Choose a time. If the conversation is a fit, a
            confirmation follows — the same path as a Google Appointment
            Schedule on his calendar.
          </p>
          <figure className="inquire-figure">
            <img
              src="/images/dining.jpg"
              alt="A quietly set table — the rooms where great food is judged."
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <AppointmentBook />
        </Reveal>
      </div>
    </section>
  );
}
