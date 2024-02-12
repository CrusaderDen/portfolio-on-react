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
            <Link href={props.targetLink} target={'_about'}>Learn More &#8594;</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: red;
    max-width: 372px;
    min-height: 465px;
    width: 100%;
    display: grid;
    justify-items: center;
    //border: 5px solid #127BC3;
    border-width: 5px;
    border-style: solid;
    border-image: linear-gradient(-135deg, #5d5963, #a3adb2) 1;

`

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
    filter: sepia(0.5);
`

const Text = styled.p`
    padding: 30px 10px;
`

const Link = styled.a`
    display: inline-block;
    padding: 14px 16px;
    background: transparent;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 4px;
    margin-bottom: 12px;
    transition: all 0.5s;

    &:hover {
        transform: translateY(-5px);
    }
`