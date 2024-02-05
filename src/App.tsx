import React from 'react';
import {Header} from "./layuot/header/Header";
import {Main} from "./layuot/sections/main/Main";
import {Skills} from "./layuot/sections/skills/Skills";
import {Works} from "./layuot/sections/works/Works";
import {Footer} from "./layuot/footer/Footer";

const SocialIcons = ['telegram', 'vk', 'linkedIn']

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Footer SocialIcons={SocialIcons}/>
        </div>
    );
}

export default App
