import styled from 'styled-components';

export const ButtonComponent = styled.button<{ isLink?: boolean }>`
  padding: 5px 12px;
  outline: none;
  color: ${(props) => (props.isLink ? 'black' : 'white')};
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => (props.isLink ? '#F2F4F3' : props.theme.colors.primary)};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;
