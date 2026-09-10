import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Expertise } from "./pages/Expertise";
import { Home } from "./pages/Home";
import { Manufacturers } from "./pages/Manufacturers";
import { Retailers } from "./pages/Retailers";
import { WhyUs } from "./pages/WhyUs";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
