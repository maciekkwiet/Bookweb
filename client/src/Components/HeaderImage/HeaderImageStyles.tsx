import styled from 'styled-components';
import image from './bookBackground.png';

export const HeaderImageComponent = styled.div`
  height: 70vh;
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    height: 30vh;
  }
`;

export const FirstTitle = styled.h1`
  color: white;
  align-self: flex-start;
  margin: 2%;
  font-size: 64px;
  font-style: normal;
  font-family: Clicker Script;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 40px;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
    font-size: 25px;
  } ;
`;
export const SecondTitle = styled.h1`
  color: white;
  align-self: flex-end;
  margin: 2%;
  font-size: 45px;
  font-weight: normal;
  font-family: Montserrat;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 35px;
  }
  @media only screen and (max-width: ${(props) => props.theme.size.xs}) {
    font-size: 18px;
  } ;
`;
