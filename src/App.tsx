import React from 'react';
import styled from 'styled-components';
import {Header} from "./layuot/header/Header";
import {Main} from "./layuot/sections/main/Main";
import {Skills} from "./layuot/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    //color: #e91e63;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;