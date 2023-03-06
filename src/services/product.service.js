import axios from "axios";
import authHeader from "../auth-header";

const API_URL = "http://localhost:8080/api";

const getAll = async () => {
  return await axios.get(API_URL + "/products", { headers: authHeader() });
}

const get = async (id) => {
  return await axios.get(API_URL + `/products/${id}`, { headers: authHeader() });
}


const ProductService = {
  get,
  getAll
}

export default ProductService;