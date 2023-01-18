import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { one } from '../styles/ThemeStyles';
import Nav from '../components/Nav/Nav';

function Layout() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <ThemeProvider theme={one}>
                <Nav />
                <Outlet />
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Layout