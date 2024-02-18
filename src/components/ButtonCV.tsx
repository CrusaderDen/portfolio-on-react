import styled from "styled-components";
import {theme} from "../styles/Theme";
// @ts-ignore
import CV from './../assets/CV.doc';


export const ButtonCV = styled.a.attrs(() => ({
    href: CV,
    target: '_blank'
}))`
    font-size: 25px;
    padding: 17px 47px;
    border-radius: 10px;
    //background: linear-gradient(180.00deg, #15b9b9, #3c1dff 100%);
    background: ${theme.colors.accentBG_Vertical};
    color: ${theme.colors.accentFont};
    transition: all 0.5s;
    cursor: pointer;
    //position: relative;
    //left: -2px;

    &:hover {
        transform: translateY(-5px);

    }
`