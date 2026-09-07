import { Approach } from "./components/Approach";
import { Audiences } from "./components/Audiences";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Inquire } from "./components/Inquire";
import { Introduction } from "./components/Introduction";
import { Nav } from "./components/Nav";
import { Story } from "./components/Story";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Story />
        <Audiences />
        <Approach />
        <Inquire />
      </main>
      <Footer />
    </>
  );
}
