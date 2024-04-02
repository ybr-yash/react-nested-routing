import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import AddProduct from './components/products/AddProduct';
import DisplayProduct from './components/products/DisplayProduct';
import ListProducts from './components/products/ListProducts';
import Products from './components/products/Products';
import SearchProduct from './components/products/SearchProduct';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<SearchProduct />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<DisplayProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
