import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IntroImg from './IntroImg';
import Theme from '../theme/Theme.js';
import xWingL from '../images/x_wing_l.svg';
import xWingR from '../images/x_wing_r.svg';
import stars from '../images/space.png';

// KNOBS TO TUNE xWings
let numOfBlocks = 9;
let maxSize = 320; // increases max size of ship (and also the minimum = (max/4))
let speed = 20; // increases speed

// INITIALIZE THEME
const theme = new Theme(true);

// STYLED COMPONENTS
const Container = styled.div`
    position: relative;
    width: 100vw;
    background-image: url("${stars}");
    overflow: hidden;
    z-index: 0;
    font-family: ${theme.titleFontFamily};

    & > h1 {
        color: ${theme.headerTitleColor};
    }
`;

const Xwing = styled.object`
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
    color: ${theme.headerTitleColor};
    font-size: calc(32px + (48 - 28) * ((100vw - 600px) / (1600 - 600)));
    text-align: center;
    z-index: ${maxSize / 2};
`;

// METHODS FOR GENERATING RANDOMIZED BLOCKS
function getNumBtwn(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getMargin(index) {
    if (index === 0) 
        return index;
    while(index >= 9.5) {
        index /= 10;
        console.log(index);
    }
    return index * 10;
}

function getSize() {
    let rand = getNumBtwn(0, 100);
    if(rand < 70)
        return getNumBtwn(maxSize/4, maxSize/2);
    if(rand < 95)
        return getNumBtwn(maxSize/1.5, maxSize/1.25);
    return getNumBtwn(maxSize/1.25, maxSize);
}

function getBottomPos(pos, size, offset) {
    // this brings down the scale of everything, 
    // so bigger ships don't move too much faster than smaller ones
    let sizeAdjust = maxSize - size
    return (pos / (sizeAdjust / speed)) - offset;
}

//START OF COMPONENT
function HeaderDark({ pos }) {
    const [xWingInfo, setInfo] = useState([]);
    const [sizingOffset, setOffset] = useState(1.5); //makes ships scale better with screen size

    useEffect(()=> {
        if (xWingInfo.length === 0) {

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
                        margin: getMargin(i + 1)
                    });
                }
                setInfo(infoList);
            }(numOfBlocks));
        }
    }, [xWingInfo]);

    return (
        <Container>
            <IntroImg 
                color={theme.headerTitleColor}
            />
            <TxtContainer>
                <TxtBlock 
                    style={{top: "5vh", left: (sizingOffset === 2.25) ?  "2%": `calc(20% + ${pos/(10 * sizingOffset)}px)`}} 
                    >
                        That's no moon!
                </TxtBlock>
                <TxtBlock 
                    style={{top: "20vh", right: (sizingOffset === 2.25) ?  "2%" : `calc(20% + ${pos/(10 * sizingOffset)}px)`}} 
                    >
                        It's a portfolio!
                </TxtBlock>
            </TxtContainer>
            {xWingInfo.map((block, i) => 
                <Xwing
                    key={i}
                    margin={`${block.margin}%`} 
                    zIndex={block.size} 
                    data={(block.margin > 45) ? xWingL : xWingR} 
                    width={`${block.size/sizingOffset}px`} 
                    style={{bottom: `${getBottomPos(pos, block.size, block.offset)}vh`}} 
                />
            )}
        </Container>
    )
}

export default HeaderDark;