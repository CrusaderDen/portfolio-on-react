import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type SoftSkillPropsType = {
    title?: string
    progress?: string
}

export const SoftSkill = (props: SoftSkillPropsType) => {
    return (
        <FlexWrapper direction={'column'}>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillBar>
                <ProgressBar progress={props.progress}/>
            </SkillBar>
        </FlexWrapper>
    );
};

const SkillTitle = styled.h3`
    font-size: 26px;
    margin-left: 10px;
    margin-bottom: 5px;
`

const SkillBar = styled.div`
    max-width: 900px;
    height: 18px;
    border-radius: 9px;
    background-color: rgb(22, 41, 80);
`

const ProgressBar = styled.div<SoftSkillPropsType>`
    width: ${props => props.progress};
    height: 18px;
    border-radius: 9px;
    background: linear-gradient(270.00deg, rgb(19, 173, 199), rgb(105, 120, 209) 66.667%, rgb(148, 93, 214) 100%);
`