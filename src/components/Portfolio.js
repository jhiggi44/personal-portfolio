import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
    return (
        <div style={{overflow: "hidden"}}>
            <Header />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio;