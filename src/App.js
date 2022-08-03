import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./shared/components/Navbar/nav-bar";
import Footer from "./shared/components/Footer/footer";
import Home from "./Home/screen/Home";

import "./App.css";
import Product from "./Product-page/screen/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/product" element={<Product />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
