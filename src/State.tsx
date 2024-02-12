import {rerenderEntireTree} from "./index";


export let currentLang: string = 'en'

export let state = {
    en: {
        menuItems: ['Home', 'Skills', 'Portfolio'],
        main: {
            styledSpanContent: 'WELCOME',
            nameContent: 'I’m Denis Krestov',
            typewriterContent_1: 'FRONTEND DEVELOPER',
            typewriterContent_2: 'WITH A GREAT DESIRE TO WORK',
            buttonCV_Content: 'Download CV',
        },
        skills: {
            sectionTitle_hard: 'My Hard Skills...',
            sectionTitle_soft: '... And Soft Skills',
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
                {skillTitle: 'persistence', skillProgress: '90%'},
                {skillTitle: 'analytical skills', skillProgress: '85%'},
                {skillTitle: 'friendliness', skillProgress: '80%'},
                {skillTitle: 'sense of humor', skillProgress: '95%'},
            ],
        },
        works: {
            sectionTitle_1: 'Work Experience',
            sectionTitle_2: 'Interested in my Work',
            styledSpanContent: 'Download my CV to know more about me',
            buttonCV_Content: 'Download CV',
            buttonCard_Content: 'Learn More ',
            card_1_Content: 'Made a landing page about cakes. Using HTML 5, CSS 3 and some JS.',
            card_2_Content: 'Made a landing page with adaptive layout.',
            card_3_Content: 'Made an adaptive social media template using HTML 5, CSS.',
            card_4_Content: 'Made a residential district\'s landing page with HTML 5 and interesting CSS 3 effects.',
            card_5_Content: 'Balloon tours adaptive landing page.',
            card_6_Content: 'Bank application on vanilla JS.',
        },
        footer: {
            copyright: 'Made By Denis Krestov - Copyright 2024',
            socialIcons: ['telegram', 'vk', 'linkedIn'],
            socialLinks: {
                telegramLink: 'https://t.me/crusaderDen',
                vkontacteLink: 'https://vk.com/skalakrestov',
                linkedInLink: '#!',
            }
        },
    },
    ru: {
        menuItems: ['Главная', 'Скилы', 'Портфолио'],
        main: {
            styledSpanContent: 'ПРИВЕТ',
            nameContent: 'Я Денис Крестов',
            typewriterContent_1: 'Фронтенд разработчик',
            typewriterContent_2: 'с огромным желанием работать',
            buttonCV_Content: 'Загрузить CV',
        },
        skills: {
            sectionTitle_hard: 'Мои основные инструменты...',
            sectionTitle_soft: '... и личные качества',
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
                {skillTitle: 'надёжность', skillProgress: '90%'},
                {skillTitle: 'аналитические способности', skillProgress: '85%'},
                {skillTitle: 'дружелюбие', skillProgress: '80%'},
                {skillTitle: 'чувство юмора', skillProgress: '95%'},
            ],
        },
        works: {
            sectionTitle_1: 'Портфолио',
            sectionTitle_2: 'Заинтересовались?',
            styledSpanContent: 'Загрузите CV, что бы узнать обо мне больше',
            buttonCV_Content: 'Загрузить CV',
            buttonCard_Content: 'Посмотреть ',
            card_1_Content: 'Лендинг "Тортики на заказ". HTML 5, CSS 3 и немного JS. ',
            card_2_Content: 'Лендинг "Cyberpunk" с адаптивом.',
            card_3_Content: 'Адаптивный лендинг на тему аудио подкастов. HTML 5, CSS 3.',
            card_4_Content: 'Лендинг жилого комплекса, HTML 5 и интересные CSS 3 эффекты.',
            card_5_Content: 'Адаптивная страница "Туры на воздушных шарах".',
            card_6_Content: 'Банковское приложение на ванильном JS.',
        },
        footer: {
            copyright: 'Разработчик Крестов Денис - Copyright 2024',
            socialIcons: ['telegram', 'vk', 'linkedIn'],
            socialLinks: {
                telegramLink: 'https://t.me/crusaderDen',
                vkontacteLink: 'https://vk.com/skalakrestov',
                linkedInLink: '#!',
            }
        },
    }
}

export const callBacks = {
    changeLangToRU() {
        currentLang = 'ru'
        rerenderEntireTree()
    },

    changeLangToEN() {
        currentLang = 'en'
        rerenderEntireTree()
    },

}


