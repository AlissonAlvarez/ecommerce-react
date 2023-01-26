import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {  addProductsCart, deleteProductCart } from '../redux/reducers/cart/cartSlice';

const Section=styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:60vh;
  background-color:${props => props.theme.textPrimary};
  img{
    width: 8rem;
  }
  @media screen and (max-width: 1024px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
  }
`

function Cart() {
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart);
  const handleAddProduct = (productId) => dispatch(addProductsCart(productId));
  const handleDeleteProduct = (productId) => dispatch(deleteProductCart(productId));
 
  return (
    <Section>
      <table className="table">
        <thead>
          <tr>
          <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
              <td scope="row"><img src={product.img} alt="" /></td>
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