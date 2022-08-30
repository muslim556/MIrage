import "./Mirage.css";
import { Header } from "./pages/Header";
import { Section1 } from "./pages/Section1";
import { Section2 } from "./pages/Section2";
import { Section3 } from "./pages/Section3";
import { Section4 } from "./pages/Section4";
import { Brands } from "./pages/Brands";
import { Subscription } from "./pages/Subscription";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Brands />
      <Subscription />
      <Footer />
    </div>
  );
}
