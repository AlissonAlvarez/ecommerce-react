import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {  addProductsCart, deleteProductCart } from '../redux/reducers/cart/cartSlice';

const Section=styled.section`
min-height:61vh`

function Cart() {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart);
  const handleAddProduct = (productId) => dispatch(addProductsCart(productId));
  const handleDeleteProduct = (productId) => dispatch(deleteProductCart(productId));
 
  return (
    <Section>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => handleAddProduct(product)}>Agregar</button><button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Section>
  )
}

export default Cart