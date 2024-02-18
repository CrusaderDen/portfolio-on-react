import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectonTitle";
import {HardSkill} from "./hardSkill/hardSkill";
import {SoftSkill} from "./softSkill/SoftSkill";
import {Container} from "../../../components/Container";

// type SkillsPropsType = {
//     hardSkills: { spriteName: string, skillTitle: string }[]
//     softSkills: { skillTitle: string, skillProgress: string }[]
// }

export const Skills = (props: any) => {
    return (
        <StyledSkills id={'section1'}>
            <Container>
                <SkillWrapper>
                    <SectionTitle>{props.content.sectionTitle_hard}</SectionTitle>
                    <FlexWrapper justify={'space-between'}>
                        {props.content.hardSkills.map((item: { spriteName: string, skillTitle: string }) => <HardSkill
                            iconId={item.spriteName}
                            title={item.skillTitle}/>)}
                    </FlexWrapper>
                </SkillWrapper>
                <SkillWrapper>
                    <SectionTitle>{props.content.sectionTitle_soft}</SectionTitle>
                    <FlexWrapper direction={'column'} gap={'25px'}>
                        {props.content.softSkills.map((item: { skillTitle: string, skillProgress: string }) =>
                            <SoftSkill
                                title={item.skillTitle}
                                progress={item.skillProgress}/>)}
                    </FlexWrapper>
                </SkillWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 90px;
    margin-bottom: 100px;

    ${SectionTitle} {
        margin-left: 50px;
    }

`
const SkillWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 100px;
    }
`