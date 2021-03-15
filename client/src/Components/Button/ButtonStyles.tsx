import styled from 'styled-components';

export const ButtonComponent = styled.button<{ isLink?: boolean }>`
  font-size: 0.8em;
  padding: 5px 15px;
  margin: 5px 5px;
  color: ${(props) => (props.isLink ? props.theme.colors.primary : props.theme.colors.secondary)};
  background: ${(props) => (props.isLink ? props.theme.backgrounds.bright : props.theme.backgrounds.darkTransparent)};
  border: 1px #dadada solid;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 2px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }

  &:active {
    box-shadow: inset 1px 1px 1px #dfdfdf;
  }
`;
