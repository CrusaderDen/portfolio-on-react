import React from 'react';
import {Header} from "./layuot/header/Header";
import {Main} from "./layuot/sections/main/Main";
import {Skills} from "./layuot/sections/skills/Skills";
import {Works} from "./layuot/sections/works/Works";
import {Footer} from "./layuot/footer/Footer";
import {state} from "./State";
import {callBacks} from "./State";
import {currentLang} from "./State";


function App() {
    return (
        <div className="App">
            <Header navMenu={(state as any)[currentLang].navMenu} ru={callBacks.changeLangToRU}
                    en={callBacks.changeLangToEN}/>
            <Main content={(state as any)[currentLang].main}/>
            <Skills content={(state as any)[currentLang].skills} hardSkills={(state as any)[currentLang].hardSkills}
                    softSkills={(state as any)[currentLang].softSkills}/>
            <Works content={(state as any)[currentLang].works}/>
            <Footer SocialIcons={(state as any)[currentLang].SocialIcons}/>
        </div>
    );
}

export default App
