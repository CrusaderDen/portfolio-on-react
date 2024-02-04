import React from 'react';
import {Work} from "./work/Work";
import project_1_Img from './../../../assets/images/project-card-1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import styled from "styled-components";

export const Works = () => {
    return (
        <div>
            <SectionTitle>My Work Experiance</SectionTitle>
            <FlexWrapper justify={'space-evenly'}>
                <Work src={project_1_Img} text={'Made a simple card page using HTML 5 and  CSS 3'}
                      targetLink={'https://mail.ru/'}/>
                <Work src={project_1_Img} text={'Made a simple card page using HTML 5 and  CSS 3'}
                      targetLink={'https://mail.ru/'}/>
                <Work src={project_1_Img} text={'Made a simple card page using HTML 5 and  CSS 3'}
                      targetLink={'https://mail.ru/'}/>
            </FlexWrapper>
        </div>
    );
};

