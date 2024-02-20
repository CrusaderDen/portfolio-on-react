import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: {
    menuItems: Array<string>;
    ru: (any: any) => void;
    en: (any: any) => void;
}) => {
    function setRussian(e: any) {
        // @ts-ignore
        props.ru()
        e.preventDefault();
        e.target.classList.contains("active") ? e.target.classList.remove("active") : e.target.classList.add("active");
        e.target.previousElementSibling.classList.remove("active");

    }

    function setEnglish(e: any) {
        // @ts-ignore
        props.en()
        e.preventDefault();
        e.target.classList.contains("active") ? e.target.classList.remove("active") : e.target.classList.add("active");
        e.target.nextElementSibling.classList.remove("active");
    }

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
                <ButtonEn onClick={setEnglish} className={'active'}>en</ButtonEn>
                <ButtonRU onClick={setRussian}>ru</ButtonRU>
            </LanguageButtons>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`


    ul {
        display: flex;
        gap: 70px;
    }


    @media ${theme.media.tablet} {
        display: none;
    }

`


const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    transition: all 0.5s;

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
        background: ${theme.colors.accentBG_Vertical};
        //background-color: #16c447;
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

const LanguageButtons = styled.div`
    position: fixed;
    right: 5%;
    top: 30px;
    transform: translateY(-50%);
    display: flex;
    gap: 20px;
`

const ButtonRU = styled.div`
    user-select: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    //background-color: #787871;
    background: ${theme.colors.inactivity};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accentFont};
    font-weight: 700;
    transition: all 0.3s ease;

    &:hover {
        //background-color: #FF8C00FF;
        background: ${theme.colors.accentBG_Vertical};
    }

    &.active {
        //background-color: #FF8C00FF;
        background: ${theme.colors.accentBG_Vertical};
    }
`
const ButtonEn = styled(ButtonRU)``


