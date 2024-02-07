import React from 'react';
import mainPhoto from './../../../assets/images/tempPhoto.jpeg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <MainContentBlock>
                        <StyledSpan>Welcome </StyledSpan>
                        <Name>I’m Denis Krestov</Name>
                        <MainTitle>frontend developer</MainTitle>
                        <ButtonCV>Download CV</ButtonCV>
                    </MainContentBlock>
                    <PhotoWrapper>
                        <StyledPhoto src={mainPhoto} alt={'my photo'}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';

        width: 596px;
        height: 658px;
        background: rgb(90, 108, 108);

        position: absolute;
        top: -40px;
        right: -40px;

        z-index: -1;
    }
`


const MainContentBlock = styled.div`
    max-width: 330px;
`


const StyledMain = styled.section`
    min-height: 100dvh;
    display: flex;
`

const StyledPhoto = styled.img`
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
    background: linear-gradient(180.00deg, rgb(21, 185, 185), rgb(60, 29, 255) 100%);
    transition: all 0.5s;

    position: relative;
    left: -2px;

    &:hover {
        transform: translateY(-5px);

    }
`
