import React from 'react';
import styled from "styled-components";
import iconsSprite from "../../../../assets/images/sprite.svg";


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
            <Link href={props.targetLink}>Learn More &#8594;</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: red;
    max-width: 372px;
    width: 100%;
    display: grid;
    justify-items: center;
    border: 5px solid #127BC3;

`

const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
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