import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import styled from 'styled-components';

const Container = styled.div`
    overflow: hidden;
    background-color: black;
`;

function Portfolio() {
    return (
        <Container>
            <Header />
            <Projects />
            <Contact />
            <Footer />
        </Container>
    )
}

export default Portfolio;