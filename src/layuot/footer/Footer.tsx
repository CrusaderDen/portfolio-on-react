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
                                        <Icon iconId={item} width={'17px'} height={'17px'} viewBox={'0 0 17px 17px'}/>
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
  
`
const SocialLink = styled.a`
    background-color: #363636;
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #7471d4;
    transition: all 0.3s ease;

    &:hover {
        background-color: #7471d4;
        color: #363636;
    }
`
const Copyright = styled.small`
    color: rgb(158, 158, 158);
    font-size: 18px;
    text-transform: capitalize;

`
