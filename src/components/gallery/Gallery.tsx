import {Work} from "../../layuot/sections/works/work/Work";
import project_card_1 from "../../assets/images/project-card-1.webp";
import project_card_3 from "../../assets/images/project-card-3.webp";
import project_card_4 from "../../assets/images/project-card-4.webp";
import project_card_5 from "../../assets/images/project-card-5.webp";
import project_card_6 from "../../assets/images/project-card-6.webp";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import arrowLeft from "../../assets/images/arrow_left.svg";
import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


const responsive = {
    0: {
        items: 1,
    },
    1024: {
        items: 3,
        itemsFit: 'contain',
    }
}


export const Gallery = (props: any) => {
    const items = [
        <Work src={project_card_1} text={props.content.card_1_Content}
              targetLink={'https://sweet37.ru/'} buttonContent={props.content.buttonCard_Content}/>,
        <Work src={project_card_3} text={props.content.card_3_Content}
              targetLink={'https://castaway.ivrupo.ru/'} buttonContent={props.content.buttonCard_Content}/>,
        <Work src={project_card_4}
              text={props.content.card_4_Content}
              targetLink={'https://crusaderden.github.io/Landing_Loft-House/'}
              buttonContent={props.content.buttonCard_Content}/>,
        <Work src={project_card_5} text={props.content.card_5_Content}
              targetLink={'https://balloons.ivrupo.ru/'} buttonContent={props.content.buttonCard_Content}/>,

    ]
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="responsive"
            infinite={true}
            keyboardNavigation={true}
            disableDotsControls
            renderPrevButton={() => {
                return <SliderButtonLeft><img src={arrowLeft} alt=""/></SliderButtonLeft>
            }}
            renderNextButton={() => {
                return <SliderButtonRight><img src={arrowLeft} alt=""/></SliderButtonRight>
            }}
        />
    );
}


const SliderButtonLeft = styled.div`
    user-select: none;

    img {
        width: 30px;
        height: 24px;
        display: block;
    }

    position: absolute;
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        z-index: -1;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        //background-color: goldenrod;
        background: transparent;
        transition: all 0.5s ease;
    }

    &:hover {
        &::before {
            box-shadow: 0 0 2px 3px ${theme.colors.inactivity};
            //box-shadow: 0 0 15px 15px rgba(218, 165, 32, 0.5);

        }
    }


`

const SliderButtonRight = styled(SliderButtonLeft)`
    left: unset;
    right: -72px;

    img {
        transform: rotate(180deg);
    }
`
