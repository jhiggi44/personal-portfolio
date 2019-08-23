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
    visibility: ${props => props.disappear ? "hidden" : "visible"};
    left: ${props => props.margin};
    z-index: ${props => props.zIndex};
`;

const TxtContainer = styled.div`
    position: relative;
    padding-top: 40px;
    height: 40vh;
`;

const TxtBlock = styled.div`
    position: absolute;
    background-color: ${props => props.color};
    padding: 25px;
    display: inline-block;
    color: black;
    font-size: calc(14px + (28 - 14) * ((100vw - 600px) / (1600 - 600)));
    font-family: 'Press Start 2P', monospace;
    text-align: center;
    z-index: 50;
`;

// METHODS FOR GENERATING RANDOMIZED BLOCKS
function getNumBtwn(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getMargin() {
    let rand = getNumBtwn(0, 105);
    if(rand < 40)
        return getNumBtwn(-5, 25);
    if(rand < 80)
        return getNumBtwn(65, 100);
    return getNumBtwn(25, 65);
}

function getSize() {
    let rand = getNumBtwn(0, 100);
    if(rand < 70)
        return getNumBtwn(15, 30);
    if(rand < 95)
        return getNumBtwn(30, 50);
    return getNumBtwn(50, 60);
}

function getBottomPos(pos, size, offset, rate) {
    return (pos / (size / rate)) - (offset);
}

function getOpacity(pos, disappearAt) {
    return 1 - (pos / disappearAt);
}
 
// VARIABLES FOR BLOCKS
const numOfBlocks = 80;
// const colors = ["#f3db95", "#ebebeb", "#88918e", "#a1a1ff", "#7a7ae6"];
const colors = ["#f3db95", "#a1a1ff", "#7a7ae6"];

//START OF COMPONENT
function Header() {
    const [pos, setPos] = useState(0);
    const [blockInfo, setInfo] = useState([]);
    const [sizingOffset, setOffset] = useState(1.5);
    useEffect(()=> {
        if (blockInfo.length === 0) {
            window.addEventListener('scroll', () => {
                setPos(window.pageYOffset);
            });

            if(window.innerWidth < 600) {
                setOffset(2.5);
            } else if (window.innerWidth < 900) {
                setOffset(2);
            }
            // creates a random infomap to generate randomized blocks that rise with different speeds. 
            (function (total) {
                let infoList = [];
                for (let i = 0; i < total; i++) {
                    let blockSize = getSize();
                    infoList.push({
                        size: blockSize,
                        offset: Math.abs(blockSize - 60) + getNumBtwn(0, 50),
                        margin: `${getMargin()}%`,
                        color: colors[getNumBtwn(0, colors.length)],
                        disappearAt: getNumBtwn(-50, 25) / 10
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
                <TxtBlock style={{top: "20vh", right: `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#a1a1ff"><div>A Software</div> <div>Developer</div></TxtBlock>
            </TxtContainer>
            {blockInfo.map((block, i) => 
                <BitBlock key={i} margin={block.margin} zIndex={block.size} disappear={block.disappearAt <= getBottomPos(pos, block.size, block.offset, 1.4)} style={{bottom: `${getBottomPos(pos, block.size, block.offset, 1.4)}vh`}}>
                    <rect fill={block.color} width={`${block.size/sizingOffset}px`} height={`${block.size/sizingOffset}px`} />
                </BitBlock>
            )}
        </Container>
    )
}

export default Header;