import axios from "axios";
import authHeader from "../auth-header";

const API_URL = "https://api.caynum.com/api";

const getAll = async () => {
  return await axios.get(API_URL + "/products", { headers: authHeader() });
}

const get = async (id) => {
  return await axios.get(API_URL + `/products/${id}`, { headers: authHeader() });
}

const findByPartNumber = async (partnumber) => {
  return await axios.get(`/products?partnumber=${partnumber}`, { headers: authHeader() })
}


const ProductService = {
  get,
  getAll,
  findByPartNumber
}

export default ProductService;