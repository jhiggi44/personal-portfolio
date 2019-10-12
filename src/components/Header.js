import React, { useState, useContext} from 'react';
import HeaderDark from './HeaderDark';
import HeaderLight from './HeaderLight';
import {ThemeContext} from '../App';

function Header() {
    const theme = useContext(ThemeContext);
    const [pos, setPos] = useState(0);
    const [isListening, setIsListening] = useState(false);

    function handleScroll() {
        setPos(window.pageYOffset);
    }

    if(!isListening) {
        window.addEventListener('scroll', handleScroll);
        setIsListening(true);
    }

    if (theme.isInSpaceMode) {
        return (
            <HeaderDark pos={pos} />
        ) 
    }
    return (
        <HeaderLight pos={pos} />
    )
}

export default Header;