import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewProducts from "./components/NewProducts";
import BestSales from "./components/BestSales";
import LowCalories from "./components/LowCalories";
import Vegan from "./components/Vegan";
import Milks from "./components/Milks";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewProducts />
      <BestSales />
      <LowCalories />
      <Vegan />
      <Milks />
      <Footer />
    </main>
  );
};

export default Home;
