import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import leftBtn from '../images/left-btn.svg';
import rightBtn from '../images/right-btn.svg';
import tvSpeaker from '../images/tv-speaker.svg';

const OuterBox = styled.div`
    margin: auto;
    padding: 20px 0;
    height: calc(${props => props.isWide} + 10vh);
    width: ${props => props.isWide};
    background-color: #664F44;
    -webkit-box-shadow: 0 15px 16px -6px black;
	-moz-box-shadow: 0 15px 16px -6px black;
    box-shadow: 0 15px 16px -6px black;
    border-radius: 15px;
`;

const InnerBox = styled.div`
    margin: 0 auto 2.5% auto;
    padding-top: 25px;
    width: 90%;
    height: 75%;
    background-color: black;
    border-radius: 45px;
`;

const Screen = styled.div`
    margin: auto;
    width: 90%;
    height: calc(100% - 25px);
    background-color: white;
    border-radius: 55px;
    overflow: hidden;
    box-shadow:  0 0 35px #444;
    display: flex;
`;

const Channel = styled.div`
    height: 100%;
    width: 100%;
    flex: 1 0 100%;
    flex-basis: 100%;
    order: ${(props) => props.order};
    margin: auto;
`;

const ControlPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    padding: 0 10px;
    width: 85%;
    height: 20%;
    background-color: #404040;
    -moz-box-shadow: inset 0 0 15px black;
    -webkit-box-shadow: inset 0 0 15px black;
    box-shadow: inset 0 0 15px black;
    border-radius: 7.5px;
`;

const Button = styled.img`
    width: 30%;
    height: 90%;
`;

const Speaker = styled.img`
    width: 50%;
    height: 90%;
`;

function getOrder(index, numChildren, position) {
    const numItems = numChildren || 1;
    if (index - position < 0) {
      return numItems - Math.abs(index - position);
    }
    return index - position;
}

function Tele({children}) {
    const [isWider, setIsWider] = useState(true);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (window.innerHeight > window.innerWidth)
            setIsWider(false);

        let timerId = setTimeout(() => {
            const numItems = children.length;
            setPosition(position === numItems - 1 ? 0 : position + 1);
        }, 6000);
        return function cleanup() {
            clearTimeout(timerId);
        }
    }, [isWider, position, children.length]);
    
    return (
        <OuterBox isWide={isWider ? "80vh" : "98vw"}>
            <InnerBox>
                <Screen>
                    {children.map((child, index) => (
                        <Channel
                            key={ index }
                            order={ getOrder(index, children.length, position) }
                        >
                            { child }
                        </Channel>
                    ))}
                </Screen>
            </InnerBox>
            <ControlPanel>
                <Speaker src={tvSpeaker} />
                <Button 
                    src={leftBtn} 
                    onClick={() => {
                        const numItems = children.length || 1;
                        setPosition(position === numItems - 1 ? 0 : position + 1);
                    }}
                />
                <Button 
                    src={rightBtn} 
                    onClick={() => {
                        const numItems = children.length || 1;
                        setPosition(position === 0 ? numItems - 1 : position - 1);
                    }}
                />
            </ControlPanel>
        </OuterBox>
    )
}

export default Tele;