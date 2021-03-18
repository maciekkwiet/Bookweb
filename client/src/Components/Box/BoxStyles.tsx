import styled from 'styled-components';

export const BoxComponent = styled.div`
  padding:1% 2%;
  font-family:'Montserrat';
  color: ${(props) => props.theme.colors.primary};
  font-size: 2vh;
  background-color: ${(props) => props.theme.backgrounds.lightTransparent};
  border-radius: 10px;
  width:40vw;
  min-height:20vh;
  display:flex;
  justify-content:space-between;
`;

export const ImgContainer = styled.div`
  flex-basis:20%;
  box-shadow:0px 4px 4px rgba(0,0,0,0.25);
  overflow:hidden;
`;

export const BookImage = styled.img`
width:100%;
height:100%;
`;

export const ContentContainer = styled.div`
  padding:1%;
  flex-basis:75%;
  display:flex;
  flex-direction:column;
`;
export const BookParagraph = styled.p`
text-align:left;
margin-top:5px;
`;
export const BoxBookReview = styled.p`
text-align:justify;
margin-top: 8px;
font-size:1.5vh;
`;
export const BoxReadMore = styled.a`
display: inline-block;
color:${(props) => props.theme.colors.readMore};
text-align:left; 
font-size:1.5vh;
max-width: 90%;
cursor:pointer;
`;