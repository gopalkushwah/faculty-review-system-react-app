import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import {Outlet} from 'react-router-dom'

const Template = () => {
    return (
        <Container>

            <Header/>
            <NavBar/>
            <Outlet/>
            <Footer/>
            
        </Container>
    );
};

export default Template;