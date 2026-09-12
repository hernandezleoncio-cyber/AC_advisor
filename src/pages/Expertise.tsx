import { PageHero } from "../components/PageHero";
import { categories, expertiseAreas } from "../data";
import { asset } from "../lib/assets";

export function Expertise() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        title="Food Is Our Business. Retail Is Our Expertise."
        lead="We understand the food business from product development through the retail set — buy, merchandise, replenish — which is why this is more than a list of categories."
        image={asset("images/set-sushi-case.jpg")}
        imageClass="fit-case"
        alt="Packaged sushi trays merchandised in a U.S. grocery refrigerated case."
      />

      <section className="plain">
        <div className="shell">
          <p className="eyebrow">On the set</p>
          <h2>The Prepared-Foods Set</h2>
          <p className="section-lead">
            The products we used to buy, merchandise, replenish and strategize
            with — sandwiches, salads, wraps, value-added proteins, snacking
            trays, ready meals, ramen, sushi trays and soup.
          </p>
          <div className="category-grid">
            {categories.map((item) => (
              <article className="category-tile" key={item.title}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="plain ink-section">
        <div className="shell">
          <p className="eyebrow light">Beyond brokerage</p>
          <h2>The Work Behind the Categories</h2>
          <ul className="expertise-list">
            {expertiseAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
