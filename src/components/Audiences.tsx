import { manufacturerCapabilities, retailerCapabilities } from "../data";
import { Reveal } from "./Reveal";

export function Audiences() {
  return (
    <section className="audiences" id="audiences">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Who we serve</p>
          <h2 className="display">Two sides of the same conversation.</h2>
        </Reveal>
      </div>

      <div className="audience" id="producers">
        <div className="shell audience-split">
          <Reveal className="audience-portrait">
            <img
              src="/images/market.jpg"
              alt="A curated specialty produce market — exceptional food, ready for the right retailer."
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="chapter">Chapter I</p>
              <h3>For Manufacturers &amp; Growers</h3>
              <p className="audience-lead">
                Introductions, judgment, and the practical work of winning
                retail — without the theatre of a typical brokerage.
              </p>
            </Reveal>
            <ol className="capability-list">
              {manufacturerCapabilities.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 40}>
                  <span className="capability-title">{item.title}</span>
                  <span className="capability-copy">{item.copy}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="audience audience-dark" id="retailers">
        <div className="shell audience-split reverse">
          <Reveal className="audience-portrait">
            <img
              src="/images/produce.jpg"
              alt="A precisely merchandised produce wall — the standard retailers hold."
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="chapter chapter-light">Chapter II</p>
              <h3>For Retailers</h3>
              <p className="audience-lead">
                A private channel to producers who are prepared — products that
                differentiate a set, not dilute it.
              </p>
            </Reveal>
            <ol className="capability-list light">
              {retailerCapabilities.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 40}>
                  <span className="capability-title">{item.title}</span>
                  <span className="capability-copy">{item.copy}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
