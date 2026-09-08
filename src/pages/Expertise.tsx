import { PageHero } from "../components/PageHero";
import { categories, expertiseAreas } from "../data";

export function Expertise() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        title="Food Is Our Business. Retail Is Our Expertise."
        lead="We understand the food business from product development through the retail shelf — which is why this is more than a list of categories."
        image="/images/market.jpg"
        alt="Category work starts with the product, not a brochure."
      />

      <section className="plain">
        <div className="shell">
          <p className="eyebrow">Where we work</p>
          <h2>The Categories We Know</h2>
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
