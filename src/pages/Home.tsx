import { Link } from "react-router-dom";
import { CtaBand } from "../components/PageHero";
import {
  brand,
  categories,
  differentiators,
  problems,
  steps,
} from "../data";

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div>
            <p className="eyebrow">{brand.line}</p>
            <h1>
              Great Food.
              <br />
              The Right Retailers.
              <br />
              <em>Real Results.</em>
            </h1>
            <p className="lead">
              We connect food manufacturers, growers and emerging brands with
              the retailers that can help them grow.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-tomato" to="/manufacturers">
                I’m a Manufacturer →
              </Link>
              <Link className="btn btn-line" to="/retailers">
                I’m a Retailer →
              </Link>
            </div>
          </div>
          <figure className="home-hero-figure">
            <img
              src="/images/olive.jpg"
              alt="Exceptional food, ready for the right retail home."
            />
            <figcaption>Retail expertise. Real relationships. Hands-on execution.</figcaption>
          </figure>
        </div>
      </section>

      <section className="support">
        <div className="shell support-grid">
          <h2>Retail expertise meets entrepreneurial speed.</h2>
          <p>
            We help food companies navigate the path from product development to
            retail placement—bringing the relationships, experience and
            hands-on support needed to turn good products into successful retail
            businesses.
          </p>
        </div>
      </section>

      <section className="problem">
        <div className="shell">
          <p className="eyebrow">The path to market</p>
          <h2>Getting a Great Product on the Shelf Is Hard.</h2>
          <p className="section-lead">
            A manufacturer can have an outstanding product and still struggle
            with:
          </p>
          <ul className="problem-list">
            {problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="come-in">
            <h3>That’s Where We Come In.</h3>
            <p>
              We bring the retailer perspective, relationships and experience to
              help manufacturers make smarter decisions—and create better
              opportunities. We aren’t merely making introductions. We help
              manage the entire path to market.
            </p>
          </div>
        </div>
      </section>

      <section className="sides">
        <div className="shell">
          <p className="eyebrow">Two audiences</p>
          <h2>We Work Both Sides of the Table.</h2>
        </div>
        <div className="sides-split">
          <article>
            <p className="eyebrow">For Manufacturers &amp; Growers</p>
            <h3>You Make Great Food. We’ll Help Find the Right Home for It.</h3>
            <p>
              We represent quality food companies and help them identify,
              approach and develop business with the retailers where their
              products have the greatest potential.
            </p>
            <Link className="text-link" to="/manufacturers">
              Explore Manufacturer Services →
            </Link>
          </article>
          <article>
            <p className="eyebrow light">For Retailers</p>
            <h3>Looking for What’s Next?</h3>
            <p>
              We connect retailers with innovative manufacturers, growers and
              food companies capable of bringing differentiated products to
              market.
            </p>
            <Link className="text-link light" to="/retailers">
              Work With Us →
            </Link>
          </article>
        </div>
      </section>

      <section className="expertise-home">
        <div className="shell">
          <p className="eyebrow">Our expertise</p>
          <h2>Food Is Our Business. Retail Is Our Expertise.</h2>
          <p className="section-lead">
            We understand the food business from product development through
            the retail shelf.
          </p>
          <div className="category-grid">
            {categories.map((item) => (
              <Link className="category-tile" key={item.title} to="/expertise">
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="desk">
        <div className="shell desk-grid">
          <div>
            <p className="eyebrow">The differentiator</p>
            <h2>We’ve Sat on the Other Side of the Desk.</h2>
            <p>
              We understand how retailers think because we’ve been part of the
              retail decision-making process.
            </p>
            <p>
              We know what buyers look for, how products are evaluated, what
              makes a compelling presentation and what it takes to turn an
              initial conversation into a retail opportunity.
            </p>
          </div>
          <ul className="desk-points">
            {differentiators.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="how">
        <div className="shell">
          <p className="eyebrow">How it works</p>
          <h2>From Great Product to Retail Opportunity</h2>
          <p className="section-lead">
            Don’t hire someone who gets a meeting. Work with someone who builds
            the business.
          </p>
          <ol className="steps-six">
            {steps.map((step) => (
              <li key={step.numeral}>
                <span>{step.numeral}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Let’s Put Great Food on More Tables."
        copy="Whether you’re a manufacturer looking for the right retail partner or a retailer looking for the next great product, we’d like to hear from you."
        to="/contact"
        label="Let’s Talk →"
      />
    </>
  );
}
