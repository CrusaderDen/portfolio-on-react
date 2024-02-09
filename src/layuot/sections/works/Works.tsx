import React from 'react';
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import project_card_1 from './../../../assets/images/project-card-1.webp'
import project_card_2 from './../../../assets/images/project-card-2.webp'
import project_card_3 from './../../../assets/images/project-card-3.webp'
import styled from "styled-components";
import {ButtonCV} from "../../../components/ButtonCV";
import arrowLeft from './../../../assets/images/arrow_left.svg'

export const Works = () => {
    return (
        <WorksStyled id={'section2'}>
            <SectionTitle>Work Experience</SectionTitle>
            <CardBox>
                <FlexWrapper gap={'50px'} wrap={'nowrap'}>
                    <Work src={project_card_1} text={'Made a simple card page using HTML 5 and  CSS 3'}
                          targetLink={'https://mail.ru/'}/>
                    <Work src={project_card_2} text={'Made an I.P address tracking website.'}
                          targetLink={'https://mail.ru/'}/>
                    <Work src={project_card_3} text={'Made a social media manager template using HTML 5, CSS and JS.'}
                          targetLink={'https://mail.ru/'}/>
                </FlexWrapper>
                <SliderButtonLeft><img src={arrowLeft} alt=""/></SliderButtonLeft>
                <SliderButtonRight><img src={arrowLeft} alt=""/></SliderButtonRight>
            </CardBox>

            <ContactBox>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <SectionTitle>Intrested in my Work ?</SectionTitle>
                    <StyledSpan>Download my CV to know more about me</StyledSpan>
                    <ButtonCV onClick={() => alert('Пока нет CV, сорян :)')}>Download CV</ButtonCV>
                </FlexWrapper>
            </ContactBox>


        </WorksStyled>
    );
};


const SliderButtonLeft = styled.div`

    img {
        width: 30px;
        height: 24px;
        display: block;
    }

    position: absolute;
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;


    &:hover {

        &::before {
            transition: all 0.5s;
            box-shadow: 0 0 15px 15px rgba(218, 165, 32, 0.5);
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        z-index: -1;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: goldenrod;
    }
`

const SliderButtonRight = styled(SliderButtonLeft)`
    left: unset;
    right: -100px;
    transform: rotate(180deg) translateY(50%);
`


const CardBox = styled.div`
    margin-bottom: 75px;
    position: relative;
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
