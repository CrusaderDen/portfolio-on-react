import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <nav>
                <ul>
                    {props.menuItems.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
                </ul>
            </nav>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;

    }

`
