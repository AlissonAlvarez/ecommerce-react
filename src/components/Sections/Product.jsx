import React from 'react'
import styled from 'styled-components'

const Section =styled.div`
    display: flex;
    
    img{
        width:20%
    }
    h1{
    }


`
const Producto=styled.div`
`
function Product(props) {
  return (
    <Section>
        <Producto><img src={props.productImg} alt={props.productAlt} />
        <h1>{props.productTitle}</h1>
        <button>Ver más información</button></Producto>
        

    </Section>
  )
}

export default Product