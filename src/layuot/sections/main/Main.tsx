import React from 'react';
import mainPhoto from './../../../assets/images/tempPhoto.jpeg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {ButtonCV} from "../../../components/ButtonCV";
import Typewriter from 'typewriter-effect';
import {theme} from "../../../styles/Theme";

export const Main = (props: any) => {
    return (
        <StyledMain id={'section0'}>
            <Container>
                <MainFlexWrapper>
                    <MainContentBlock>
                        <StyledSpan>{props.content.styledSpanContent}</StyledSpan>
                        <Name>{props.content.nameContent}</Name>
                        <MainTitle>
                            <p>{props.content.typewriterContent_1}</p>
                            <Typewriter
                                options={{
                                    strings: [props.content.typewriterContent_1, props.content.typewriterContent_2],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    wrapperClassName: 'typer'
                                }}
                            />
                        </MainTitle>
                        <ButtonCV>{props.content.buttonCV_Content}</ButtonCV>
                    </MainContentBlock>
                    <PhotoWrapper>
                        <StyledPhoto src={mainPhoto} alt={'my photo'}/>
                    </PhotoWrapper>
                </MainFlexWrapper>
            </Container>
        </StyledMain>
    );
};


const MainFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 100dvh;

    @media ${theme.media.littleScreen} {
        //justify-content: space-evenly;
    }
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`


const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    padding: 0 10px;

    &::before {
        content: '';

        width: 596px;
        height: 658px;
        background: rgb(90, 108, 108);

        position: absolute;
        top: -40px;
        right: -40px;

        z-index: -1;


        @media ${theme.media.littleScreen} {
            display: none;
        }
    }

    @media ${theme.media.littleScreen} {
        transform: scale(0.7);
    }

`


const MainContentBlock = styled.div`
    max-width: 400px;

    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`


const StyledMain = styled.section`
    padding-top: 60px;
    min-height: 100dvh;
    display: flex;
`

const StyledPhoto = styled.img`
    display: block;
`
const MainTitle = styled.h1`
    color: white;
    //font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 35px;

    p {
        display: none;
    }

`
const Name = styled.h2`
    color: white;
    //font-size: 67px;
    font-weight: 600;
    line-height: 1.5;
    font-size: calc((100vw - 900px) / (1920 - 900) * (67 - 35) + 35px);

    @media ${theme.media.tablet} {
        text-align: center;
        font-size: 67px;
    }

`
const StyledSpan = styled.span`
    color: white;
    font-size: 25px;
    font-weight: 300;
    line-height: 38px;
    text-transform: uppercase;
`

