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


        li {
            transition: all 0.5s;

            &:hover {
                transform: scale(1.3) translateY(-5px);
                text-shadow: 0 15px 3px #5693ff;
            }

            a {
                color: #5693ff;
                font-size: 20px;
            }

        }

    }

`
