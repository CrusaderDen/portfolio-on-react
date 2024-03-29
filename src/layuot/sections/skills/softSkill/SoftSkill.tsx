import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SoftSkillPropsType = {
    title?: string
    progress?: string
}

export const SoftSkill = (props: SoftSkillPropsType) => {
    return (
        <SoftSkillWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillBar>
                <ProgressBar progress={props.progress}/>
            </SkillBar>
        </SoftSkillWrapper>
    );
};

const SoftSkillWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`


const SkillTitle = styled.h3`
    font-size: calc((100vw - 360px) / (1920 - 360) * (26 - 18) + 18px);
    margin-left: 10px;
    margin-bottom: 5px;
`

const SkillBar = styled.div`
    width: 100%;
    height: 18px;
    border-radius: 9px;
    //background-color: rgb(22, 41, 80);
    background-color: #323232;
`

const ProgressBar = styled.div<SoftSkillPropsType>`
    width: ${props => props.progress};
    height: 18px;
    border-radius: 9px;
    //box-shadow: 5px 0 12px #2644d1;
    //background: linear-gradient(270.00deg, rgb(19, 173, 199), rgb(105, 120, 209) 66.667%, rgb(148, 93, 214) 100%);
    background: ${theme.colors.accentBG_Horizontal};
`