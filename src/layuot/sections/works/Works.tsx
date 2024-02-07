import React from 'react';
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import project_card_1 from './../../../assets/images/project-card-1.webp'
import project_card_2 from './../../../assets/images/project-card-2.webp'
import project_card_3 from './../../../assets/images/project-card-3.webp'
import styled from "styled-components";
import {ButtonCV} from "../../../components/ButtonCV";

export const Works = () => {
    return (
        <WorksStyled>
            <SectionTitle>Work Experiance</SectionTitle>
            <CardBox>
                <FlexWrapper gap={'50px'} wrap={'nowrap'}>
                    <Work src={project_card_1} text={'Made a simple card page using HTML 5 and  CSS 3'}
                          targetLink={'https://mail.ru/'}/>
                    <Work src={project_card_2} text={'Made an I.P address tracking website.'}
                          targetLink={'https://mail.ru/'}/>
                    <Work src={project_card_3} text={'Made a social media manager template using HTML 5, CSS and JS.'}
                          targetLink={'https://mail.ru/'}/>
                </FlexWrapper>
            </CardBox>

            <ContactBox>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <SectionTitle>Intrested in my Work ?</SectionTitle>
                    <StyledSpan>Download my CV to know more about me</StyledSpan>
                    <ButtonCV>Download CV</ButtonCV>
                </FlexWrapper>
            </ContactBox>


        </WorksStyled>
    );
};


const CardBox = styled.div`
    margin-bottom: 75px;
`


const WorksStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

const StyledSpan = styled.span`
    font-size: 20px;
    color: rgb(158, 158, 158);
`


const ContactBox = styled.div`
    ${SectionTitle} {
        margin: 0;
    }

    ${StyledSpan} {
        margin-bottom: 25px;
    }
`
