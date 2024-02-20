export const theme = {
    colors: {
        primaryBg: '#1F1F1F', //главный фон: темный серо-коричневый
        primaryFont: '#fff', //основной для текста: белый
        inactivity: 'rgb(152, 152, 152)', //вспомогательный фон: светло-серый
        accentBG_Vertical: 'linear-gradient(180.00deg, rgb(21, 185, 185),rgb(60, 29, 255) 100%)', //вертикальный градиент в кнопках
        accentBG_Horizontal: 'linear-gradient(270.00deg, rgb(21, 185, 185) 6.489%,rgb(60, 29, 255) 113.359%)', //горизонтальный градиент в прогресс-барах
        accentFont: 'rgb(31, 31, 31)', //цвет текста для акцентного БГ: темный серо-коричневый
        // accentFont: 'white', //цвет текста для акцентного БГ: белый
    },
    media: {
        littleScreen: 'screen and (max-width: 1400px)',
        landscape: 'screen and (max-width: 1050px)',
        tablet: 'screen and (max-width: 768px)',
        mobile: 'screen and (max-width: 576px)',
    }
}