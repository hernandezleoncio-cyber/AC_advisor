import { NavLink } from "react-router-dom";
import { brand } from "../data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">{brand.line}</p>
          <p className="footer-promise">{brand.promise}</p>
        </div>
        <NavLink className="btn btn-light" to="/contact">
          Let’s Talk
        </NavLink>
      </div>
      <div className="shell footer-meta">
        <span>{brand.name}</span>
        <span>Buy. Merchandise. Replenish. Strategize.</span>
      </div>
    </footer>
  );
}
