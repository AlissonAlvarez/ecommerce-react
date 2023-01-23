import React from 'react'
import styled from 'styled-components'
import img from '../../assets/images/Logo.png'

const Section = styled.section`
    position:relative;
    display: flex;
    align-items: center;   
`

const Img = styled.div`
    img{
        width:${props => props.theme.fontml};
        height:${props => props.theme.fontml};
    }            
`

const Title = styled.h1`
    margin-left:${props => props.theme.fontxx};
    font-size:${props => props.theme.fontss};
    color:${props => props.theme.title};
`

function Logo() {
    return (
        <Section>
            <Img>
                <img src={img} alt='Logo' />
            </Img>
            <Title>
                EL LABRIEGO
            </Title>
        </Section>
    )
}

export default Logo