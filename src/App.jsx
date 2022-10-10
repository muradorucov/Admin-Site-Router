import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import AddProduct from "./components/admin/AddProduct";
import Admin from "./components/admin/Admin";
import ListProducts from "./components/admin/ListProducts";
import ProductDisplay from "./components/admin/ProductDisplay";
import Search from "./components/admin/Search";
import Home from "./components/user/Home";
import UserAddProduct from "./components/user/UserAddProduct";
import UserListProducts from "./components/user/UserListProducts";
import UserProductDisplay from "./components/user/UserProductDisplay";
import UserSearch from "./components/user/UserSearch";



function App() {
  return (
    <Router>
      <nav>
        <Link to="login"> Login </Link>
        <Link to="/"> User Home </Link>
        <Link to="admin"> Admin Home </Link>
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="search" element={<UserSearch />} />
          <Route path="list" element={<UserListProducts />} />
          <Route path="add" element={<UserAddProduct />} />
          <Route path=":id" element={<UserProductDisplay />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
