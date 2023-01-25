import React from 'react'
import styled from 'styled-components'

const Section = styled.hr`
    text-align: center;
    border-bottom: ${props => props.theme.fontxx} solid ${props => props.theme.title};   
`
function Hr() {
  return (
    <Section/>
  )
}

export default Hr