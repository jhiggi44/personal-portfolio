import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import IntroImg from './IntroImg';

// STYLED COMPONENTS

const Container = styled.div`
    position: relative;
    width: 100vw;
    background-color: #020343;
    overflow: hidden;
    z-index: 0;
`;

const BitBlock = styled.svg`
    position: absolute;
    bottom: 0;
    left: ${props => props.margin};
    z-index: ${props => props.zIndex};
`;

const TxtContainer = styled.div`
    position: relative;
    padding-top: 80px;
    height: 40vh;
`;

const TxtBlock = styled.div`
    position: absolute;
    background-color: ${props => props.color};
    padding: 25px;
    display: inline-block;
    color: black;
    font-size: calc(22px + (38 - 22) * ((100vw - 600px) / (1600 - 600)));
    font-family: 'Roboto Mono', monospace;
    z-index: 3;
`;

// METHODS FOR GENERATING RANDOMIZED BLOCKS
function getNumBtwn(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getMargin() {
    let rand = getNumBtwn(0, 105);
    if(rand < 40)
        return getNumBtwn(0, 30) - 5;
    if(rand < 80)
        return getNumBtwn(70, 105) - 5;
    return getNumBtwn(30, 70) - 5;
}

// VARIABLES FOR BLOCKS
const numOfBlocks = 20;
const colors = ["#f3db95", "#ebebeb", "#88918e", "#a1a1ff", "#7a7ae6"];

//START OF COMPONENT
function Header() {
    const [pos, setPos] = useState(0);
    const [blockInfo, setInfo] = useState([]);
    const [sizingOffset, setOffset] = useState(1);
    useEffect(()=> {
        if (blockInfo.length === 0) {
            window.addEventListener('scroll', () => {
                setPos(window.pageYOffset);
            });

            if(window.innerWidth < 600) {
                setOffset(2);
            } else if (window.innerWidth < 900) {
                setOffset(1.5);
            }
            // creates a random infomap to generate randomized blocks that rise with different speeds. 
            (function (total) {
                let infoList = [];
                for (let i = 0; i < total; i++) {
                    infoList.push({
                        speed: getNumBtwn(5, 35),
                        size: getNumBtwn(20,45),
                        margin: `${getMargin()}%`,
                        offset: getNumBtwn(0, 100),
                        color: colors[getNumBtwn(0, colors.length - 1)],
                        zIndex: getNumBtwn(0, 4)
                    });
                }
                setInfo(infoList);
            }(numOfBlocks));
        }
    }, [blockInfo]);

    return (
        <Container>
            <IntroImg />
            <TxtContainer>
                <TxtBlock style={{top: "5vh", left: `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#f3db95">Jordan Higgins</TxtBlock>
                <TxtBlock style={{top: "20vh", right: `calc(${20/sizingOffset}% + ${pos/(10 * sizingOffset)}px)`}} color="#a1a1ff">A Software Developer</TxtBlock>
            </TxtContainer>
            {blockInfo.map((block, i) => 
                <BitBlock key={i} margin={block.margin} zIndex={block.zIndex} style={{bottom: `${((pos) / block.speed) - block.offset}vh`}}>
                    <rect fill={block.color} width={`${block.size/sizingOffset}px`} height={`${block.size/sizingOffset}px`} />
                </BitBlock>
            )}
        </Container>
    )
}

export default Header;