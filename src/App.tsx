import React from 'react';
import {Header} from "./layuot/header/Header";
import {Main} from "./layuot/sections/main/Main";
import {Skills} from "./layuot/sections/skills/Skills";
import {Works} from "./layuot/sections/works/Works";
import {Footer} from "./layuot/footer/Footer";
import {state} from "./State";

function App() {
    return (
        <div className="App">
            <Header navMenu={state.navMenu}/>
            <Main/>
            <Skills hardSkills={state.hardSkills} softSkills={state.softSkills}/>
            <Works/>
            <Footer SocialIcons={state.SocialIcons}/>
        </div>
    );
}

export default App
