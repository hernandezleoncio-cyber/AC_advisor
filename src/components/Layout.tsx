import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll("details.site-menu").forEach((node) => {
      node.removeAttribute("open");
    });
    if (location.hash) {
      const node = document.getElementById(location.hash.slice(1));
      window.setTimeout(() => node?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
