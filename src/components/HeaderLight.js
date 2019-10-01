import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../images/intro_port.png';
import profile from '../images/intro_port_pic.png';

// KNOBS TO TUNE xWing 
let blocks = ["React", "Node.js", "Dart", "Java", "SQL", ".NET", "Flutter", "Express", "Spring"];
// let numOfBlocks = 9;
let maxSize = 260; // increases max size of ship (and also the minimum = (max/4))
let speed = 20; // increases speed

// STYLED COMPONENTS
const Container = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vh - 40px);
    background-image: url("${background}");
    overflow: hidden;
    z-index: 0;
`;

const Pic = styled.img`
    max-height: 100vh;
    max-width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${maxSize/2.5};
`;

const Floaters = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: ${props => props.fontSize};
    left: ${props => props.margin};
    z-index: ${props => props.zIndex};
`;

const TxtContainer = styled.div`
    position: relative;
    padding-top: 40px;
    height: 40vh;
`;

const TxtBlock = styled.h1`
    position: absolute;
    padding: 25px;
    display: inline-block;
    color: ${props => props.color};
    font-size: calc(32px + (48 - 28) * ((100vw - 600px) / (1600 - 600)));
    font-weight: 900;
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
    while(index >= 8) {
        index /= 10;
        // console.log(index);
    }
    return index * 10;
}

function getSize() {
    let rand = getNumBtwn(0, 100);
    if(rand < 70)
        return getNumBtwn(maxSize/4, maxSize/2);
    if(rand < 95)
        return getNumBtwn(maxSize/1.5, maxSize/1.25);
    return getNumBtwn(maxSize/1.25, maxSize/.5);
}

function getBottomPos(pos, size, offset) {
    // this brings down the scale of everything, 
    // so bigger ships don't move too much faster than smaller ones
    let sizeAdjust = maxSize - size
    return (pos / (sizeAdjust / speed)) - offset;
}

//START OF COMPONENT
function HeaderLight() {
    const [pos, setPos] = useState(0);
    const [floaterInfo, setInfo] = useState([]);
    const [sizingOffset, setOffset] = useState(1.5); //makes ships scale better with screen size
    useEffect(()=> {
        // numOfBlocks = Math.floor(window.innerWidth / 45);
        // console.log(`numBlock ${numOfBlocks}`);
        if (floaterInfo.length === 0) {
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
                        offset: getNumBtwn(0, 80),
                        margin: getMargin(i + 1)
                    });
                }
                setInfo(infoList);
            }(blocks.length));
        }
    }, [floaterInfo]);

    return (
        <Container>
            <Pic src={profile} />
            <TxtContainer>
                <TxtBlock style={{top: "5vh", left: (sizingOffset === 2.25) ?  "2%": `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#5c3d87">I'm Jordan Higgins.</TxtBlock>
                <TxtBlock style={{top: "20vh", right: (sizingOffset === 2.25) ?  "2%" : `calc(20% + ${pos/(10 * sizingOffset)}px)`}} color="#5c3d87">A software developer!</TxtBlock>
            </TxtContainer>
            {floaterInfo.map((block, i) => 
                <Floaters 
                    margin={`${block.margin}%`} 
                    zIndex={block.size} 
                    fontSize={`${(block.size/sizingOffset)/2}px`} 
                    style={{bottom: `${getBottomPos(pos, block.size, block.offset)}vh`, color: "white"}}
                    key={i}
                    >
                    {blocks[i]}
                </Floaters>
            )}
        </Container>
    )
}

export default HeaderLight;