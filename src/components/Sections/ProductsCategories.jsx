import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
justify-content: center;

`

const Producto = styled.div`
    width: 26rem;
    padding-top: ${props => props.theme.fontxx};
    padding-bottom: ${props => props.theme.fontxs};
    text-align: center;

    img{
        width: 15rem;
        border-radius: ${props => props.theme.fontxx};
        box-shadow: 1px 3px 10px 2px #53535378;
        transition: all 0.3s;
        cursor: pointer;
    }

    h1{
        margin-top: ${props => props.theme.fontxx};
    }

    img:hover {
        transform: scale(1.1);
        transition: all 0.3s;
    }

    @media screen and (min-width: 425px) {
    img{
        width: 20rem;
    }
}
`

function ProductsCategories({ categories }) {
    return (
        <>
            <Section>
                {
                    categories.map(categorie => {
                        return (
                            <Producto key={categorie.id}>
                                <img src={categorie.img} alt={categorie.name} />
                                <h1>{categorie.name}</h1>
                            </Producto>
                        )
                    })
                }
            </Section>
        </>
    )
}

export default ProductsCategories