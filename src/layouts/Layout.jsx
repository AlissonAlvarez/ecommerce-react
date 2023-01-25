import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hr from '../components/Sections/Hr';
import GlobalStyles from '../styles/GlobalStyles';
import { one } from '../styles/ThemeStyles';


function Layout() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <ThemeProvider theme={one}>
                <Header />
                <Hr />
                <Outlet />
                <Footer/>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Layout