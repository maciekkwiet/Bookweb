import styled from 'styled-components';

import { HiddenCheckbox } from './HiddenCheckbox';
import { Icon } from './Icon';

interface VisibleCheckboxProps {
  readonly checked: boolean;
}

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
