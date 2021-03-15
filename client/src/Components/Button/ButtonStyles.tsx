import styled from 'styled-components';

export const ButtonComponent = styled.button`
  font-size: 0.8em;
  padding: 5px 15px;
  margin: 5px 5px;
  color: #444444;
  background: #f2f2f2;
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
