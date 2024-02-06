import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const navMenu = ['Home', 'Portfolio', 'Contact']

export const Header = () => {
    return (
        <StyledHeaderMenu>
            <Container>
                <FlexWrapper justify={'center'} align={'flex-end'} height={'100px'}>
                    <HeaderMenu menuItems={navMenu}/>
                </FlexWrapper>
            </Container>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.header`
    background-color: black;
    padding-bottom: 50px;
`