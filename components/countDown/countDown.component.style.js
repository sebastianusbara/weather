import styled from 'styled-components';

export const CountDown = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: whitesmoke;
  text-align: center;
  padding: 18px;
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    padding: 21px;
    font-size: 21px;
  }
`;
