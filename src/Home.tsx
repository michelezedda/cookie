import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import CategorySelection from "./components/categories/CategorySelection";
import { useEffect } from "react";
import { useApp } from "./store/appStore";

const Home = () => {
  const scrollToTop = useApp((state) => state.scrollToTop);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-screen-xl">
        <Promo />
        <CategorySelection />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
