import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type HardSkillPropsType = {
    iconId: string
    title: string
}


export const HardSkill = (props: HardSkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: grid;
    justify-items: center;
`

const SkillTitle = styled.h3`
    text-transform: uppercase;
`