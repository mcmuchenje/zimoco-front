import Login from "./pages/Login"
import ProductList from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/" element={<ProductList />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<Forgot />} />
    </Routes>
  )
}

export default App;