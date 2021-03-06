import styled from 'styled-components';

export const InputComponent = styled.input`
  padding: 0.5em;
  border: solid 1.5px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
  margin: 5px;
`;
