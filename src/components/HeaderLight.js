import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from '../theme/Theme.js';
import background from '../images/intro_port.png';
import profile from '../images/intro_port_pic.png';

// KNOBS TO TUNE SKILLZ
let maxSize = 260; // increases max size of ship (and also the minimum = (max/4))
let speed = 20; // increases speed
let skillz = ["React", "Node.js", "Dart", "Java", "SQL", ".NET", "Flutter", "Express", "Spring"];

// INITIALIZE THEME
const theme = new Theme(false);

// STYLED COMPONENTS
const Container = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vh - 40px);
    background-image: url("${background}");
    overflow: hidden;
    z-index: 0;
    font-family: ${theme.titleFontFamily};
`;

const Pic = styled.img`
    max-height: 100vh;
    max-width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${maxSize / 2.5};
`;

const Floaters = styled.h2`
    position: absolute;
    font-size: ${props => props.fontSize};
    left: ${props => props.margin};
    color: ${theme.headerTextColor};
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
    color: ${theme.headerTitleColor};
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
    // so bigger words/skills don't move too much faster than smaller ones
    let sizeAdjust = maxSize - size
    return (pos / (sizeAdjust / speed)) - offset;
}

//START OF COMPONENT
function HeaderLight({pos}) {
    const [skillzMap, setSkillzMap] = useState([]);
    const [sizingOffset, setOffset] = useState(1.5); //makes words scale better with screen size
    useEffect(()=> {
        if (skillzMap.length === 0) {
            if(window.innerWidth < 600) {
                setOffset(2.25);
            } else if (window.innerWidth < 900) {
                setOffset(1.925);
            }
            // creates a random map to generate randomized word sizes that rise with different speeds. 
            (function (total) {
                let map = [];
                for (let i = 0; i < total; i++) {
                    map.push({
                        size: getSize(),
                        offset: getNumBtwn(0, 80),
                        margin: getMargin(i + 1)
                    });
                }
                setSkillzMap(map);
            }(skillz.length));
        }
    }, [skillzMap]);

    return (
        <Container>
            <Pic src={profile} />
            <TxtContainer>
                <TxtBlock 
                    style={{top: "5vh", left: (sizingOffset === 2.25) ?  "2%": `calc(20% + ${pos/(10 * sizingOffset)}px)`}}>
                        I'm Jordan Higgins.
                </TxtBlock>
                <TxtBlock 
                    style={{top: "20vh", right: (sizingOffset === 2.25) ?  "2%" : `calc(20% + ${pos/(10 * sizingOffset)}px)`}}>
                        A software developer!
                </TxtBlock>
            </TxtContainer>
            {skillzMap.map((skill, i) => 
                <Floaters 
                    margin={`${skill.margin}%`} 
                    zIndex={skill.size} 
                    fontSize={`${(skill.size/sizingOffset)/2}px`} 
                    key={i}
                    style={{bottom: `${getBottomPos(pos, skill.size, skill.offset)}vh`}}
                    >
                    {skillz[i]}
                </Floaters>
            )}
        </Container>
    )
}

export default HeaderLight;