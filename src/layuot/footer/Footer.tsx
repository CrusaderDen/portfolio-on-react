import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";


export const Footer = (props: any) => {

    return (
        <StyledFooter>
            <FlexWrapper justify={'space-evenly'} align={'center'}>
                <Copyright>{props.content.copyright}</Copyright>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={props.content.socialLinks.telegramLink} target={'_blank'}>
                            <Icon iconId={'telegram'} width={'17px'} height={'17px'} viewBox={'0 0 17px 17px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={props.content.socialLinks.vkontacteLink} target={'_blank'}>
                            <Icon iconId={'vk'} width={'17px'} height={'14px'} viewBox={'0 0 17px 17px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={props.content.socialLinks.linkedInLink}>
                            <Icon iconId={'linkedIn'} width={'17px'} height={'17px'} viewBox={'0 0 17px 17px'}/>
                        </SocialLink>
                    </SocialItem>

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
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #363636;
    //color: #7471d4;
    color: ${theme.colors.inactivity};
    transition: all 0.3s ease;

    &:hover {
        background: ${theme.colors.accentBG_Vertical};
        color: ${theme.colors.accentFont};
        //background-color: #7471d4;
        //color: #363636;
    }
`
const Copyright = styled.small`
    color: rgb(158, 158, 158);
    font-size: 18px;
    text-transform: capitalize;

`
