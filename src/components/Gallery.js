import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
    width: 100%;
    height: 300px;
    overflow-x: scroll;
`;

const Img = styled.img`
    max-width: 92%;
    max-height: 300px;
    margin: 0 7.5px;
`;

function Gallery({ images }) {
    if (Array.isArray(images)) {
        return (
            <Container>
                {
                    images.map((image, i) => 
                        <Img
                            src={image.download_url}
                            key={i}
                        />
                    )
                }
            </Container> 
        )
    }
    return (
        <div></div>
    )
}

export default Gallery;