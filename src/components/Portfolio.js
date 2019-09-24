import React from 'react';
import Header from './Header';
import HeaderLight from './HeaderLight';
import ContactLight from './ContactLight';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import FooterLight from './FooterLight';

import styled from 'styled-components';
import ProjectsLight from './ProjectsLight';

const Container = styled.div`
    overflow: hidden;
`;

function Portfolio() {
    return (
        <Container>
            {/* <Header /> */}
            <HeaderLight />
            <ProjectsLight />
            {/* <Projects /> */}
            <ContactLight />
            {/* <Contact /> */}
            <FooterLight />
            {/* <Footer /> */}
        </Container>
    )
}

export default Portfolio;