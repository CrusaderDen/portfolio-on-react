import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import {HardSkill} from "./hardSkill/hardSkill";
import {SoftSkill} from "./softSkill/SoftSkill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Hard Skills...</SectionTitle>
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

            <SectionTitle>... And Soft Skills</SectionTitle>
            <FlexWrapper direction={'column'}>
                <SoftSkill title={'friendliness'} progress={'80%'}/>
                <SoftSkill title={'sense of humor'} progress={'70%'}/>
                <SoftSkill title={'persistence'} progress={'90%'}/>
                <SoftSkill title={'analytical skills'} progress={'85%'}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: darkorange;
    min-height: 50vh;
`