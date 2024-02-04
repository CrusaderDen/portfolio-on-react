import React from 'react';
import mainPhoto from './../../../assets/images/main-photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-evenly'}>
                <div>
                    <span>Welcome </span>
                    <h2>I’m Denis Krestov</h2>
                    <h1>frontend developer</h1>
                    <button>Download CV</button>
                </div>
                <StyledPhoto src={mainPhoto} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    min-height: 70vh;
    background-color: beige;
`


const StyledPhoto = styled.img`
    width: 566px;
    h780;
    position: relative;
    top: -160px;
`
const MainTitle = styled.h1`
`
const Name = styled.h2`
`
const StyledSpan = styled.span`
`
