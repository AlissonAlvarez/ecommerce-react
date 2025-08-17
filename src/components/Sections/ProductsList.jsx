import React from 'react';
import styled from 'styled-components';
import { addProductCart, deleteProductCart } from '../../redux/reducers/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
min-height: 60vh;
background-color:${props => props.theme.textPrimary};
padding-top: ${props => props.theme.fontml};
gap: 50px;
`

const Producto = styled.div`
    width: 20rem;
    padding-top: ${props => props.theme.fontxx};
    padding-bottom: ${props => props.theme.fontxs};
    text-align: center;
    box-shadow: 0px 1px 10px 1px #3a3a3a86;
    border-radius: ${props => props.theme.fontxx};

    img{
        width: 8rem;
    }

    h1{
        margin-top: ${props => props.theme.fontxx};
    }

    button{
        margin-top: ${props => props.theme.fontxs};
        padding: ${props => props.theme.fontxs};
        border-radius:${props => props.theme.fontxx};
        font-size:${props => props.theme.fontxs};
        cursor: pointer;
        transition: transform 0.5s;
        /* font-weight: lighter; */
    }
    
    .btn-add{
        background-color:${props => props.theme.textQuaternary};
        color:${props => props.theme.textPrimary};
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
        width: 12rem;
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
                                    {productsList.find(pdt => pdt.id === product.id) ? "Eliminar" : "Agregar"} Producto
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