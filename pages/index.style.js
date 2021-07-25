import styled from 'styled-components';
import styleConstant from '../styles/style.constant';
const { GREY, DARKGREY, BLUE } = styleConstant.COLOR;

export const MainTitle = styled.h1`
  margin-bottom: 0;
  line-height: 1.15;
  font-size: 1.5rem;
  text-align: center;
  margin-top: -20px;

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    margin-top: -80px;
  }
`;

export const CurrentDateTitle = styled.h2`
  color: ${DARKGREY};
  text-align: center;
  font-size: 15px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 15px;
  }
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: 1rem;
`;

export const NavigateButton = styled.a`
  border: none;
  font-size: 18px;
  padding: 12px 32px;
  margin-top: 12px;
  border-radius: 32px;
  background: ${GREY};
  &:hover {
    cursor: pointer;
    background: ${BLUE};
    color: white;
  }
`;

export const CityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;

  @media only screen and (min-width: 768px) {
    overflow: hidden;
  }
`;

export default Main;
