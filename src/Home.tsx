import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewProducts from "./components/NewProducts";
import LowCalories from "./components/LowCalories";
import Vegan from "./components/Vegan";
import Milks from "./components/Milks";
import Promo from "./components/Promo";
import SweetestDeals from "./components/SweetestDeals";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-screen-xl">
        <Promo />
        <NewProducts />
        <SweetestDeals />
        <LowCalories />
        <Vegan />
        <Milks />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
