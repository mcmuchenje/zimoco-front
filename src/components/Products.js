import React from "react";
import styled from "styled-components";
import ProductService from "../services/product.service";
import { useState, useEffect } from "react";
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    ProductService.getAll()
      .then(response => {
        setProducts(response.data.rows);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e.message);
      })
  }

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;