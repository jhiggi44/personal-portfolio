import React from 'react';
import styled from 'styled-components';

import clearImg from '../images/clear-vintage.png';
import pixImg from '../images/pix-vintage.png';
import githubLogo from '../images/github-logo.svg';
import linkLogo from '../images/linkedin-logo.svg';

const Container = styled.div`
    margin-top: 80px;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    background-color: #a1a1ff;
    // background-color: #7a7ae6;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
`;

const ImgContainer = styled.div`
    position: relative;
    margin: 20px 0;
`;

const ProfilePic = styled.img`
    width: 30vw;
    // width: 200px;
    max-width: 200px;
    object-fit: contain;
    border-radius: 6px;
    border: 6px solid #020343;
`;

const AboutContainer = styled.div`
    height: auto;
    width: calc(100vw - 600px);
    min-width: 300px;
    margin: 20px 10px;
`;

const AboutHeader = styled.h3`
    font-size: calc(24px + (36 - 24) * ((100vw - 600px) / (1600 - 600)));
    color: white;
    color: #020343;
    margin: 15px 10px;
    text-align: center;
`;

const AboutInfo = styled.p`
    width: auto;
    font-size: calc(18px + (26 - 18) * ((100vw - 600px) / (1600 - 600)));
    color: white;
    color: #020343;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 10vw;
    height: 30vw;
    max-height: 200px;
    margin: 20px 10px;
`;

const Logo = styled.img`
    height: 48%;
    object-fit: contain;
    border-radius: 6px;
    margin: 5px 0;
`;

const Copyright = styled.div`
    width: 100vw;
    font-size: 14px;
    text-align: right;
    background-color: #7a7ae6;
    background-color: #020343;
    padding: 10px 30px;
    color: white;
    color: #a1a1ff;
    // color: #7a7ae6;
    margin-top: 20px;
`;


function Footer() {
    return (
        <Container>
            <AboutContainer>
                <AboutHeader>About Me</AboutHeader>
                <AboutInfo>
                    Hi! I'm Jordan Higgins. I will graduate from the University of Utah with a master's degree in software development in December, 2019. I enjoy discovering new technologies and learning new skills.  
                </AboutInfo>
            </AboutContainer>
            <ImgContainer>
                <ProfilePic src={pixImg} />
            </ImgContainer>
            <LogoContainer>
                    <Logo 
                        src={githubLogo}
                        onClick={() => window.location = "https://google.com"}
                    />
                    <Logo src={linkLogo}/>
            </LogoContainer>
          
            <Copyright>© {new Date().getFullYear()} Jordan Higgins All Rights Reserved.</Copyright>
        </Container>
    )
}

export default Footer;