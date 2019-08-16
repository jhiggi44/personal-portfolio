import React, {useEffect} from 'react';
import styled from 'styled-components';

import pic from '../images/intro.png';

const ImgContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

const Img = styled.img`
    position: relative;
    margin-bottom: -5px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

const ImgOverlay = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    left: 0;
    margin-bottom: 40px;
    width: 100%;
    color: #f3db95;
    font-family: 'Roboto Mono', monospace;
    font-size: 26px;
`;

const Txt = styled.p`
    display: inline;
    margin: auto;
    background-color: #020343;
`;

function IntroImg() {
    return (
        <ImgContainer>
            <Img src={pic}/>
            <ImgOverlay>
                <Txt>Inspired by the 80s.</Txt>
                <Txt>Not stuck in it.</Txt>
            </ImgOverlay>
        </ImgContainer>
    )
}

export default IntroImg;