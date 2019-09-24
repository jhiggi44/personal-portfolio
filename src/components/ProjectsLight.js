import React, { useState } from 'react';
import styled from 'styled-components';
import Project from './Project';

const Container = styled.div`
    padding-bottom: 120px;
    width: 100vw;
    height: auto;
    background-color: white;
    position: relative;
    z-index: 1;
`;

const Title = styled.h2`
    margin-bottom: 50px;
    padding-top: 80px;
    color: yellow;
    color: black;
    font-weight: 400;
    font-size: 60px;
    text-align: center;
`;

function ProjectsLight() {
    const [list, setList] = useState([]);
    if (list.length === 0) {
        fetch('https://api.github.com/users/jhigfolio/repos')
        .then(response => response.json())
        .then(repos => {
            console.log(repos);
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
        }).catch((err) => {
            console.log(err);
        });
    } 

    return (
        <Container>
            <Title>My Projects</Title>
              {list.map((item, i) => 
                    <Project 
                        pic={item.pic}
                        title={item.title}
                        summary={item.summary}
                        link={item.link} 
                        key={i}
                    />
                )}
        </Container>
    )
}

export default ProjectsLight;