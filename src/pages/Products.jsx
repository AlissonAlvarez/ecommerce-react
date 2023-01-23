import React from 'react';
import { useState, useEffect } from 'react';
import ProductsList from '../components/Sections/ProductsList';
import Axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3004/products').then(response => {
        setProducts(response.data);
      })
  }, [])

  return (
    <ProductsList products={products} />
  )
}

export default Products