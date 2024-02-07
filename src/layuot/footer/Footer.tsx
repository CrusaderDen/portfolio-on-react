import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Footer = (props: { SocialIcons: Array<string> }) => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-evenly'} align={'center'}>
                <Copyright>Made by Denis Krestov - Copyright 2024</Copyright>
                <SocialList>
                    {props.SocialIcons.map((item, index) => {
                            return (
                                <SocialItem key={index}>
                                    <SocialLink>
                                        <Icon iconId={item} width={'35'} height={'35'} viewBox={'0 0 35 35'}/>
                                    </SocialLink>
                                </SocialItem>
                            )
                        }
                    )}
                </SocialList>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    height: 55px;
    position: relative;
    text-align: center;

    &::after {
        content: '';
        width: 90vw;
        height: 1px;
        background-color: rgb(152, 152, 152);

        position: absolute;
        top: 0;
        transform: translateX(-50%);
    }

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`
    &:hover {
        transform: scale(1.2);
    }
`
const SocialLink = styled.a`

`
const Copyright = styled.small`
    color: rgb(158, 158, 158);
    font-size: 18px;
    text-transform: capitalize;

`
