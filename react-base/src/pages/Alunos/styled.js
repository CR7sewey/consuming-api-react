import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.isRed? 'red':'blue'};
  small {
    font-size: 12px;
    margin-left: 15px;
  };
  background-color: green;
`;

export const Paragrafo = styled.p`
  color: red;
`;
