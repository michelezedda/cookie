import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewProducts from "./components/NewProducts";
import LowCalories from "./components/LowCalories";
import Vegan from "./components/Vegan";
import Promo from "./components/Promo";
import SweetestDeals from "./components/SweetestDeals";
import AllCookies from "./components/AllCookies";

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
        <AllCookies />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
