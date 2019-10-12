import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import styled from 'styled-components';
import Gallery from './Gallery';
import info_black from '../images/info_black.png';
import info_yellow from '../images/info_yellow.png';
import info_green from '../images/info_green.png';

const Container = styled.div`
    position: relative;
    height: 100%;
    width: ${props => props.wide}
    margin: 60px auto 0 auto;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
`;

const Title = styled.h3`
    width: 80%;
    margin: 0 auto 0 3%;
    font-size: calc(34px + (48 - 34) * ((100vw - 600px) / (1600 - 600)));
    text-align: left;
`;

const ToGitHub = styled.a`
    width: 7%;
    height: 7%
    max-width: 35px;
    max-height: 35px;
    margin-right: 3px;
`;

const InfoLogo = styled.img`
    object-fit: cover;
    width: 100%;
`;

const SummaryTxt = styled.p`
    text-align: left;
    margin: 10px auto 25px auto;
    display: block;
    padding: 2px;
    width: 85%;
    font-weight: 100;
    line-height: calc(28px + (38 - 28) * ((100vw - 600px) / (1600 - 600)));
    font-size: calc(22px + (28 - 22) * ((100vw - 600px) / (1600 - 600)));
    letter-spacing: .7px;
`;

function formatTitle(title) {
    let words = title.split("-");
    let formatted = "";
    for (let i = 0; i < words.length; i++) {
        formatted += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length) + " ";
    }
    return formatted;
}

function Project({title, summary, images, link}) {
    let ctx = useContext(ThemeContext);
    return (
        <Container wide={(window.innerWidth < 768) ? "95%" : "75%"}>
            <Info>
                <Title>{formatTitle(title)}</Title>
                <ToGitHub href={link}>
                    <InfoLogo 
                        src={ctx.isInSpaceMode ? info_yellow : info_black} 
                        onMouseOver={(e) => { e.target.src = info_green }} 
                        onMouseOut={(e) => { e.target.src = ctx.isInSpaceMode ? info_yellow : info_black }} />
                </ToGitHub>
                <SummaryTxt>{summary}</SummaryTxt>
                <Gallery images={images} />
            </Info>
        </Container>
    )
}

export default Project;