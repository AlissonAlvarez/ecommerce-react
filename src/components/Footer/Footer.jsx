import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Section = styled.section`
    display: flex;
    justify-content: center;
    background-color:${props => props.theme.textPrimary};
`

const Logos = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    padding: ${props => props.theme.fontxx};
    font-size:${props => props.theme.fontsm};
    color:${props => props.theme.textQuaternary};    
`
function Footer() {
    return (
        <Section>
            <Logos>
                <BsFacebook />
            </Logos>
            <Logos>
                <AiFillTwitterCircle />
            </Logos>
            <Logos>
                <AiFillInstagram />
            </Logos>
        </Section>
    )
}

export default Footer