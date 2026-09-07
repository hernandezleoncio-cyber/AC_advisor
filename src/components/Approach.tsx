import { approachSteps } from "../data";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">The work</p>
          <h2 className="display">
            From conversation
            <em> to shelf.</em>
          </h2>
        </Reveal>

        <ol className="steps">
          {approachSteps.map((step, index) => (
            <Reveal as="li" key={step.numeral} delay={index * 80} className="step">
              <span className="step-numeral">{step.numeral}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
