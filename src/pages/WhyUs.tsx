import { CtaBand, PageHero } from "../components/PageHero";
import { whyPoints } from "../data";
import { asset } from "../lib/assets";

export function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="Experience on the Retail Side. Agility on the Supplier Side."
        lead="We know what it takes to get a product from “interesting” to “on the set.”"
        image={asset("images/set-pizza.jpg")}
        imageClass="fit-freezer"
        alt="Frozen pizza and entrees merchandised in a U.S. supermarket freezer aisle."
      />

      <section className="plain">
        <div className="shell">
          <h2>We Know What It Takes to Get a Product From “Interesting” to “On the Set.”</h2>
          <ol className="why-list">
            {whyPoints.map((item) => (
              <li key={item.numeral}>
                <span>{item.numeral}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Let’s Put Great Food on More Shelves."
        copy="Buy. Merchandise. Replenish. Strategize."
        to="/contact"
        label="Let’s Talk →"
      />
    </>
  );
}
