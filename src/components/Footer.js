import React, { useContext, useState, useEffect } from 'react';
import Theme from '../theme/Theme.js';
import { ThemeContext } from '../App';
import styled from 'styled-components';
import clearImg from '../images/clear-vintage.png';
import githubLogo from '../images/github_purple.svg';
import linkLogo from '../images/linked_in_purple.svg';
import githubLogoWhite from '../images/github_white.svg';
import linkLogoWhite from '../images/linked_in_white.svg';
import defaultBackground from '../images/intro_port.png';
import spaceBackground from '../images/space.png';
import linkedLogoYellow from '../images/linkedin-logo-yellow.svg';
import githubLogoYellow from '../images/github-logo-yellow.svg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    height: auto;
    background-image: url("${props => props.background}");
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.footerColor};

    & > div > h3 {
        font-family: ${props => props.theme.titleFontFamily};
    }
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
    border: 6px solid ${props => props.theme.footerColor};
`;

const AboutContainer = styled.div`
    margin: 20px 10px;
    height: auto;
    width: calc(100vw - 600px);
    min-width: 300px;
`;

const AboutHeader = styled.h3`
    margin: 15px 10px;
    font-size: calc(28px + (40 - 28) * ((100vw - 600px) / (1600 - 600)));
    text-align: center;
`;

const AboutInfo = styled.p`
    width: auto;
    line-height: calc(22px + (30 - 22) * ((100vw - 600px) / (1600 - 600)));
    font-size: calc(20px + (28 - 20) * ((100vw - 600px) / (1600 - 600)));
    letter-spacing: .8px;
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
    content: url(${props => props.logo});

    :hover {
        content: url(${props => props.active});
    }

    :active {
        content: url(${props => props.active});
    }
`;

const Copyright = styled.div`
    margin-top: 20px;
    padding: 10px 30px;
    width: 100vw;
    font-size: 14px;
    text-align: right;
    background-color: ${props => props.theme.copyrightBackground};
    color: ${props => props.theme.copyrightColor};
`;

function Footer() {
    let ctx = useContext(ThemeContext);
    const [theme, setTheme] = useState(new Theme(false));

    useEffect(() => {
        setTheme(new Theme(ctx.isInSpaceMode));
    }, [ctx]);

    return (
        <Container 
            theme={theme} 
            background={ctx.isInSpaceMode ? spaceBackground : defaultBackground}>
            <AboutContainer>
                <AboutHeader>About Me</AboutHeader>
                <AboutInfo>
                    Hi! I'm Jordan Higgins. I will graduate from the University of Utah with a master's degree in software development in December, 2019. I also work as a TA at the University of Utah Pro-ed Coding Bootcamp, where I enjoy teaching others how to code. 
                </AboutInfo>
            </AboutContainer>
            <ImgContainer>
                <ProfilePic 
                    theme={theme}
                    src={clearImg}
                />
            </ImgContainer>
            <LogoContainer>
                    <Logo
                        logo={ctx.isInSpaceMode ? githubLogoYellow : githubLogo}
                        active={githubLogoWhite}
                        onClick={() => window.location = "https://github.com/jhiggi44"}
                    />
                    <Logo 
                        logo={ctx.isInSpaceMode ? linkedLogoYellow : linkLogo}
                        active={linkLogoWhite}
                        onClick={() => window.location = "https://www.linkedin.com/in/jordan-higgins/"}
                    />
            </LogoContainer>
            <Copyright
                theme={theme}
            >
                ©{new Date().getFullYear()} Jordan Higgins All Rights Reserved.
            </Copyright>
        </Container>
    )
}

export default Footer;