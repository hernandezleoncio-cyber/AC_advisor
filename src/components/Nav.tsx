import { NavLink } from "react-router-dom";
import { brand, nav } from "../data";

export function Nav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink className="wordmark" to="/" aria-label={`${brand.name} home`}>
          <span className="wordmark-mono">AC</span>
          <span className="wordmark-name">Advisory</span>
        </NavLink>
        <nav className="site-links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="talk" to="/contact">
          Let’s Talk
        </NavLink>
        <details className="site-menu">
          <summary>
            <span className="sr-only">Open menu</span>
            <span />
            <span />
          </summary>
          <div>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
            <NavLink className="talk" to="/contact">
              Let’s Talk
            </NavLink>
          </div>
        </details>
      </div>
    </header>
  );
}
