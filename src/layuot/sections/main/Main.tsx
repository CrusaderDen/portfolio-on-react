import React from 'react';
import mainPhoto from './../../../assets/images/main-photo.webp';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-evenly'}>
                <div>
                    <StyledSpan>Welcome </StyledSpan>
                    <Name>I’m Denis Krestov</Name>
                    <MainTitle>frontend developer</MainTitle>
                    <ButtonCV>Download CV</ButtonCV>
                </div>
                <StyledPhoto src={mainPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 70vh;
    background-color: beige;
`


const StyledPhoto = styled.img`
    width: 566px;
    height: 780px;
    position: relative;
    top: -160px;
`
const MainTitle = styled.h1`
`
const Name = styled.h2`
`
const StyledSpan = styled.span`
`
const ButtonCV = styled.button``
