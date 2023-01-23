import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/Banner.png'
import Product from '../components/Sections/Product';
import Title from '../components/Sections/Title';
import Axios from 'axios';
import ProductsCategories from '../components/Sections/ProductsCategories';
import Contact from './Contact';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  
  hr {
    text-align: center;
    border-bottom: ${props => props.theme.fontxx} solid ${props => props.theme.title};   
  }

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
      <hr />
      <img src={banner} alt='Logo' />
      <hr />
      <Title nombre='PRODUCTS' />
      <ProductsCategories categories={categories} />
      <Title nombre='CONTACT' />
      <Contact/>
      <hn/>

    </Section>
  )
}

export default Home