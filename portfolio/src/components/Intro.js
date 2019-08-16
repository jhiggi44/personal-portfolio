import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from './Header';

import pic from '../images/intro.png';

const ImageBox = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`;

const Image = styled.img`
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
    position: relative;
    margin-bottom: -5px;
`;

const FlexOverlay = styled.div`
    position: absolute;
    width: 100%;
    bottom: 35px;
    left: 0;
    display: flex;
    flex-direction: column;
    color: #f3db95;
    margin-bottom: 40px;
    font-family: 'Roboto Mono', monospace;
    font-size: 26px;
`;

function Intro() {
    return (
        <ImageBox>
            <Image src={pic}/>
            <FlexOverlay>
                <div style={{textAlign: "center"}}>Inspired by the 80s.</div>
                <div style={{textAlign: "center"}}>Not stuck in it.</div>
            </FlexOverlay>
        </ImageBox>
    )
}

export default Intro;