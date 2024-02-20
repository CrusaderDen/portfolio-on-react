import styled from "styled-components";
import {theme} from "../styles/Theme";
// @ts-ignore
import CV from './../assets/CV.doc';


export const ButtonCV = styled.a.attrs(() => ({
    href: CV,
    target: '_blank',
}))`
    //font-size: 25px;
    padding: 17px 47px;
    border-radius: 10px;
    background: ${theme.colors.accentBG_Vertical};
    color: ${theme.colors.accentFont};
    transition: all 0.5s;
    cursor: pointer;
    white-space: nowrap;

    font-size: calc((100vw - 900px) / (1920 - 900) * (25 - 20) + 20px);

    &:hover {
        transform: translateY(-5px);

    }
`