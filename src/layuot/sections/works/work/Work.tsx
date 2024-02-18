import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const Work = (props: any) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="picture"/>
            <Wrapper>
                <Text>{props.text}</Text>
                <Link href={props.targetLink} target={'_about'}>{props.buttonContent}&#8594;</Link>
            </Wrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    user-select: none;
    background-color: transparent;
    max-width: 372px;
    //min-height: 465px;
    width: 100%;


    //border-width: 5px;
    //border-style: solid;
    //border-image: linear-gradient(-135deg, #5d5963, #a3adb2) 1;
    border: 5px solid ${theme.colors.inactivity};


`
const Wrapper = styled.div`
    min-height: 150px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`


const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
        // border-bottom: 1px solid ${theme.colors.inactivity};
    //filter: sepia(0.5);
`

const Text = styled.p`
    //margin: 30px 10px;
    text-align: center;
    flex-grow: 1;
`

const Link = styled.a`
    display: inline-block;
    padding: 14px 16px;
    height: 56px;
    background: ${theme.colors.accentBG_Vertical};
    color: ${theme.colors.accentFont};
    font-weight: 500;
    //border: 2px solid rgb(255, 255, 255);
    border-radius: 4px;
    //margin-bottom: 12px;
    transition: all 0.5s;

    &:hover {
        transform: translateY(-5px);
    }
`