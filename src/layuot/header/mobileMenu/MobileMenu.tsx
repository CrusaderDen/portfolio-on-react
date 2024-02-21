import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

//--------------для кнопок смены языка
export const MobileMenu = (props: {
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

//---------------------------------
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }
    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [menuIsOpen])

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuOverlay isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <ul>
                    {props.menuItems.map((item, index) => <ListItem key={index}>
                        <Link href={`#section${index}`}>
                            {item}

                        </Link>
                    </ListItem>)}
                </ul>
                <LanguageButtons>
                    <ButtonEn onClick={setEnglish} className={'active'}>en</ButtonEn>
                    <ButtonRU onClick={setRussian}>ru</ButtonRU>
                </LanguageButtons>
            </MobileMenuOverlay>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
    //display: none;
    transform: translate(100%);
    transition: all 0.5s ease-in-out;
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;
    //width: 100%;
    height: 100dvh;
    right: 0;
    z-index: 666;


    ${props => props.isOpen && css<{ isOpen: boolean }>`
        //display: block;
        transform: translateX(0%);
        overflow: hidden;
    `}
    ul {
        display: flex;
        flex-direction: column;
        gap: 70px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`


const BurgerButton = styled.div<{ isOpen: boolean }>`
    position: absolute;
    z-index: 9999;
    top: 30px;
    right: 30px;

    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: rgba(151, 151, 151, 1);

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(151, 151, 151, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.inactivity};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.inactivity};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg);
            `}
        }

    }
`


const Link = styled.a`
    font-size: 38px;
    font-weight: 700;
    transition: all 0.5s;
    color: ${theme.colors.inactivity};
`


const ListItem = styled.li`
    display: flex;
    justify-content: center;
`

const LanguageButtons = styled.div`
    //display: none;
    position: absolute;
    z-index: 9999;
    bottom: 5%;
    left: 0;

    width: 100%;
    display: flex;
    justify-content: space-evenly;



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
    transform: scale(1.4);
    transition: all 0.3s ease;

    &:hover {
        background: ${theme.colors.accentBG_Vertical};
    }

    &.active {
        background: ${theme.colors.accentBG_Vertical};
    }
`
const ButtonEn = styled(ButtonRU)``


