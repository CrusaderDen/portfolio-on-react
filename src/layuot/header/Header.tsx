import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


export const Header = (props: any) => {
    return (
        <StyledHeaderMenu>
            <HeaderMenu menuItems={props.menuItems} ru={props.ru} en={props.en}/>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.header`

`

