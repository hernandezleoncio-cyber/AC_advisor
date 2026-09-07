import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section className="story" id="story">
      <div className="story-media" aria-hidden="true">
        <img src="/images/cheese.jpg" alt="" />
        <div className="story-veil" />
      </div>

      <div className="shell story-inner">
        <Reveal>
          <p className="eyebrow eyebrow-light">The differentiator</p>
          <h2 className="display display-light">
            Built from the Buyer’s
            <em> Side of the Desk</em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="story-body">
            We understand what retailers need because we’ve sat on the retailer
            side of the table. We know how buyers evaluate products, what makes
            a compelling presentation, and what it takes to move an idea from
            conversation to shelf.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <blockquote>
            <p>Not a broker. An inside vantage — and the discipline to use it.</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
