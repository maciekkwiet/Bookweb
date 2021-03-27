import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';

export const HeaderComponent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: grey;
  justify-content: space-between;
  padding: 2%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    align-items: center;
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  align-items: center;
`;

export const LogedDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogInput = styled(InputComponent)`
  width: 30%;
  height: 20%;
  margin-top: 5%;
`;

export const BookWebTitle = styled.h1`
font-family: Esteban;
font-weight: normal;
font-size: 58px;
color: #3D5A80;
text-shadow: 1px 1px 1px black, 1px 1px 1px black, 0 0 1px black, 0 0 1px black;
margin-top: 0%;
margin-bottom 0;
@media only screen and (max-width: ${(props) => props.theme.size.sm}) {
  font-size: 48px;
}
`;

export const HeaderImg = styled.img`
  z-index: 1;
  // width: 30%;
  // height: 20%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    height: 100%;
  }
`;
