import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
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
    }

    h1{
        margin-top: ${props => props.theme.fontxx};
    }

    @media screen and (min-width: 425px) {
    img{
        width: 24rem;
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