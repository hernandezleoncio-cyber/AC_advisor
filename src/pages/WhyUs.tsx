import { CtaBand, PageHero } from "../components/PageHero";
import { whyPoints } from "../data";
import { asset } from "../lib/assets";

export function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="Experience on the Retail Side. Agility on the Supplier Side."
        lead="We know what it takes to get a product from “interesting” to “on shelf.”"
        image={asset("images/cheese.jpg")}
        alt="The buyer’s side of the desk — where products are judged."
      />

      <section className="plain">
        <div className="shell">
          <h2>We Know What It Takes to Get a Product From “Interesting” to “On Shelf.”</h2>
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
        title="Let’s Put Great Food on More Tables."
        copy="Retail expertise. Real relationships. Hands-on execution."
        to="/contact"
        label="Let’s Talk →"
      />
    </>
  );
}
