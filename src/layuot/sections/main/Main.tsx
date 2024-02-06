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
    border: 1px solid white;
    border-radius: 30px;
    height: 60vh;
    width: 100%;
    //box-shadow: 0 0 80px 30px #1a5ded;
    //background-color: rgba(106, 147, 223, 0.91);
`

const StyledMain = styled.section`
    min-height: calc(100dvh - 150px);
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
    margin-bottom: 35px;
`
const Name = styled.h2`
    color: white;
    font-size: 67px;
    font-weight: 600;
    line-height: 101px;
    //text-shadow: 5px 5px 5px #1a5ded;


`
const StyledSpan = styled.span`
    color: white;
    font-size: 25px;
    font-weight: 300;
    line-height: 38px;
    text-transform: uppercase;
`
const ButtonCV = styled.button`
    font-size: 25px;
    padding: 17px 47px;
    border-radius: 10px;
    background-color: #275afc;
    transition: all 0.5s;

    &:hover {
        transform: translateY(-5px);
        background-color: #4c72ff;
    }
`
