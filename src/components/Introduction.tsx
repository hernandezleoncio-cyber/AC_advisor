import { Reveal } from "./Reveal";

export function Introduction() {
  return (
    <section className="intro" id="work">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">The opportunity</p>
          <h2 className="display">
            The connector between exceptional food producers and major
            retailers.
          </h2>
        </Reveal>

        <div className="intro-grid">
          <Reveal className="intro-figure" delay={80}>
            <img
              src="/images/farm.jpg"
              alt="Golden grain fields at first light — the origin of exceptional food."
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="lede">
              Great food does not find its way to the right shelf by accident.
              It arrives there through judgment: who to meet, how to speak, and
              what a buyer needs to see before they will move.
            </p>
            <p>
              AC Advisory sits in that interval. We work with manufacturers,
              growers and emerging brands who are ready for retail — and with
              retailers looking for products that earn their place.
            </p>
            <p>
              The work is discreet, specific, and built for the rooms where
              assortment is decided.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
