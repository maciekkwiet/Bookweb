import styled from 'styled-components';

import { InputComponent } from '../Input/InputStyles';

export const HeaderComponent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: grey;
  justify-content: space-between;
  padding: 0.5%;
  @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
    flex-direction: column;
  }
`;
export const TitleDiv = styled.div`
  // width: auto;
  // height: auto;
  display: flex;
  // justify-content: flex-start;
  justify-content: flex-start;
`;

export const LogedDiv = styled.div`
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

export const BookWebTitle = styled.h1`
font-family: Esteban;
font-weight: normal;
font-size: 58px;
line-height: 74px;
color: #3D5A80;
text-shadow: 1px 1px 1px black, 1px 1px 1px black, 0 0 1px black, 0 0 1px black;
// align-items: center;
// margin-left:-9%;
margin-top:0;
margin-bottom 0;
height:80%;
`;

export const HeaderImg = styled.img`
  z-index: 1;
  width: 25%;
  // margin-top: 1%;
  // margin-left: -10%;
  // margin-bottom: 1%;
`;
