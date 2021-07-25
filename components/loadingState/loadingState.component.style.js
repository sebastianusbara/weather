import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingState = styled.div`
  padding-top: 45px;
  text-align: center;
`;

export const Cloud = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  background: -moz-linear-gradient(top,  #0f0f0f 5%, #23282d 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#23282d), color-stop(100%,#1c1c1c));
  background: -webkit-linear-gradient(top,  #0f0f0f 5%,#23282d 100%);
  background: -o-linear-gradient(top,  #0f0f0f 5%,#23282d 100%);
  background: -ms-linear-gradient(top,  #0f0f0f 5%,#23282d 100%);
  background: linear-gradient(top,  #0f0f0f 5%,#23282d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0f0f0f', endColorstr='#23282d',GradientType=0 );
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 175px;
  &:after {
    background: #0f0f0f;
    content: '';
    position: absolute;
    z-indeX: -1;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    height: 50px;
    left: 25px;
    top: -25px;
    width: 50px;
  };
  &:before {
    background: #0f0f0f;
    content: '';
    position: absolute;
    z-indeX: -1;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    width: 90px;
    height: 90px;
    right: 25px;
    top: -45px;
  }
`;

export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border: 4px solid;
  border-color: #ebbb16 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation-name: ${rotation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: -5px;
`;
