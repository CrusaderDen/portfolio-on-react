import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import styled from "styled-components";
import {ButtonCV} from "../../../components/ButtonCV";
import {Container} from "../../../components/Container";
import {Gallery} from "../../../components/gallery/Gallery";
import {theme} from "../../../styles/Theme";


export const Works = (props: any) => {
    return (
        <WorksStyled id={'section2'}>
            <SectionTitle>{props.content.sectionTitle_1}</SectionTitle>
            <Container>
                <CardBox>
                    <FlexWrapper justify={'center'}>
                        <Gallery content={props.content}/>
                    </FlexWrapper>
                </CardBox>
            </Container>
            <ContactBox>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <SectionTitle>{props.content.sectionTitle_2}</SectionTitle>
                    <StyledSpan>{props.content.styledSpanContent}</StyledSpan>
                    <ButtonCV>{props.content.buttonCV_Content}</ButtonCV>
                </FlexWrapper>
            </ContactBox>


        </WorksStyled>
    );
};


const CardBox = styled.div`
    margin-bottom: 150px;
    position: relative;
    width: 100%;
    @media ${theme.media.mobile} {
        margin-bottom: 10px;
    }
`


const WorksStyled = styled.section`
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    overflow: hidden;
    @media ${theme.media.mobile} {
        padding-top: 0;
    }
`

const StyledSpan = styled.span`
    color: rgb(158, 158, 158);
    font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 14) + 14px);
`


const ContactBox = styled.div`

    ${SectionTitle} {
        margin: 0;
    }

    ${StyledSpan} {
        margin-bottom: 25px;
    }
`

