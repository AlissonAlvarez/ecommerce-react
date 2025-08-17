import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${props => props.theme.fontxx};
  min-height: 14vh;
  background-color:${props => props.theme.textPrimary};
  z-index: 10;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 1024px) {
    /* display: flex;*/
    flex-direction: column;
    min-height: 20vh;    
  }
`

function Header() {
  return (
    <Section>
        <Logo/>
        <Nav/>
    </Section>
  )
}

export default Header