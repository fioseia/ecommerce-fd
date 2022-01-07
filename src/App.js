import { Routes, Route } from 'react-router-dom';
import './App.css';
import Announcement from './components/General/Announcement/Announcement';
import Footer from './components/General/Footer/Footer';
import NavBar from './components/General/NavBar/NavBar';
import Cart from './screens/Cart/Cart'
import CartContextProvider from './context/CartContext';
import { ProductsContextProvider } from './context/ProductsContext';
import Home from './screens/Home/Home';
import Product from './screens/Product/Product';
import Products from './screens/Products/Products';
import OrderData from './screens/OrderData/OrderData';


function App() {
    return (
        <div className="App">
            <ProductsContextProvider>
                <CartContextProvider>

                    <NavBar />
                    <Announcement />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/categoria/:categId" element={<Products />} />
                        <Route exact path="/item/:itemId" element={<Product />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/order/:orderId" element={<OrderData />} />
                    </Routes>

                    <Footer />

                </CartContextProvider>
            </ProductsContextProvider>
        </div>
    );
}

export default App;
