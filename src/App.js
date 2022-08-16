import {Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./shared/components/Navbar/nav-bar";
import Footer from "./shared/components/Footer/footer";
import Home from "./Home/screen/Home";
import ScrollToTop from "./shared/components/scroll-top/scroll-top";
import "./App.css";
import Product from "./Product-page/screen/Product";
import Shop from "./Shop/screen/Shop";
import Search from "./Search/screen/Search";
import ErrorPage from "./shared/components/error-page/error-page";
import CategoryBook from "./shared/components/categories-books/category-book";
import ShopByCategory
    from "./Home/components/shop-by-category/shop-by-category";
import UserAccount from "./shared/components/user-account/user-account";
import Checkout from "./shared/components/cart-checkout/cartcheckout";
import Dashboard from "./Dashboard/screen/Dashboard";
import EditProduct from "./Dashboard/components/edit-product/edit-product";
import Products from "./Dashboard/components/products/products";

const layout = (component) => {
    return (<>
        <Navbar/>
        {component}
        <ShopByCategory/>
        <Footer/>
    </>)
}

const App = () => {
    return (<>
        <ScrollToTop>
            <Routes>
                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="reviews" element={<reviews />}/>
                    <Route path="products" element={<Products />}/>
                    <Route path="edit-product/:id" element={<EditProduct/>}/>
                </Route>
                <Route exact path="/" element={<Navigate to="/home"/>}/>
                <Route
                    path="/home"
                    element={layout(<Home/>)}
                />
                <Route
                    path="/shop"
                    element={layout(<Shop/>)}
                />
                <Route
                    path="/search/:keyword"
                    element={layout(<Search/>)}
                />
                <Route
                    path="/checkout"
                    element={layout(<Checkout/>)}
                />
                <Route
                    path="/my-account"
                    element={layout(<UserAccount/>)}
                />
                <Route
                    path="/category/:id"
                    element={layout(<CategoryBook/>)}
                />
                <Route
                    path="/c/:category"
                >
                    <Route path=":id" element={layout(<Product/>)}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </ScrollToTop>
    </>);
}

export default App;
