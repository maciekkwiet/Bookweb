import styled from 'styled-components';

export const BoxComponent = styled.div`
  box-sizing: border-box;
  margin: 20px auto;
  padding: 1% 2%;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  background-color: ${(props) => props.theme.backgrounds.lightTransparent};
  border-radius: 10px;
  width: 60vw;
  min-height: 20vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgContainer = styled.div`
  box-sizing: border-box;
  margin: 0 1vw;
  flex-basis: 15%;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  // padding: 2%;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookParagraph = styled.p`
  margin: 5px 0 0 30px;
  text-align: left;
  width: 15vw;
`;
export const BookTitleParagraph = styled.p`
  margin: 5px 0 0 20px;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  width: 15vw;
`;
export const BoxBookReview = styled.p`
  margin: 5px 0 0 0;
  text-align: justify;
  font-size: 13px;
`;
export const BoxReadMore = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.readMore};
  text-align: center;
  font-size: 18px;
  max-width: 90%;
  cursor: pointer;
  margin-left: 120px;
`;
