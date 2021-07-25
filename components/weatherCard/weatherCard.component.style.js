import styled from 'styled-components';

export const Card = styled.div.attrs(props => ({
    color: props.color
}))`
    margin: 1rem;
    padding: 1.5rem;
    text-align: center;
    color: white;
    background-color: ${props => (props.color)};
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 200px;
    &:hover {
      cursor: pointer;
    }
`;

export const Day = styled.div`
  font-size: 24px;
  margin-bottom: 3px;
`;

export const Date = styled.div`
  font-size: 15px;
  margin-bottom: 21px;
`;

export const Min = styled.div`
  font-size: 21px; 
  font-weight: 600; 
  margin-top: 12px;
`;

export const Max = styled.div`
  font-size: 21px; 
  font-weight: 600;
`;

export const Desc = styled.div`
  margin-top: 15px; 
  font-style: italic;
`;

export const Hour = styled.div`
  margin-bottom: 15px;
  font-size: 21px;
`;

export const Temp = styled.div`
  font-size: 32px; 
  font-weight: 600;
  margin-top: 12px;
`;

export const Indicator = styled.div`
  margin-top: 7px;
`;

export const Humidity = styled.span`
  display: inline-block;
  margin-left: 3px; 
  margin-right: 12px;
`;

export const Wind = styled.span`
  display: inline-block;
  margin-left: 3px;
`;
