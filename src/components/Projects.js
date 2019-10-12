import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { ThemeContext } from '../App';
import Theme from '../theme/Theme';

// STYLED COMPONENTS
const Container = styled.div`
    padding-bottom: 120px;
    width: 100vw;
    height: auto;
    background-color: ${props => props.theme.projectBackgroundColor};
    font-family: ${props =>  props.theme.textFontFamily};
    color: ${props => props.theme.projectTextColor};
    position: relative;
    z-index: 1;

    & > h2 {
        color: ${props => props.theme.projectTextColor};
        font-family: ${props =>  props.theme.titleFontFamily};
    }

    & > div > div > h3 {
        font-family: ${props =>  props.theme.titleFontFamily};
        color: ${props => props.theme.projectTitleColor};
    }
`;  

const Title = styled.h2`
    margin-bottom: 72px;
    padding-top: 80px;
    font-weight: 400;
    font-size: 60px;
    text-align: center;
`;

function Projects() {
    const ctx = useContext(ThemeContext);
    const [list, setList] = useState([]);
    const [theme, setTheme] = useState(new Theme(false));

    useEffect(() => {
        setTheme(new Theme(ctx.isInSpaceMode));
    }, [ctx]);

    if (list.length === 0) {
        fetch('https://api.github.com/users/jhigfolio/repos')
        .then(response => response.json())
        .then(repos => {
            let promises = []
            repos.forEach((repo, i) => {
                promises.push(new Promise((res, rej) => {
                    fetch(`https://api.github.com/repos/jhigfolio/${repo.name}/contents/images`,  {
                        'User-Agent': 'jhigfolio'
                    })
                    .then(response => response.json())
                    .then(images => {
                        res({
                            images: images,
                            title: repo.name,
                            summary: repo.description,
                            link: repo.html_url
                        });
                    });
                })); 
            })
            Promise.all(promises).then((vals) => {
                let temp = [];
                vals.forEach((val) => {
                    temp.push(val);
                });
                setList(temp);
            });
        }).catch((err) => {
            console.log(err);
        });
    } 

    return (
        <Container
            theme={theme} 
        >
            <Title>
                My Projects
            </Title>
              {list.map((item, i) => 
                    <Project 
                        images={item.images}
                        title={item.title}
                        summary={item.summary}
                        link={item.link} 
                        key={i}
                    />
                )}
        </Container>
    )
}

export default Projects;