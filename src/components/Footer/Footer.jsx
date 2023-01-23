import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Section = styled.section`
    display: flex;
    justify-content: center;
    background-color:${props => props.theme.textSecondary};
`

const Logos = styled.div`
    margin: ${props => props.theme.fontxs};
    font-size:${props => props.theme.fontll};
    color:${props => props.theme.body};    
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