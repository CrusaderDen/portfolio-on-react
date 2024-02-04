import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectonTitle} from "../../../components/SectonTitle";
import {HardSkill} from "./hardSkill/hardSkill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectonTitle>My Hard Skills...</SectonTitle>
            <FlexWrapper gap={'50px'}>
                <HardSkill iconId={'js'} title={'javascript'}/>
                <HardSkill iconId={'ts'} title={'typescript'}/>
                <HardSkill iconId={'react'} title={'react'}/>
                <HardSkill iconId={'redux'} title={'redux'}/>
                <HardSkill iconId={'r-native'} title={'react native'}/>
                <HardSkill iconId={'nest'} title={'nest js'}/>
                <HardSkill iconId={'styled'} title={'redux'}/>
                <HardSkill iconId={'git'} title={'git'}/>

            </FlexWrapper>
            <SectonTitle>... And Soft Skills</SectonTitle>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: darkorange;
    min-height: 50vh;
`