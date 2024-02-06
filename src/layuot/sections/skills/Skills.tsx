import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import {HardSkill} from "./hardSkill/hardSkill";
import {SoftSkill} from "./softSkill/SoftSkill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SkillWrapper>
                    <SectionTitle>My Hard Skills...</SectionTitle>
                    <FlexWrapper justify={'space-between'}>
                        <HardSkill iconId={'js'} title={'javascript'}/>
                        <HardSkill iconId={'ts'} title={'typescript'}/>
                        <HardSkill iconId={'react'} title={'react'}/>
                        <HardSkill iconId={'redux'} title={'redux'}/>
                        <HardSkill iconId={'r-native'} title={'react native'}/>
                        <HardSkill iconId={'next'} title={'next js'}/>
                        <HardSkill iconId={'styled'} title={'redux'}/>
                        <HardSkill iconId={'git'} title={'git'}/>
                    </FlexWrapper>
                </SkillWrapper>
                <SkillWrapper>
                    <SectionTitle>... And Soft Skills</SectionTitle>
                    <FlexWrapper direction={'column'}>
                        <SoftSkill title={'friendliness'} progress={'80%'}/>
                        <SoftSkill title={'sense of humor'} progress={'70%'}/>
                        <SoftSkill title={'persistence'} progress={'90%'}/>
                        <SoftSkill title={'analytical skills'} progress={'85%'}/>
                    </FlexWrapper>
                </SkillWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #000;
    padding-bottom: 50px;

`
const SkillWrapper = styled.div`
    margin-bottom: 50px;
`