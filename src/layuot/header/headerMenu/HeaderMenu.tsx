import React from 'react';
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string>; ru: (any: any) => void; en: (any: any) => void }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => <ListItem key={index}>
                    <Link href={`#section${index}`}>
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
            <LanguageButtons>
                <ButtonRU onClick={props.ru}>ru</ButtonRU>
                <ButtonEn onClick={props.en}>en</ButtonEn>
            </LanguageButtons>
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
        color: rgb(152, 152, 152);
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
    background-color: rgba(31, 31, 31, 0.7);
    backdrop-filter: blur(10px);
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100%;

    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        gap: 70px;
    }

    &::before {
        content: '';
        width: 90vw;
        height: 1px;
        background-color: rgb(152, 152, 152);

        position: absolute;
        bottom: 0;
    }

`

const Link = styled.a`
    font-size: 28px;
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

const ButtonRU = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: darkorange;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
`
const ButtonEn = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: darkorange;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
`

const LanguageButtons = styled.div`
    position: fixed;
    left: 90%;
    display: flex;
    gap: 20px;
`
