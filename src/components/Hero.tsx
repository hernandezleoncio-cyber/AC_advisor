export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img src="/images/olive.jpg" alt="" />
        <div className="hero-veil" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Private food retail advisory</p>
        <h1>
          Connecting Great Food
          <em> to the Right Retailers</em>
        </h1>
        <p className="hero-lead">
          We help food manufacturers, growers and emerging brands bring their
          products to market — through the relationships, retail expertise and
          hands-on support they need to win.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#inquire">
            Request an introduction
          </a>
          <a className="btn btn-ghost" href="#story">
            The buyer’s vantage
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#work" aria-label="Continue">
        <span>Scroll</span>
      </a>
    </section>
  );
}
