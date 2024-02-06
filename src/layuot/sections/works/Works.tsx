import React from 'react';
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import project_card_1 from './../../../assets/images/project-card-1.webp'
import project_card_2 from './../../../assets/images/project-card-2.webp'
import project_card_3 from './../../../assets/images/project-card-3.webp'
import styled from "styled-components";

export const Works = () => {
    return (
        <WorksStyled>
            <SectionTitle>My Work Experiance</SectionTitle>
            <FlexWrapper gap={'50px'} wrap={'nowrap'}>
                <Work src={project_card_1} text={'Made a simple card page using HTML 5 and  CSS 3'}
                      targetLink={'https://mail.ru/'}/>
                <Work src={project_card_2} text={'Made an I.P address tracking website.'}
                      targetLink={'https://mail.ru/'}/>
                <Work src={project_card_3} text={'Made a social media manager template using HTML 5, CSS and JS.'}
                      targetLink={'https://mail.ru/'}/>
            </FlexWrapper>

            <FlexWrapper direction={'column'} gap={'20px'} justify={'center'} align={'center'}>
                <SectionTitle>Intrested in my Work</SectionTitle>
                <StyledSpan>Download my cV to know more about me</StyledSpan>
                <StyledButton>Download CV</StyledButton>
            </FlexWrapper>


        </WorksStyled>
    );
};

const WorksStyled = styled.section`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
`

const StyledSpan = styled.span``

const StyledButton = styled.button``