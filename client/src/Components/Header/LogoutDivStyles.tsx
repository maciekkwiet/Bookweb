import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';
import { ButtonComponent } from '../Button/ButtonStyles';

export const LogDiv = styled.div`
  // width: auto;
  // height: auto;
  display: flex;
  // justify-content: flex-start;
  justify-content: flex-end;
`;

export const LogInput = styled(InputComponent)`
  width: 30%;
  height: 20%;
  margin-top: 5%;
`;
export const LogButton = styled(ButtonComponent)`
  z-index: 1;
  height: 40%;
  margin: 5% 0 0 0;
  border: 0;
`;
