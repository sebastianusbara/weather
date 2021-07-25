import styled from 'styled-components';

export const StyledCarousel = styled.div.attrs(props => ({
    leftGutter: props.leftGutter,
    scrollPosition: props.scrollPosition * 240
}))`
  display: block;
  transition: 1s;
  z-index: 0;

  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    left: ${props => (props.leftGutter - props.scrollPosition) + 'px'};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  &:before {
    position: fixed;
    top: 0;
    left: 0;
    width: 70px;
    height: 100%;
    content: "";
    background: white;
    z-index: 1;
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  };
  &:after {
    position: fixed;
    top: 0;
    right: 0;
    width: 70px;
    height: 100%;
    content: "";
    background: white;
    z-index: 0;
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export const ArrowLeft = styled.button.attrs(props => ({
    isShow: props.isShow
}))`
  display: none;
  font-size: 42px;
  position: fixed;
  left: 12px;
  top: 50%;
  width: 56px;
  height: 56px;
  z-index: 1;
  border: none;
  border-radius: 21px;
  background: none;
  color: #8395a7;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    display: ${props => props.isShow ? 'block' : 'none'};
  }
`;

export const ArrowRight = styled.button.attrs(props => ({
    isShow: props.isShow
}))`
  display: none;
  font-size: 42px;
  position: fixed;
  right: 12px;
  top: 50%;
  width: 56px;
  height: 56px;
  z-index: 1;
  border: none;
  border-radius: 21px;
  background: none;
  color: #8395a7;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    display: ${props => props.isShow ? 'block' : 'none'};
  }
`;
