import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Project from './Project';
import Tele from './Tele';

const Container = styled.div`
    width: 100vw;
    height: auto;
    // background-color: #88918e;
    // background-color: #7a7ae6;
    background-color: #a1a1ff;
    // background-color: white;
    background-color: #f3db95;
    // background-color: grey;
    // background-color: #020343;
    // background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/EBU_Colorbars_HD.svg/2000px-EBU_Colorbars_HD.svg.png");
    padding-bottom: 120px;
    clip-path: polygon(83% 2%, 100% 0, 100% 100%, 19% 98%, 0 100%, 0 0);
    margin-top: -50px;
`;

const Title = styled.h2`
    font-family: 'Roboto Mono', monospace;
    font-size: 60px;
    text-align: center;
    color: #020343;
    color: black;
    padding-top: 80px;
    margin-bottom: 80px;
`;

function Projects() {
    const [list, setList] = useState([]);
    if (list.length === 0) {
        fetch('https://api.github.com/users/jhigfolio/repos')
        .then(response => response.json())
        .then(repos => {
            console.log(repos[0]);
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
                    />
                )}
            </Tele>
        </Container>
    )
}

export default Projects;