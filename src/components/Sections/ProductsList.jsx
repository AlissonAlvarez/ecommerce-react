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

    button{
        margin-top: ${props => props.theme.fontxs};
        padding: ${props => props.theme.fontxs};
        border-radius:${props => props.theme.fontxs};
        font-size:${props => props.theme.fontxs};
        font-weight: bolder;
    }
    
    .btn-add{
        background-color:${props => props.theme.body};
        color:${props => props.theme.title};
    }

    .btn-del{
        background-color:${props => props.theme.title};
        color:${props => props.theme.body};
    }



    button:hover{
        transform: scale(1.1);
        transition: transform 0.5s;
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


    const handleAddOrRemoveProduct = (productId) => {
        const product = products.find(product => product.id === productId);
        if (productsList.find(pdt => pdt.id === productId)) {
          dispatch(deleteProductCart(productId));
        } else {
          dispatch(addProductCart(product));
        }
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
                                <button
                                    className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-del" : "btn-add"}`}
                                    onClick={() => handleAddOrRemoveProduct(product.id)}
                                >
                                    {productsList.find(pdt => pdt.id === product.id) ? "Eliminar" : "Agregar"} al Carrito
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