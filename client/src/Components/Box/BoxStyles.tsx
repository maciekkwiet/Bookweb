import styled from 'styled-components';

export const BoxComponent = styled.div`
  box-sizing: border-box;
  margin: 20px 0;
  padding: 1% 2%;
  font-family: ${(props) => props.theme.fonts.default};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  background-color: ${(props) => props.theme.backgrounds.lightTransparent};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  box-sizing: border-box;
  flex-basis: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
`;
export const BookParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
`;
export const BookTitleParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`;
export const BoxBookReview = styled.p`
  margin: 5px 0 0 0;
  text-align: justify;
  font-size: 13px;
`;
export const BoxReadMore = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.readMore};
  text-align: left;
  font-size: 14px;
  max-width: 90%;
  cursor: pointer;
`;
