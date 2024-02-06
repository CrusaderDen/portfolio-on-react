import React from 'react';
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <nav>
                <ul>
                    {props.menuItems.map((item, index) => <ListItem key={index}>
                        <Link href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>)}
                </ul>
            </nav>
        </StyledHeaderMenu>
    );
};

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    transition: all 0.5s;
    //outline: 1px solid green;

    span {
        color: white;
    }

    & + & {
        top: 50%;

        span {

            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;
    }
`

const Link = styled.a`
    font-size: 30px;
    transition: all 0.5s;
    color: transparent;
`


const ListItem = styled.li`
    position: relative;


    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        background-color: #16c447;
        position: absolute;
        top: 50%;
        left: -5px;
        right: -5px;
        z-index: 1;
        transform: scale(0);
        transition: all 0.5s;
    }

    &:hover {
        &::before {
            transform: scale(1)
        }
    ;
    }
}

&:hover {
    ${Mask} {
        transform: skewX(12deg) translateX(5px);

        & + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
        }
    }
}
`

