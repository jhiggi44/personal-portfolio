import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import clearImg from '../images/clear-vintage.png';
import pixImg from '../images/pix-vintage.png';
import githubLogo from '../images/github-logo.svg';
import linkLogo from '../images/linkedin-logo.svg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 80px;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    background-color: #a1a1ff;
    font-family: 'Roboto Mono', monospace;
`;

const ImgContainer = styled.div`
    position: relative;
    margin: 20px 0;
`;

const ProfilePic = styled.img`
    width: 30vw;
    max-width: 200px;
    object-fit: contain;
    border-radius: 6px;
    border: 6px solid #020343;
`;

const AboutContainer = styled.div`
    margin: 20px 10px;
    height: auto;
    width: calc(100vw - 600px);
    min-width: 300px;
`;

const AboutHeader = styled.h3`
    margin: 15px 10px;
    font-size: calc(24px + (36 - 24) * ((100vw - 600px) / (1600 - 600)));
    font-weight: bold;
    color: #020343;
    text-align: center;
`;

const AboutInfo = styled.p`
    width: auto;
    font-size: calc(18px + (26 - 18) * ((100vw - 600px) / (1600 - 600)));
    color: #020343;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 10px;
    width: 10vw;
    height: 30vw;
    max-height: 200px;
`;

const Logo = styled.img`
    margin: 5px 0;
    height: 48%;
    object-fit: contain;
    border-radius: 6px;
`;

const Copyright = styled.div`
    margin-top: 20px;
    padding: 10px 30px;
    width: 100vw;
    font-size: 14px;
    text-align: right;
    background-color: #020343;
    color: #a1a1ff;
`;


function Footer() {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!isListening) {
            window.addEventListener("scroll", (e) => {
                if ((window.innerHeight + window.scrollY + 50) >= document.body.offsetHeight) {
                    setIsAtBottom(true);
                } else {
                    setIsAtBottom(false);
                }
            });
            setIsListening(true);
        }
    }, [isListening]);

    return (
        <Container>
            <AboutContainer>
                <AboutHeader>About Me</AboutHeader>
                <AboutInfo>
                    Hi! I'm Jordan Higgins. I will graduate from the University of Utah with a master's degree in software development in December, 2019. I enjoy discovering new technologies and learning new skills.  
                </AboutInfo>
            </AboutContainer>
            <ImgContainer>
                <ProfilePic 
                    src={isAtBottom ? clearImg : pixImg }
                    onClick={() => setIsAtBottom(!isAtBottom)} 
                />
            </ImgContainer>
            <LogoContainer>
                    <Logo 
                        src={githubLogo}
                        onClick={() => window.location = "https://github.com/jhiggi44"}
                    />
                    <Logo 
                        src={linkLogo}
                        onClick={() => window.location = "https://www.linkedin.com/in/jordan-higgins/"}
                    />
            </LogoContainer>
            <Copyright>© {new Date().getFullYear()} Jordan Higgins All Rights Reserved.</Copyright>
        </Container>
    )
}

export default Footer;