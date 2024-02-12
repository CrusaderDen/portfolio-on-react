// export let state = {
//     en: {
//
//         navMenu: ['Home', 'Skills', 'Portfolio'],
//
//         SocialIcons: ['telegram', 'vk', 'linkedIn'],
//
//         hardSkills: [
//             {spriteName: 'js', skillTitle: 'javascript'},
//             {spriteName: 'ts', skillTitle: 'typescript'},
//             {spriteName: 'react', skillTitle: 'react'},
//             {spriteName: 'redux', skillTitle: 'redux'},
//             {spriteName: 'r_native', skillTitle: 'react native'},
//             {spriteName: 'next', skillTitle: 'next js'},
//             {spriteName: 'styled', skillTitle: 'styled components'},
//             {spriteName: 'git', skillTitle: 'git'}
//         ],
//
//         softSkills: [
//             {skillTitle: 'friendliness', skillProgress: '80%'},
//             {skillTitle: 'sense of humor', skillProgress: '70%'},
//             {skillTitle: 'persistence', skillProgress: '90%'},
//             {skillTitle: 'analytical skills', skillProgress: '85%'},
//         ],
//     },
//     ru: {
//
//         navMenu: ['Главная', 'Скилы', 'ПОртфолио'],
//
//         SocialIcons: ['telegram', 'vk', 'linkedIn'],
//
//         hardSkills: [
//             {spriteName: 'js', skillTitle: 'javascript'},
//             {spriteName: 'ts', skillTitle: 'typescript'},
//             {spriteName: 'react', skillTitle: 'react'},
//             {spriteName: 'redux', skillTitle: 'redux'},
//             {spriteName: 'r_native', skillTitle: 'react native'},
//             {spriteName: 'next', skillTitle: 'next js'},
//             {spriteName: 'styled', skillTitle: 'styled components'},
//             {spriteName: 'git', skillTitle: 'git'}
//         ],
//
//         softSkills: [
//             {skillTitle: 'дружелюбность', skillProgress: '80%'},
//             {skillTitle: 'чувство юмора', skillProgress: '70%'},
//             {skillTitle: 'надёжность', skillProgress: '90%'},
//             {skillTitle: 'аналитические способности', skillProgress: '85%'},
//         ],
//     },
//     changeLangToRU() {
//         alert('Включен русский язык из стейта')
//
//     },
//
//     changeLangToEN() {
//         alert('Включен английский язык из стейта')
//     },
//
// }


import {rerenderEntireTree} from "./index";

export let state = {
    en: {

        navMenu: ['Home', 'Skills', 'Portfolio'],

        SocialIcons: ['telegram', 'vk', 'linkedIn'],

        hardSkills: [
            {spriteName: 'js', skillTitle: 'javascript'},
            {spriteName: 'ts', skillTitle: 'typescript'},
            {spriteName: 'react', skillTitle: 'react'},
            {spriteName: 'redux', skillTitle: 'redux'},
            {spriteName: 'r_native', skillTitle: 'react native'},
            {spriteName: 'next', skillTitle: 'next js'},
            {spriteName: 'styled', skillTitle: 'styled components'},
            {spriteName: 'git', skillTitle: 'git'}
        ],

        softSkills: [
            {skillTitle: 'friendliness', skillProgress: '80%'},
            {skillTitle: 'sense of humor', skillProgress: '70%'},
            {skillTitle: 'persistence', skillProgress: '90%'},
            {skillTitle: 'analytical skills', skillProgress: '85%'},
        ],

        main: {
            welcome: 'WELCOME',
            name: 'I’m Denis Krestov',
            typerText1: 'FRONTEND DEVELOPER',
            typerText2: 'WITH A GREAT DESIRE TO WORK',
            buttonText: 'Download CV',
        },
        skills: {
            myHardSkills: 'My Hard Skills...',
            mySoftSkills: '... And Soft Skills',
        },
        works: {
            workExperience: 'Work Experience',
            interestedInMyWork: 'Interested in my Work ??',
            downLoadCV: 'Download my CV to know more about me',
            buttonText: 'Download CV',

        },
        footer: {},
    },
    ru: {

        navMenu: ['Главная', 'Скилы', 'Портфолио'],

        SocialIcons: ['telegram', 'vk', 'linkedIn'],

        hardSkills: [
            {spriteName: 'js', skillTitle: 'javascript'},
            {spriteName: 'ts', skillTitle: 'typescript'},
            {spriteName: 'react', skillTitle: 'react'},
            {spriteName: 'redux', skillTitle: 'redux'},
            {spriteName: 'r_native', skillTitle: 'react native'},
            {spriteName: 'next', skillTitle: 'next js'},
            {spriteName: 'styled', skillTitle: 'styled components'},
            {spriteName: 'git', skillTitle: 'git'}
        ],

        softSkills: [
            {skillTitle: 'дружелюбность', skillProgress: '80%'},
            {skillTitle: 'чувство юмора', skillProgress: '70%'},
            {skillTitle: 'надёжность', skillProgress: '90%'},
            {skillTitle: 'аналитические способности', skillProgress: '85%'},
        ],

        main: {
            welcome: 'Привет',
            name: 'Я Денис Крестов',
            typerText1: 'Фронтенд разработчик',
            typerText2: 'с огромным желанием работать',
            buttonText: 'Загрузить CV',
        },
        skills: {
            myHardSkills: 'Мои основные инструменты...',
            mySoftSkills: '... и главные качества',
        },
        works: {
            workExperience: 'Портфолио',
            interestedInMyWork: 'Заинтересовались?',
            downLoadCV: 'Загрузите CV, что бы узнать обо мне больше',
            buttonText: 'Загрузить CV',

        },
        footer: {},
    },

}

export let currentLang: string = 'ru'

export const callBacks = {
    changeLangToRU() {
        currentLang = 'ru'
        rerenderEntireTree()
        // alert(currentLang)
    },

    changeLangToEN() {
        currentLang = 'en'
        rerenderEntireTree()
        // alert(currentLang)
    },

}


