import { createGlobalStyle } from 'styled-components';
import '@fontsource/comfortaa';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;  
}

html, body {
  width:100%;
  /* background-color: #FCDC73; */
  font-family: 'Comfortaa';
}

a{
    color: inherit;
}
`

export default GlobalStyles;