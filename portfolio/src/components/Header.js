import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import transit from '../images/transit-1.svg';

//helper methods
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

const numOfBlocks = 20;
const colors = ["#f3db95", "#ebebeb", "#88918e", "#a1a1ff", "#7a7ae6"];

const Container = styled.div`
    width: 100vw;
    background-color: #020343;
    // background-image: linear-gradient(black 1%, #020343 99%);
    position: relative;
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
    padding-top: 80px;
    height: 40vh;
    position: relative;
`;

const TxtBlock = styled.div`
    position: absolute;
    ${props => props.pos};
    background-color: ${props => props.color};
    padding: 25px;
    display: inline-block;
    color: black;
    //calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
    font-size: calc(22px + (38 - 22) * ((100vw - 600px) / (1600 - 600)));
    font-family: 'Roboto Mono', monospace;
    z-index: 3;
`;

const Transit1 = styled.img`
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.size};
    z-index: 4;
`;

const Transit2 = styled.img`
    display: ${props => props.display};
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    z-index: 4;
`;

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


            // creates a random speedmap to generate blocks that rise with different speeds. 
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
                // console.log(infoList);
                setInfo(infoList);
            }(numOfBlocks));
        }
    });

    return (
        <Container>
            <Intro />
            <TxtContainer>
                <TxtBlock pos={`top: 5vh; left: calc(20% + ${pos/(10 * sizingOffset)}px);`} color="#f3db95">Jordan Higgins</TxtBlock>
                <TxtBlock pos={`top: 20vh; right: calc(${20/sizingOffset}% + ${pos/(10 * sizingOffset)}px);`} color="#a1a1ff">A Software Developer</TxtBlock>
            </TxtContainer>
            {blockInfo.map((block, i) => 
                <BitBlock key={i} margin={block.margin} zIndex={block.zIndex} style={{bottom: `${((pos) / block.speed) - block.offset}vh`}}>
                    <rect fill={block.color} width={`${block.size/sizingOffset}px`} height={`${block.size/sizingOffset}px`} />
                </BitBlock>
            )}
            {/* <Transit1 size={(sizingOffset === 2) ? "100%" : "50%"} src={transit} />
            <Transit2 display={(sizingOffset === 2) ? "none" : "inline-block"} src={transit} /> */}
        </Container>
    )
}

export default Header;