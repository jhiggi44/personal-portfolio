import React from 'react';
import styled from 'styled-components';
import deathStar from '../images/death_star.png';

const Container = styled.div`
    max-height: 100vh;
    width: 100vw;
`;

const Img = styled.img`
    margin: 80px auto;
    position: relative;
    display: block;
    margin-bottom: -5px;
    width: 60%;
    max-width: 400px;
    object-fit: cover;
    object-position: 50% 50%;
`;

const Txt = styled.h1`
    margin: 80px auto;
    text-align: center;
    font-size: 46px;
    font-weight: 400;
    color: ${props => props.color};
`;

function IntroDark({color}) {
    return (
        <Container>
            <Txt color={color}>
                Jordan Higgins Presents...
            </Txt>
            <Img 
                src={deathStar}
            />
        </Container>
    )
}

export default IntroDark;