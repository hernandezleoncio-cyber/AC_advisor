import { Link } from "react-router-dom";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
};

export function PageHero({ eyebrow, title, lead, image, alt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
        <figure>
          <img src={image} alt={alt} />
        </figure>
      </div>
    </section>
  );
}

type BandProps = {
  title: string;
  copy: string;
  to: string;
  label: string;
};

export function CtaBand({ title, copy, to, label }: BandProps) {
  const isHash = to.includes("#");
  const action = isHash ? (
    <a className="btn btn-tomato" href={to}>
      {label}
    </a>
  ) : (
    <Link className="btn btn-tomato" to={to}>
      {label}
    </Link>
  );

  return (
    <section className="cta-band">
      <div className="shell cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        {action}
      </div>
    </section>
  );
}

