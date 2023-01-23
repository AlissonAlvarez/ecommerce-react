import React from 'react';
import styled from 'styled-components';
import { MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";


const Section = styled.section`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.title};
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
`

const Information = styled.div`
`

const Info = styled.div`
text-align:center;
padding:${props => props.theme.fontxs};
h1{
  color: ${props => props.theme.textPrimary};;
}

p{
  margin-top: 5%;
}
`

const Ubication = styled.div`
  iframe{
    border-radius: 100%;
    height: 20rem;
    width: 20rem;
    border: 5px solid ${props => props.theme.textPrimary};
  }
`

function Contact() {
  return (
    <Section>
      <Information>
        <Info>
          <h1> <MdPlace /> Dirección:</h1>
          <p>Carrera 88 # 74 B - 29 Bogotá D.C</p>
        </Info>
        <Info>
          <h1> <BsFillTelephoneFill /> Telefono:</h1>
          <p>3124698883</p>
        </Info>
        <Info>
          <h1> <HiMail /> Email:</h1>
          <p>supermercadoellabriego@gmail.com</p>
        </Info>
      </Information>
      <Ubication>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4027631292856!2d-74.10812118523764!3d4.69988459658626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b492892b2df%3A0xad345deb83ac0a5c!2sCra.%2088%20%2374b-29%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1674481720375!5m2!1ses-419!2sco"></iframe>
      </Ubication>
    </Section>

  )
}

export default Contact