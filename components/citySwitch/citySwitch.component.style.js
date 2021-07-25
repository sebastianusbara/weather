import styled from 'styled-components';

export const StyledSwitch = styled.button.attrs(props => ({
    isActive: props.isActive
}))`
  background-color: ${props => props.isActive ? '#00a8ff' : 'gainsboro'};
  display: inline-block;
  padding: 12px 21px;
  border: none;
  color: ${props => props.isActive ? 'white' : 'black'};
  border-radius: 20px;
  font-size: 18px;
  margin-top: 21px;
  margin-right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
`;
