import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";


export const Header = (props: any) => {
    return (
        <StyledHeader>
            {/*empty slot for the Logo component*/}
            <HeaderMenu menuItems={props.menuItems} ru={props.ru} en={props.en}/>
            <MobileMenu menuItems={props.menuItems} ru={props.ru} en={props.en}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: rgba(31, 31, 31, 0.7);
    backdrop-filter: blur(10px);
    position: fixed;
    left: 0;
    top: 0;
    padding: 14px 0;
    width: 100%;

    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.tablet} {
        backdrop-filter: none;
        background-color: transparent;
    };


    &::before {
        content: '';
        width: 90vw;
        height: 1px;
        background-color: rgb(152, 152, 152);

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        @media ${theme.media.tablet} {
            display: none;
        };


    }
`

