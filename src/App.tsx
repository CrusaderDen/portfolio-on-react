import React from 'react';
import {Header} from "./layuot/header/Header";
import {Main} from "./layuot/sections/main/Main";
import {Skills} from "./layuot/sections/skills/Skills";
import {Works} from "./layuot/sections/works/Works";
import {Footer} from "./layuot/footer/Footer";

const SocialIcons = ['telegram', 'vk', 'linkedIn']

const hardSkills = [
    {spriteName: 'js', skillTitle: 'javascript'},
    {spriteName: 'ts', skillTitle: 'typescript'},
    {spriteName: 'react', skillTitle: 'react'},
    {spriteName: 'redux', skillTitle: 'redux'},
    {spriteName: 'r_native', skillTitle: 'react native'},
    {spriteName: 'next', skillTitle: 'next js'},
    {spriteName: 'styled', skillTitle: 'styled components'},
    {spriteName: 'git', skillTitle: 'git'},
]

const softSkills = [
    {skillTitle: 'friendliness', skillProgress: '80%'},
    {skillTitle: 'sense of humor', skillProgress: '70%'},
    {skillTitle: 'persistence', skillProgress: '90%'},
    {skillTitle: 'analytical skills', skillProgress: '85%'},
]

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills hardSkills={hardSkills} softSkills={softSkills}/>
            <Works/>
            <Footer SocialIcons={SocialIcons}/>
        </div>
    );
}

export default App
