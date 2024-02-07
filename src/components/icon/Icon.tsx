import React from 'react';
import iconsSprite from './../../assets/images/sprite.svg'
import styled from "styled-components";


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon width={props.width || '94'} height={props.height || '94'} viewBox={props.viewBox || '0 0 94 94'}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={iconsSprite + '#' + props.iconId}></use>
        </StyledIcon>
    );
};

const StyledIcon = styled.svg``