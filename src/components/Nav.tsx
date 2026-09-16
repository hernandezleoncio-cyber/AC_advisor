import { NavLink } from "react-router-dom";
import { brand, nav } from "../data";
import { asset } from "../lib/assets";

export function Nav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink className="wordmark" to="/" aria-label={`${brand.name} home`}>
          <img
            className="wordmark-mark"
            src={asset("logo.svg")}
            alt=""
            width="36"
            height="36"
          />
          <span className="wordmark-lockup">Merchants Forge</span>
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
