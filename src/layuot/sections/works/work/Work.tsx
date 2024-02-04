import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    src: string
    text: string
    targetLink: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="picture"/>
            <Text>{props.text}</Text>
            <Link href={props.targetLink}>Learn More</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: red;
    max-width: 372px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`

const Text = styled.p``

const Link = styled.a``