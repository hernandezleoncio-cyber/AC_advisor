import { PageHero } from "../components/PageHero";
import { aboutFocus } from "../data";
import { asset } from "../lib/assets";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by People Who Understand Food and Retail."
        lead="Not a corporate history. A practice built from the buyer’s side of the desk — merchandising the set, not plating a restaurant dish."
        image={asset("images/set-sandwiches.jpg")}
        imageClass="fit-pack"
        alt="Grab-and-go sandwiches merchandised on a retail set with price tickets."
      />

      <section className="plain">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">The story</p>
            <h2>We connect great food companies with the right retailers—and we understand both sides of the table.</h2>
            <p>
              That is the work. Not a commodity brokerage. A retail growth
              partner: access, expertise, relationships and execution.
            </p>
          </div>
          <ul className="about-focus">
            {aboutFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="plain">
        <div className="shell">
          <p className="eyebrow">The people behind the relationships</p>
          <h2>Why a manufacturer should trust this practice with their retail business.</h2>
          <div className="team-board">
            <article className="team-card">
              <div className="team-photo" aria-hidden="true">
                AC
              </div>
              <h3>Principal</h3>
              <p>
                25+ years in retail — merchandising, prepared foods, private
                brand, product development, supplier development and retail
                strategy with major U.S. retailers. The question we answer on
                every introduction: would we have taken this meeting if we still
                sat on the buyer’s side of the desk?
              </p>
            </article>
            <article className="team-card muted">
              <div className="team-photo" aria-hidden="true">
                —
              </div>
              <h3>Team photographs live here</h3>
              <p>
                Short bios. Not résumés. Real people, not stock photography —
                added as portraits are ready.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
