import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';
import { ButtonComponent } from '../Button/ButtonStyles';

export const LogDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogInput = styled(InputComponent)`
  width: 30%;
  height: 20%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    margin-bottom: 0;
    margin-top: 0;
    width: 70%;
    margin-left: 30%;
    margin-right: 0;
    border-right: 0;
    padding: 3%;
    padding-right: 0;
  }
`;
export const LogButton = styled(ButtonComponent)`
  z-index: 1;
  padding-top: 7px;
  padding-bottom: 7px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width: 60%;
    height: 100%;
    margin-left: 30%;
  }
`;

export const ErrorMessageEmail = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
  position: absolute;
  top: 6%;
  right: 17%;
`;

export const ErrorMessagePassword = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
  position: absolute;
  top: 6%;
  right: 4%;
`;
