import React from 'react';
import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
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
