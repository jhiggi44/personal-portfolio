import React from 'react';
import styled from 'styled-components';
import infoLogo from '../images/info.svg';

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
]   background: rgb(255, 255, 255); /* Fallback for older browsers without RGBA-support */
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
`;

const Title = styled.h3`
    margin: 0 auto;
    max-width: 90%;
    font-size: calc(28px + (42 - 28) * ((100vw - 600px) / (1600 - 600)));
    text-align: center;
    font-family: 'Alfa Slab One', cursive;
`;

const Summary = styled.div`
    padding: 5% 5%;
    width: 90%;
`;

const SummaryTxt = styled.p`
    display: inline;
    padding: 2px;
    color: white;
    background-color: black;
    opacity: .8;
    font-family: 'Roboto Mono', monospace;
    line-height: calc(24px + (34 - 24) * ((100vw - 600px) / (1600 - 600)));
    font-size: calc(18px + (26 - 18) * ((100vw - 600px) / (1600 - 600)));
    letter-spacing: .5px;
`;

const ToGitHub = styled.a`
    position: absolute;
    top: 5%;
    right: 5%;
    width: 50px;
    height: 50px;
`;

const InfoLogo = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
`;

function formatTitle(title) {
    let words = title.split("-");
    let formatted = "";
    for (let i = 0; i < words.length; i++) {
        formatted += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length) + " ";
    }
    return formatted;
}

function Project({title, summary, pic, link}) {
    return (
        <Container>
            <Img src={pic}/>
            <Info>
                <ToGitHub href={link}>
                    <InfoLogo src={infoLogo} />
                </ToGitHub>
                <Title>{formatTitle(title)}</Title>
                <Summary><SummaryTxt>{summary}</SummaryTxt></Summary>
            </Info>
        </Container>
    )
}

export default Project;