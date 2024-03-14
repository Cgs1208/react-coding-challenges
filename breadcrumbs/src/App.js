import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductsListing from "./pages/products-listing";
import ProductDetail from "./pages/products-detail";
import BreadCrumbs from "./components/BreadCrumbs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* breadcrumbs */}
        <BreadCrumbs />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsListing />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
