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
  width: 31vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2%;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    width: 100%;
    font-size: 12px;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  box-sizing: border-box;
  flex-basis: 50%;
  height: auto;
  media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }
`;

export const BookImage = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;
export const BookParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 12px;
  }
`;
export const BookTitleParagraph = styled.p`
  margin: 5px 0 0 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 14px;
  } ;
`;
export const BoxBookReview = styled.p`
  margin: 5px 0 0 0;
  text-align: justify;
  font-size: 13px;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 12px;
  } ;
`;
export const BoxReadMore = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.readMore};
  text-align: left;
  font-size: 14px;
  max-width: 90%;
  cursor: pointer;
  @media only screen and (max-width: ${(props) => props.theme.size.sm}) {
    font-size: 11px;
  } ;
`;
