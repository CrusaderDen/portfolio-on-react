import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
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