import React from 'react';
import styled from 'styled-components';
import sprite from "./assets/images/sprite.svg";


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
            <h2>Начинаем верстать</h2>
            <svg>
                <use xlinkHref={`${sprite}#js`}/>
            </svg>
            <svg>
                <use xlinkHref={`${sprite}#ts`}/>
            </svg>
            <svg>
                <use xlinkHref={sprite + '#react'}/>
            </svg>
            <svg>
                <use xlinkHref={sprite + '#r-native'}/>
            </svg>
            <svg>
                <use xlinkHref={sprite + '#styled'}/>
            </svg>
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