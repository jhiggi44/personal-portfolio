import React, {useState} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
    // const [list, setList] = useState([]);
    // if (list.length === 0) {
    //     fetch('https://api.github.com/users/jhigfolio/repos')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setList(data);
    //     });
        // fetch('https://api.github.com/repos/jhigfolio/Event-Based-Queue-Simulator/contents/img.jpg')
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     setList(data.download_url);
        // });
    // }
 
    return (
        <div>
            <Header />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio;