import {Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./shared/components/Navbar/nav-bar";
import Footer from "./shared/components/Footer/footer";
import Home from "./Home/screen/Home";
import ScrollToTop from "./shared/components/scroll-top/scroll-top"
import "./App.css";
import Product from "./Product-page/screen/Product";
import Shop from "./Shop/screen/Shop";
import Search from "./Search/screen/Search";
import ErrorPage from "./shared/components/error-page/error-page";
import CategoryBook from "./shared/components/categories-books/category-book";
import ShopByCategory from "./Home/components/shop-by-category/shop-by-category";

function App() {
    return (
        <>
            <Navbar/>
            <ScrollToTop>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/search/:keyword" element={<Search/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/category/:id" element={<CategoryBook/>}/>
                <Route path="/c/:category">
                    <Route path=":id" element={<Product/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            </ScrollToTop>
            <ShopByCategory/>
            <Footer/>
        </>
    );
}

export default App;