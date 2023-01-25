import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/Banner.png'
import Product from '../components/Sections/Product';
import Title from '../components/Sections/Title';
import Axios from 'axios';
import ProductsCategories from '../components/Sections/ProductsCategories';
import Contact from './Contact';
import Hr from '../components/Sections/Hr';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  
  hn {
    text-align: center;
    border-bottom: ${props => props.theme.fontxx} solid ${props => props.theme.textPrimary};   
  }
`

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3004/categories').then(response => {
        setCategories(response.data);
      })
  }, [])
  return (
    <Section>
      <img src={banner} alt='Logo' />
      <Hr/>
      <Title nombre='PRODUCTOS' />
      <ProductsCategories categories={categories} />
      <Title nombre='CONTACTO' />
      <Contact/>
      <hn/>

    </Section>
  )
}

export default Home