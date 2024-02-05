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
    background-color: yellow;

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
