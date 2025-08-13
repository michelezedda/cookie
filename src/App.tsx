import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./pages/cart/Cart";
import Receipt from "./pages/Receipt";
import History from "./pages/profile/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/profile" element={<History />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
