import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-top: -80px;
  margin-bottom: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

export const CurrentDateTitle = styled.h2`
  color: #8395a7;
  margin-top: 15px;
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
  height: 100vh;
  overflow: hidden;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: 1rem;
`;

export default Main;
