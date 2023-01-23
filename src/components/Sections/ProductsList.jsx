import React from 'react';
import styled from 'styled-components';
import { addProductCart, deleteProductCart } from '../../redux/reducers/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
min-height: 60vh;
background-color: white;
`

const Producto = styled.div`
    width: 26rem;
    padding-top: ${props => props.theme.fontxx};
    padding-bottom: ${props => props.theme.fontxs};
    text-align: center;

    img{
        width: 8rem;
    }

    h1{
        margin-top: ${props => props.theme.fontxx};
    }

    @media screen and (min-width: 425px) {
    img{
        width: 16rem;
    }
}
`



function ProductsList({ products }) {

    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);


    const handleAddProduct = (productId) => {
        const product = products.find(product => product.id === productId);

        dispatch(addProductCart(product));
    }
    return (
        <>
            <Section>
                {
                    products.map(product => {
                        return (
                            <Producto key={product.id}>
                                <img src={product.img} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p><b></b> {product.category}</p>
                                <p><b>$</b> {product.price}</p>
                                <button onClick={() => handleAddProduct(product.id)}
                                >
                                    {productsList.find(pdt => pdt.id === product.id) ? "Add" : "Add"} to Cart
                                </button>
                            </Producto>
                        )
                    })
                }
            </Section>
        </>
    )
}

export default ProductsList