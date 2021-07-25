import React, { useState } from 'react';
import { StyledCarousel, Wrapper, ArrowLeft, ArrowRight } from './carousel.component.style';
import {
    faChevronRight, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { createGlobalStyle } from 'styled-components';

config.autoAddCss = false;
const StyledFont = createGlobalStyle`
    ${dom.css()}
`;
const carouselOffset = 20;

const navigateLeft = (scrollPosition, setScrollPosition) => () => {
    if (scrollPosition >= 0) setScrollPosition(scrollPosition - 1);
}

const navigateRight = (scrollPosition, setScrollPosition) => () => {
    if (scrollPosition < carouselOffset) setScrollPosition(scrollPosition + 1);
}

const Carusel = (props) =>
{
    const [scrollPosition, setScrollPosition] = useState(0);

    return(
        <Wrapper>
            <StyledFont/>
            <div>
                <ArrowLeft
                    onClick={navigateLeft(scrollPosition, setScrollPosition)}
                    isShow={scrollPosition > 0}
                >
                    <FontAwesomeIcon icon={faChevronLeft} size={'1x'} />
                </ArrowLeft>
                <ArrowRight
                    onClick={navigateRight(scrollPosition, setScrollPosition)}
                    isShow={scrollPosition < carouselOffset}
                >
                    <FontAwesomeIcon icon={faChevronRight} size={'1x'} />
                </ArrowRight>
            </div>
            <StyledCarousel leftGutter={props.children.length * 92} scrollPosition={scrollPosition}>
                {props.children}
            </StyledCarousel>
        </Wrapper>
    );
}

export default Carusel;
