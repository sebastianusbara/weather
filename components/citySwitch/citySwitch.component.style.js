import styled from 'styled-components';

export const StyledSwitch = styled.button.attrs(props => ({
    isActive: props.isActive
}))`
  background-color: ${props => props.isActive ? '#00a8ff' : 'gainsboro'};
  display: inline-block;
  padding: 7px 15px;
  border: none;
  color: ${props => props.isActive ? 'white' : 'black'};
  border-radius: 20px;
  font-size: 14px;
  margin-top: 21px;
  margin-right: 7px;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 21px;
    font-size: 18px;
    margin-right: 12px;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
`;
