import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import styled from 'styled-components';

const Section = styled.section`
  height: 11vh;
  padding-top: ${props => props.theme.fontss};
  h1{
  color:${props => props.theme.title};
  font-size:${props => props.theme.fontss};
  }
  @media screen and (max-width: 767px){
    margin-left: 3.3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px){
    margin-left:5.3rem;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 4.3rem;
  }
`

function Title(props) {
  return (
    <Section>
      <h1><FaCaretRight/>{props.nombre}</h1>
    </Section>
  )
}

export default Title