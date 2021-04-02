import styled from 'styled-components';

interface VisibleCheckboxProps {
  readonly checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 0.5em;
  background: #f2f4f3;
  box-shadow: 0 0 3px 1px ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
`;

export const VisibleCheckbox = styled.div<VisibleCheckboxProps>`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0 0.5em;
  background: ${(props) => (props.checked ? props.theme.colors.green : '#fff')};
  border: solid 1px #000;
  transition: background 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
