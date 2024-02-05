import React from 'react';
import mainPhoto from './../../../assets/images/photo.png';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-evenly'} align={'center'}>
                <div>
                    <StyledSpan>Welcome </StyledSpan>
                    <Name>I’m Denis Krestov</Name>
                    <MainTitle>frontend developer</MainTitle>
                    <ButtonCV>Download CV</ButtonCV>
                </div>
                <StyledPhoto src={mainPhoto} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 80vh;
    background-color: black;
`

const StyledPhoto = styled.img`
    height: 580px;
    position: relative;
    top: -60px;
`
const MainTitle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    text-transform: uppercase;
`
const Name = styled.h2`
    color: white;
    font-size: 67px;
    font-weight: 600;
    line-height: 101px;

`
const StyledSpan = styled.span`
    color: white;
    font-size: 25px;
    font-weight: 300;
    line-height: 38px;
    text-transform: uppercase;
`
const ButtonCV = styled.button``
