import React, { useState } from 'react';
import styled from 'styled-components';

import Project from './Project';
import Tele from './Tele';

const Container = styled.div`
    padding-bottom: 120px;
    width: 100vw;
    height: auto;
    background-color: #f3db95;
    clip-path: polygon(83% 2%, 100% 0, 100% 100%, 19% 98%, 0 100%, 0 0);
    clip-path: polygon(100% 0, 100% 100%, 35% 98%, 0 100%, 0 0);
    position: relative;
    z-index: 1;
`;

const Title = styled.h2`
    margin-bottom: 80px;
    padding-top: 80px;
    color: #020343;
    color: black;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    font-size: 60px;
    text-align: center;
`;

function Projects() {
    const [list, setList] = useState([]);
    if (list.length === 0) {
        fetch('https://api.github.com/users/jhigfolio/repos')
        .then(response => response.json())
        .then(repos => {
            // console.log(repos[0]);
            let promises = []
            repos.forEach((repo, i) => {
                promises.push(new Promise((res, rej) => {
                    fetch(`https://api.github.com/repos/jhigfolio/${repo.name}/contents/img.jpg`,  {
                        'User-Agent': 'jhigfolio'
                    })
                    .then(response => response.json())
                    .then(img => {
                        res({
                            pic: img.download_url,
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
        });
    } 

    return (
        <Container>
            <Title>Projects</Title>
            <Tele>
                {list.map((item, i) => 
                    <Project 
                        pic={item.pic}
                        title={item.title}
                        summary={item.summary}
                        link={item.link} 
                        key={i}
                    />
                )}
            </Tele>
        </Container>
    )
}

export default Projects;