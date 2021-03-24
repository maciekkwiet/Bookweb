import styled from 'styled-components';

interface VisibleCheckboxProps {
  readonly checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 35px;
  background: #f2f4f3;
  border-radius: 5px;
`;

export const VisibleCheckbox = styled.div<VisibleCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? '#9EB2CD' : '#CB997E')};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #9eb2cd;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
