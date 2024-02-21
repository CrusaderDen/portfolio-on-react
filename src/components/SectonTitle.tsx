import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: white;
    //font-size: 55px;
    margin-bottom: 50px;
    font-size: calc((100vw - 900px) / (1920 - 360) * (55 - 35) + 35px);
    @media ${theme.media.mobile} {
        padding-top: 0;
        text-align: center;
    }
`