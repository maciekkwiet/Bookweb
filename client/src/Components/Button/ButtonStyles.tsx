import styled from 'styled-components';

export const ButtonComponent = styled.button`
  padding: 5px 12px;
  outline: none;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;
