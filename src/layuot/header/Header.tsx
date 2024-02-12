import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


export const Header = (props: { navMenu: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <HeaderMenu menuItems={props.navMenu}/>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.header`

`