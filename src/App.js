import Login from "./pages/Login"
import ProductList from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App;