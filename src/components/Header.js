import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IntroImg from './IntroImg';
import xWingL from '../images/x_wing_l.svg';
import xWingR from '../images/x_wing_r.svg';
import stars from '../images/space.png';

// STYLED COMPONENTS
const Container = styled.div`
    position: relative;
    width: 100vw;
    background-image: url("${stars}");
    overflow: hidden;
    z-index: 0;
`;

const BitBlock = styled.object`
    position: absolute;
    bottom: 0;
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
    padding: 25px;
    display: inline-block;
    color: yellow;
    color: ${props => props.color};
    font-size: calc(32px + (48 - 28) * ((100vw - 600px) / (1600 - 600)));
    font-family: 'Bungee', cursive;
    text-align: center;
    z-index: 200;
`;

// METHODS FOR GENERATING RANDOMIZED BLOCKS
function getNumBtwn(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getMargin() {
    let rand = getNumBtwn(0, 100);
    if(rand < 40)
        return getNumBtwn(0, 25);
    if(rand < 80)
        return getNumBtwn(65, 100);
    return getNumBtwn(25, 65);
}

function getSize() {
    let rand = getNumBtwn(0, 100);
    if(rand < 70)
        return getNumBtwn(125, 250);
    if(rand < 95)
        return getNumBtwn(300, 400);
    return getNumBtwn(450, 500);
}

function getBottomPos(pos, size, offset, rate) {
    return (pos / (((250 - size) / 1.2)/ rate)) - (offset);
}
 
// VARIABLES FOR BLOCKS
let numOfBlocks = 20;

// const colors = ["#f3db95", "#ebebeb", "#88918e", "#a1a1ff", "#7a7ae6"];
const colors = ["#f3db95", "#a1a1ff", "#7a7ae6"];

//START OF COMPONENT
function Header() {
    const [pos, setPos] = useState(0);
    const [blockInfo, setInfo] = useState([]);
    const [sizingOffset, setOffset] = useState(1.5);
    useEffect(()=> {
        // numOfBlocks = Math.floor(window.innerWidth / 45);
        console.log(`numBlock ${numOfBlocks}`);
        if (blockInfo.length === 0) {
            window.addEventListener('scroll', () => {
                setPos(window.pageYOffset);
            });

            if(window.innerWidth < 600) {
                setOffset(2.25);
            } else if (window.innerWidth < 900) {
                setOffset(1.925);
            }
            // creates a random infomap to generate randomized blocks that rise with different speeds. 
            (function (total) {
                let infoList = [];
                for (let i = 0; i < total; i++) {
                    let blockSize = getSize();
                    infoList.push({
                        size: blockSize,
                        offset: getNumBtwn(0, 100),
                        margin: getMargin(),
                        color: colors[getNumBtwn(0, colors.length)],
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
                <TxtBlock style={{top: "5vh", left: (sizingOffset === 2.25) ?  "5%": `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#F0EB5B">That's no moon!</TxtBlock>
                <TxtBlock style={{top: "20vh", right: (sizingOffset === 2.25) ?  "5%" : `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#F0EB5B">It's a portfolio!</TxtBlock>
            </TxtContainer>
            {blockInfo.map((block, i) => 
                <BitBlock margin={`${block.margin}%`} zIndex={block.size} data={(block.margin > 45) ? xWingL : xWingR} width={`${block.size/sizingOffset}px`} style={{bottom: `${getBottomPos(pos, block.size, block.offset, 5)}vh`}}>
                </BitBlock>
            )}
        </Container>
    )
}

export default Header;