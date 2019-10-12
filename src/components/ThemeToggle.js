import React, { useContext } from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle'
import './ToggleStyles.css';

import {ThemeContext} from '../App';

const Container = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    z-index: 3;
`;


function ThemeToggle(props) {
    let theme = useContext(ThemeContext);

    return (
        <Container>
            <label>
                <Toggle
                    defaultChecked={theme.isInSpaceMode}
                    icons={false}
                    onChange={() => props.toggler(!theme.isInSpaceMode)} />
            </label>
        </Container>
    );
}

export default ThemeToggle;