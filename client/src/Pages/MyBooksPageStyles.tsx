import styled from 'styled-components';
import { ShelfComponent } from '../Components/Shelf/ShelfStyles'



export const MyBooksPageWrapper = styled.div`
  background: ${(props) => props.theme.backgrounds.mainGradient}
`

export const ContentWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0;
  padding:3vh 0;
  box-sizing:border-box;
  min-height:100vh;
  background: ${(props) => props.theme.backgrounds.mainGradient};
`
export const MyBooksWrapper = styled(ShelfComponent)`
  width:70vw;
  min-height:90vh;
  margin:0 auto;

`
export const MyBooksBigLabel = styled.div`
  display:flex;
  margin:5vh 0;
  padding:0;
  box-sizing:border-box;
  width:100%;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  height: 4em;
  line-height: 4em;
  font-size: ${(props) => props.theme.h2.fontSize};
  background: ${(props) => props.theme.backgrounds.lightTransparent};
  box-shadow: ${(props) => props.theme.shadows.inset};
  text-align: center;
`
export const MyBooksBigLabelTittle = styled.h2`
margin:0;
padding:0;
box-sizing:border-box;
width:30%;
text-align:right;

`

export const MyBooksShelfImage = styled.img`
background: ${(props) => props.theme.backgrounds.lightTransparent};
margin: 10px 10px 10px 30px;
padding: 0;
width: 25%;
border-radius:10px;
`

export const Footer = styled.div`
  line-height:8vh;
  padding-left:8vw;
  height:8vh;
  background: ${(props) => props.theme.backgrounds.lightTransparent};
`
