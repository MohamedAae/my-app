import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./shared/components/Navbar/nav-bar";
import Footer from "./shared/components/Footer/footer";
import Home from "./Home/screen/Home";

import "./App.css";
import Product from "./Product-page/screen/Product";
import ErrorPage from "./shared/components/error-page/error-page";
import CategoryBook from "./shared/components/categories-books/category-book";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<CategoryBook />} />
        <Route path="/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
