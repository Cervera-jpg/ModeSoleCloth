import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginPage from "./Pages/LoginPage";
import banner_k from "./Components/Assets/banner_k.png";
import banner_w from "./Components/Assets/banner_w.png";
import banner_m from "./Components/Assets/banner_m.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/women"
            element={<ShopCategory banner={banner_w} category="women" />}
          />
          <Route
            path="/men"
            element={<ShopCategory banner={banner_m} category="men" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_k} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
