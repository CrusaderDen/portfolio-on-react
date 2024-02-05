import React from 'react';
import mainPhoto from './../../../assets/images/photo.png';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper>
                    <FlexWrapper justify={'space-evenly'} align={'center'}>
                        <MainContentBlock>
                            <StyledSpan>Welcome </StyledSpan>
                            <Name>I’m Denis Krestov</Name>
                            <MainTitle>frontend developer</MainTitle>
                            <ButtonCV>Download CV</ButtonCV>
                        </MainContentBlock>
                        <StyledPhoto src={mainPhoto} alt="photo"/>
                    </FlexWrapper>
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};

const MainContentBlock = styled.div`
    max-width: 330px;
`

const MainWrapper = styled.div`
    border: 3px solid #5A585E;
    border-radius: 30px;
`

const StyledMain = styled.section`
    min-height: calc(100dvh - 200px);
    background-color: black;

`

const StyledPhoto = styled.img`
    height: 580px;

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
