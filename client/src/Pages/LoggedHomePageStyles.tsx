import styled from 'styled-components';
import { BigLabel } from '../Components/BigLabel/BigLabel';



export const LoggedHomePageWrapper = styled.div`
  background: ${(props) => props.theme.backgrounds.mainGradient}
`

export const ContentWrapper = styled.div`
  display:flex;
  margin:0;
  padding:3vh 0;
  box-sizing:border-box;
  min-height:100vh;
  background: ${(props) => props.theme.backgrounds.mainGradient};
`
export const MyBooksWrapper = styled.div`
  margin:0;
  padding:2vh 0 0 0;
  box-sizing:border-box;
  min-height:90vh;
  border-right: 2px solid black;
  width:60vw;
`
export const MyBooksBigLabel = styled(BigLabel)`
  margin:0 0 5vh 0;
  padding:0;
  box-sizing:border-box;

`
export const AsideWrapper = styled.div`
  width:40%;
`
export const AsideBigLabel = styled(BigLabel)`
  margin:0;
  padding:0;
  box-sizing:border-box;
`
export const ForYouContainer = styled.div`
  margin:0 auto;
  padding:2vh 2vw 2vh 2vw;

`
export const Footer = styled.div`
  line-height:8vh;
  padding-left:8vw;
  height:8vh;
  background: ${(props) => props.theme.backgrounds.lightTransparent};
`
