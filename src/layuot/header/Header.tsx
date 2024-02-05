import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";


const navMenu = ['Home', 'Portfolio', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={navMenu}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    height: 20vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`